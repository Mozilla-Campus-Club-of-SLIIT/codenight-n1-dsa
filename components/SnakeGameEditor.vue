<script setup>
import { reactive, ref, useTemplateRef } from 'vue';
import CodeEditor from './CodeEditor.vue';
import SnakeGameCanvas from './SnakeGameCanvas.vue';

const gameTemplate = {
    mapSize: { rows: 20, cols: 20 },
    snake: [{ row: 10, col: 9 }, { row: 10, col: 10 }],
    apple: {},
    dirx: 1,
    diry: 0,
}

const emptyFn = () => { }
let game = reactive(structuredClone(gameTemplate))
game.onDirectionChange = emptyFn

const editorResult = ref("")

const editorOutputView = useTemplateRef("outputView")
const introEditor = useTemplateRef("introEditor")
const directionEditor = useTemplateRef("directionEditor")
const movementLogicEditor = useTemplateRef("movementLogicEditor")
const gameLoopEditor = useTemplateRef("gameLoopEditor")
const appleEditor = useTemplateRef("appleEditor")

const originalSetInterval = setInterval
const originalSetTimeout = setTimeout
const originalLog = console.log
let intervals = []
let timeouts = []

const mockLog = (...args) => {
    const logs = []
    logs.push(args.map(arg => JSON.stringify(arg)).join(" "))
    editorResult.value += "\n" + logs.join("\n")
    editorOutputView.value.scrollTop = editorOutputView.value.scrollHeight
}

setInterval = (...args) => {
    const id = originalSetInterval(...args)
    intervals.push(id)
    return id
}

setTimeout = (...args) => {
    const id = originalSetTimeout(...args)
    timeouts.push(id)
    return id
}

const clearAllIntervals = () => {
    for (let id of intervals) {
        clearInterval(id)
    }
    for (let id of timeouts) {
        clearTimeout(id)
    }
    intervals = []
    timeouts = []
}

const resetRunner = () => {
    clearAllIntervals()
    editorResult.value = ""
    console.log = originalLog

}

const runCode = () => {
    resetRunner()
    console.log = mockLog
    game.snake = structuredClone(gameTemplate.snake)
    game.dirx = gameTemplate.dirx
    game.diry = gameTemplate.diry
    game.apple = {}
    game.onDirectionChange = emptyFn

    try {
        const introSnippet = introEditor.value.getText()
        const directionSnippet = directionEditor.value.getText()
        const movementLogicSnippet = movementLogicEditor.value.getText()
        const appleSnippet = appleEditor.value.getText()
        const gameLoopSnippet = gameLoopEditor.value.getText()

        const code = `
            ${introSnippet}

            ${directionSnippet}

            ${movementLogicSnippet}

            ${appleSnippet}

            ${gameLoopSnippet}
        `
        new Function("game", "originalLog", code)(game, originalLog)

    } catch (err) {
        console.error(err)
        editorResult.value += "\n" + err.toString()
    }

}

const INTRO_CODE =
    `console.log('Map', game.map)
console.log('Snake body', game.snake)
`

const DIRECTION_CHANGE_LOGIC =
    `
 game.onDirectionChange = function(direction) {
    // console.log(direction)
    if (direction == "left") {
        // ...
    } 
    // todo: handle other directions
}
`
const MOVEMENT_LOGIC =
    `function move() {
    // move the snake head
    // initially, dirx = 1 and diry = 0; so it should go to right
    // console.log({ dirx: game.dirx, diry: game.diry })
    // const currentHead = game.snake[game.snake.length - 1]
    // console.log({ currentHead })
    // calculate the new head position
    // const newHead = { col: currentHead.col + game.dirx, row: currentHead.row + game.diry }
    // push the new head position to the snake body
    // game.snake.push(newHead)
}
`
const APPLE_CODE =
    `function checkApple() {
    const snakeHead = game.snake[game.snake.length - 1]
    if (game.apple.row == snakeHead.row && game.apple.col == snakeHead.col) {
        eatApple()
        placeApple()
    }
}

function eatApple() {
    console.log("Eating...")
    // when we eat an apple, we'll add another body part to snake
    // so we can simulate growth
    
    // hint: think of what you did to solve the unintended growth in the movement logic
    // you'll have to do something to reverse that effect here
}

function placeApple() {
    // pick a random empty cell
    const rows = game.mapSize.rows
    const cols = game.mapSize.cols

    let newRow, newCol
    do {
        newRow = Math.floor(Math.random() * rows)
        newCol = Math.floor(Math.random() * cols)
        // check if new position overlaps snake
    } while (game.snake.some(segment => segment.row === newRow && segment.col === newCol))

    game.apple.row = newRow
    game.apple.col = newCol
}
`

