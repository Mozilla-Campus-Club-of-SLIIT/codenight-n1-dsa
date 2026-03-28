<script setup>
import { ref, computed } from 'vue'

// Props: single question
// Structure: { text: String,  options: [{id, text}], answer: [ids] }
const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const selected = ref([])       // user selections
const showResult = ref(false)  // show result only after check

// toggle selection
function toggleOption(optId) {
  // reset result whenever user changes selection
  showResult.value = false

  if (props.question.answer.length === 1) {
    selected.value = [optId]   // single choice
  } else {
    if (selected.value.includes(optId)) {
      selected.value = selected.value.filter(x => x !== optId)
    } else {
      selected.value.push(optId)
    }
  }
}

// check correctness
const isCorrect = computed(() => {
  const a = [...selected.value].sort()
  const b = [...props.question.answer].sort()
  console.log({ a, b })
  return JSON.stringify(a) === JSON.stringify(b)
})

// user clicked Check Answer
function checkAnswer() {
  showResult.value = true
}
</script>

<template>
  <div class="quiz-container">
    <p class="question-text">{{ props.question.text }}</p>

    <div class="options">
      <label 
        v-for="opt in props.question.options" 
        :key="opt.id"
        :class="{ selected: selected.includes(opt.id) }"
      >
        <input 
          :type="props.question.answer.length > 1 ? 'checkbox' : 'radio'" 
          :name="props.question.text" 
          :value="opt.id" 
          @change="toggleOption(opt.id)"
        />
        {{ opt.text }}
      </label>
    </div>

    <button class="check-btn" @click="checkAnswer">Check Answer</button>

    <p v-if="showResult" :class="isCorrect ? 'result correct' : 'result wrong'">
      {{ isCorrect ? 'Correct!' : 'Wrong!' }}
    </p>
  </div>
</template>

<style scoped>
.quiz-container {
  padding: 1rem;
  background: var(--bg-2);
  border-radius: 6px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-text {
  font-weight: 600;
  color: var(--text);
}

.options label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
  user-select: none;
  color: var(--text);
  padding: 2px 6px;
}

.options label.selected {
  background: var(--bg-3);
  border-radius: 4px;
}

.check-btn {
  padding: 0.5rem 1rem;
  font-weight: 600;
  background: var(--orange);
  color: var(--text);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-start;
}

.check-btn:hover {
  opacity: 0.85;
}

.result.correct {
  color: #4caf50;
  font-weight: 600;
}

.result.wrong {
  color: #f44336;
  font-weight: 600;
}
</style>