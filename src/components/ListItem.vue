<script setup lang="ts">
import Button from './Button.vue'

defineProps<{ name: string }>()
const emit = defineEmits<{
  remove: [name: string]
}>()
const isAvailable = defineModel()

</script>
<template>
  <li class="flex items-center py-1">
    <Button class="bg-red-400" @click="emit('remove', name)">X</Button>
    <div class="flex items-center min-w-0 text-right">
      <span class="font-mono text-xl font-semibold mr-8 w-64 overflow-auto mx-2 whitespace-nowrap">{{ name }}</span>
      <input type="checkbox" class="h-6.25 w-6.25 shrink-0" v-model="isAvailable" />
    </div>
  </li>
</template>
