<script>
   import dayjs from "dayjs";
   import { toDo } from "$lib/storeg/store";
   import relativeTime from 'dayjs/plugin/relativeTime'
   import TaskInput from "./TaskInput.svelte";
   import Taskli from "$lib/Taskli.svelte";


   dayjs.extend(relativeTime);
</script>

<ol class="flex flex-col gap-2">
    <h3 class="font-semibold text-primary-800 text-lg">المهام المتبقية:</h3>
     <Taskli doneTasks={false}/>
  </ol>

  <ol class="flex flex-col gap-2">
    <h3 class="font-semibold text-primary-800 text-lg">المهام المنجزة:</h3>
	<Taskli doneTasks={true}/>
  </ol>