import { reactive } from 'vue'
import { Language } from '@/enums';

export const store = reactive<{
  language: Language | null
}>({
  language: null
})