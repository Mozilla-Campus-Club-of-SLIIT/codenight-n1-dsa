import { defineCodeRunnersSetup } from '@slidev/types'
import { executeJava, executePython } from '../lib/compiler'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code) {
      const result = await executePython(code)
      return {
        text: result
      }
    },
    async java(code) {
      const result = await executeJava(code)
      return {
        text: result
      }
    }
  }
})