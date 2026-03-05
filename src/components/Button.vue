<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    type: 'button',
  }
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    :type="type"
    class="px-2 py-1 text-white font-semibold"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
