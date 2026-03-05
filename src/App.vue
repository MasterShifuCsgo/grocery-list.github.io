<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import ListItem from './components/ListItem.vue'
import { useGroceryList } from './composables/useGroceryList'

const groceryList = useGroceryList([
  { name: 'potato', isAvailable: true },
  { name: 'hakkliha', isAvailable: true },
  { name: 'sink', isAvailable: true },
  { name: 'tomato', isAvailable: false },
  { name: 'cucumber', isAvailable: true },
])
const newItemName = ref('')

function removeItem(name: string) {
  const index = groceryList.value.findIndex((item) => item.name === name)
  if (index !== -1) groceryList.value.splice(index, 1)
}

function addItem() {
  const name = newItemName.value.trim()
  if (!name) return

  groceryList.value.push({ name, isAvailable: true })
  newItemName.value = ''
}

</script>
<template>
  <div class="flex w-full flex-col justify-center px-10">
    <div class="my-7 flex w-full max-w-md gap-2">
      <input
        v-model="newItemName"
        type="text"
        placeholder="Name"
        class="w-full rounded border border-gray-300 px-2 py-1"
        @keydown.enter="addItem"
      />
      <Button @click="addItem" class="bg-green-500 text-white p-2">Add</Button>
    </div>
    <ul class="w-full max-w-md list-none m-0 p-0 space-y-2">
      <ListItem v-for="(item, index) in groceryList" :key="index" :name="item.name" v-model="item.isAvailable"
        @remove="removeItem" />
    </ul>
  </div>
</template>
