import { persisted } from 'svelte-persisted-store'

export const filter = persisted<'جميع المهام' | 'الــيــوم' | 'هذا الأسبوع'>('filter','جميع المهام');