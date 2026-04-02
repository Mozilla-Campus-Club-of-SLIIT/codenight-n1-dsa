<script setup>
import { onMounted, useTemplateRef, watch, watchEffect } from 'vue';

const props = defineProps({
    game: {
        type: {
            map: [[Number]]
        }
    }
})

const canvas = useTemplateRef("canvas")
const TILE_WIDTH = 15
const TILE_HEIGHT = 15

const setup = () => {
    if (!canvas?.value) return console.warn("SnakeGameCanvas not initialized yet")
    const dpi = window.devicePixelRatio
    const canvasWidth = canvas.value.width
    const canvasHeight = canvas.value.height

    canvas.value.width = canvasWidth * dpi
    canvas.value.height = canvasHeight * dpi
    canvas.value.style.width = `${canvasWidth}px`
    canvas.value.style.height = `${canvasHeight}px`

    const ctx = canvas.value.getContext("2d")
    ctx.save()
    ctx.scale(dpi, dpi)

}

const draw = () => {
    if (!canvas?.value) return console.warn("SnakeGameCanvas not initialized yet")
    const canvasWidth = canvas.value.width
    const canvasHeight = canvas.value.height

    const ctx = canvas.value.getContext("2d")

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.strokeStyle = "#3d261e";
    for (let ri = 0; ri < props.game.mapSize.rows; ri++) {
        for (let ci = 0; ci < props.game.mapSize.cols; ci++) {
            ctx.strokeRect(ci * TILE_WIDTH, ri * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)
        }
    }

    // draw snake head
    ctx.fillStyle = "#e04a1a"
    const snakeHead = props.game.snake[props.game.snake.length - 1]
    ctx.fillRect(snakeHead.col * TILE_WIDTH, snakeHead.row * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)

    // draw snake body
    for (let i = 0; i < props.game.snake.length - 1; i++) {
        const bodyFragment = props.game.snake[i]
        ctx.fillStyle = "red"
        ctx.fillRect(bodyFragment.col * TILE_WIDTH, bodyFragment.row * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)
    }

    // draw apple
    ctx.fillStyle = "green"
    ctx.fillRect(props.game.apple.col * TILE_WIDTH, props.game.apple.row * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)

}

onMounted(() => {
    setup()
    draw()
})

watch(props.game, draw)

</script>

<template>
    <canvas ref="canvas" width="300" height="300"></canvas>
</template>