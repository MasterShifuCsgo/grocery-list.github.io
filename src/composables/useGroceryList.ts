import { useLocalStorage } from './useLocalStorage'

export type GroceryItem = {
  name: string
  isAvailable: boolean
}

export function useGroceryList(defaultValue: GroceryItem[]) {
  return useLocalStorage<GroceryItem[]>('grocery-list', defaultValue)
}
