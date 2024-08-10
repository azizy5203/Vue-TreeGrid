import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
  }
  return { count, doubleCount, increment }
})
