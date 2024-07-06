import { persisted } from 'svelte-persisted-store'

export const toDo = persisted<Task[]>('toDo', []);