const GAME_LOOP_CODE =
    `function setup() {
    placeApple()    
}

function gameLoop() {
    move()
    checkApple()
}

setup()
// run game loop every 1 second
setInterval(gameLoop, 1000)
`
</script>

<template>
    <div class="grid grid-cols-[minmax(0,6fr)_minmax(0,4fr)] gap-5 justify-between">
        <div class="max-h-[60vh] h-[60vh] overflow-y-scroll">
            <details>
                <summary>Introduction</summary>
                Welcome to <b>snake game!</b>. Here we'll try to make a game using what we have learned so far
                <br />
                To get started press the <b>Run code</b>
                <CodeEditor ref="introEditor" :initial-code="INTRO_CODE" />
                <p>
                    Play around with the above editor to familiarize yourself.
                    Make sure to comment all these lines before moving to the next step.
                </p>
            </details>
            <details>
                <summary>Changing Directions</summary>
                To move the snake, we need to track its direction using <code>game.dirx</code> and
                <code>game.diry</code>.
                <blockquote>
                    For example, if <code>dirx</code> is 1, the snake moves right and cannot change horizontally.
                    If <code>dirx</code> is -1, it moves left. The same logic applies for <code>diry</code>.
                </blockquote>
                <b>Task:</b> Implement the logic to update the snake's direction when the game controls are pressed.
                <CodeEditor ref="directionEditor" :initial-code="DIRECTION_CHANGE_LOGIC" />
            </details>
            <details>
                <summary>Movement logic</summary>
                <CodeEditor ref="movementLogicEditor" :initial-code="MOVEMENT_LOGIC" />
                <blockquote>
                    <div>You might notice that the snake is growing without eating anything.</div>
                    <div>Think of a way to drop its tail <i>(Hint: The snake's head leads the way, and its tail always
                            follows last... remind you of anything?)
                        </i></div>
                </blockquote>
            </details>
            <details>
                <summary>Eat and grow!</summary>
                <CodeEditor ref="appleEditor" :initial-code="APPLE_CODE" />
            </details>
            <details>
                <summary>Game loop</summary>
                This runs every tick and updates the game state using the logic defined above.
                <CodeEditor ref="gameLoopEditor" :initial-code="GAME_LOOP_CODE" />
            </details>
            <button v-on:click="runCode()" class="button">Run code</button>
        </div>
        <div class="grid gap-2 h-full container justify-items-center">
            <SnakeGameCanvas :game="game" />
            <div class="flex gap-4 w-full max-w-full overflow-hidden items-start">
                <div class="container flex-1 overflow-scroll m-2 h-30" ref="outputView">
                    <b>Output:</b>
                    <pre>{{ editorResult }}</pre>
                </div>
                <div class="grid gap-1">
                    <div class="flex justify-center">
                        <button @click="() => game.onDirectionChange('up')" class="key">↑</button>
                    </div>
                    <div class="flex gap-1">
                        <button @click="() => game.onDirectionChange('left')" class="key">←</button>
                        <button @click="() => game.onDirectionChange('down')" class="key">↓</button>
                        <button @click="() => game.onDirectionChange('right')" class="key">→</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.key {
    padding: 0.25rem;
    background: var(--bg-2);
    border-radius: 6px;
    border: 1px solid var(--border);
    width: 2rem;
    font-weight: 900;
}

.key:hover {
    opacity: 0.85;
}

.key:active {
    opacity: 0.6;
}
</style>