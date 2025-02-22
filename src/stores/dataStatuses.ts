import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStatusesStore = defineStore('dataStatuses', () => {
  const checkedAll = ref(false)

  const toggleCheckedAll = () => (checkedAll.value = !checkedAll.value)

  return { checkedAll, toggleCheckedAll }
})
