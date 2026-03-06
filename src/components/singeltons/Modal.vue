<script setup lang="ts">
import { useModal } from '@/composables/useModal';

const { close, isOpen, componentEvents, getModalComponent: comp } = useModal();

</script>
<template>
  <div v-if="isOpen" class="absolute inset-0 bg-black opacity-35" @pointerdown="close()" />
  <div v-if="isOpen" class="absolute inset-0 flex items-center justify-center">
    <div class="relative bg-white rounded-3xl px-10 py-20" @pointerdown.stop>
      <component v-if="comp" :is="comp" v-on="componentEvents" />
    </div>
  </div>
</template>
