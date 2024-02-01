import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GET_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', () => {
  const token = ref<string | null>('')
  token.value = GET_TOKEN()

  return {
    token
  }
})

export default useUserStore
