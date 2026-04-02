<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import * as monaco from 'monaco-editor'

const editor = useTemplateRef("editor")
let monacoEditor

const props = defineProps({
    initialCode: {
        type: String
    },
    actions: {
        type: [String]
    },

})

const getText = () => {
    if (!monacoEditor) return alert("Monaco editor not initialized")
    return monacoEditor.getValue()
}

const setText = (text) => {
    if (!monacoEditor) return alert("Monaco editor not initalized")
    monacoEditor.setValue(text)
}

defineExpose({
    getText,
    setText
})


onMounted(() => {
    monacoEditor = monaco.editor.create(editor.value, {
        language: "javascript",
        value: props.initialCode,
        automaticLayout: true,
        scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
        minimap: { enabled: false },
    })

    setText(props.initialCode || "")

    monacoEditor.onKeyDown(ev => {
        if (
            ev.code === "Enter" ||
            ev.code === "Backspace" ||
            ev.code === "ArrowLeft" ||
            ev.code === "ArrowRight" ||
            ev.code === "ArrowUp" ||
            ev.code === "ArrowDown" ||
            ev.code === "Tab" ||
            ev.altKey || ev.metaKey || ev.shiftKey || ev.ctrlKey) return
        ev.stopPropagation()
    })
})

</script>

<template>
    <div ref="editor" class="min-h-30"></div>
</template>