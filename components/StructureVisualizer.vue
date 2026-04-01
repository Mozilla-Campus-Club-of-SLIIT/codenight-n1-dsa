<script setup>
import { reactive, useTemplateRef, ref } from 'vue'
import CodeEditor from './CodeEditor.vue'

const props = defineProps({
  name: {
    type: String,
    default: "structure"
  },
  initialCode: {
    type: String
  },
  actions: {
    type: [String]
  },
  runCode: {
    type: Function,
  }
})

const structure = reactive([])
let editorResult = ref("")

const editor = useTemplateRef("editor")

const runCode = () => {
  try {
    const logs = []
    const originalLog = console.log
    console.log = (...args) => logs.push(args.join(" "))
    new Function(props.name, editor.value.getText())(structure)
    console.log = originalLog
    editorResult.value = logs.join("\n")
  } catch (error) {
    alert(error)
  }
}

const replaceWithAction = (action) => {
  editor.value.setText(action)
}

</script>

<template>
  <div class="flex justify-between gap-5 items-start h-[50vh]">
    <div class="grid container p-4 flex-auto gap-5">
      <CodeEditor ref="editor" :initial-code="props.initialCode"/>
      <div class="container">
        <b>Output:</b>
        <div>{{ editorResult }}</div>
      </div>
      <div>
        <button v-on:click="runCode" class="button">Try it out!</button>
        <button v-for="action in props.actions" class="secondary-button" v-on:click="() => replaceWithAction(action)">
          {{ action }}
        </button>
      </div>
    </div>
    <div class="container mr-5 flex flex-col-reverse h-full w-max">
      <div class="m-2 text-center">{{ props.name }}</div>
      <div v-if="structure.length">
        <div v-for="(value, index) in [...structure].reverse()" class="flex items-center gap-2">
          <div class="text-gray-500 text-sm w-3 text-right">
            {{ structure.length - index - 1 }}
          </div>

          <div class="w-30 h-12 flex items-center justify-center border border-gray-400 text-gray-400">
            {{ value }}
          </div>
        </div>
      </div>
      <div v-else class="flex items-center gap-2">
        <div class="text-gray-500 text-sm w-3 text-right">
          0
        </div>
        <div class="w-30 h-12 flex items-center justify-center border border-dashed border-gray-400 text-gray-400">
          Empty
        </div>
      </div>
    </div>
  </div>
</template>