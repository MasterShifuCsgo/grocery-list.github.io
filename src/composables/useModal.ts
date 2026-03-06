import { computed, markRaw, ref, shallowRef, type Component } from 'vue'


const isOpen = ref(false)
const component = shallowRef<Component | null>(null)
type ModalEvents = Record<string, (...args: any[]) => void>
const componentEvents = ref<ModalEvents>({})

export const useModal = () => {
  const close = () => {
    isOpen.value = false
  }

  const open = (newComponent: Component, events: ModalEvents = {}) => {
    component.value = markRaw(newComponent)
    componentEvents.value = events
    isOpen.value = true
  }

  const getModalComponent = computed(() => component.value)

  return {
    componentEvents,
    isOpen,
    close,
    open,
    getModalComponent,
  }
}
