<script>
   import dayjs from "dayjs";
   import { toDo } from "$lib/storeg/store";
   import relativeTime from 'dayjs/plugin/relativeTime'
   import { slide } from 'svelte/transition';
   import { quintOut } from 'svelte/easing';
   import Taskli from "$lib/Taskli.svelte";


   dayjs.extend(relativeTime);
</script>

{#if $toDo.length == 0}

 <div class="flex items-center justify-center text-xl
  font-bold h-[50dvh] text-primary-700/60"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 15.6c.3.2.7.2 1 0l5-2.9v.3c.7 0 1.4.1 2 .4v-1.8l1-.6c.5-.3.6-.9.4-1.4l-1.5-2.5c-.1-.2-.2-.4-.4-.5l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.6 6.6c-.2.1-.4.2-.5.4L1.6 9.6c-.3.5-.1 1.1.4 1.4c.3.2.7.2 1 0v5.5c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2m-2 0l-6-3.4V9.2l6 3.4zm9.1-9.6l-6.3 3.6l-.6-1l6.3-3.6zM12 10.8V4.2l6 3.3zm10.5 6.1L20.4 19l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1z"/></svg> 
  لا يوجد مهام</div>

 {:else}
 
 {#if $toDo.filter((task) => !task.isDone).length > 0}
 <ol transition:slide={{ delay: 200, duration: 350, easing: quintOut, axis: 'y' }}  
 class="flex flex-col gap-2">
    <h3 class="font-semibold text-primary-800 text-lg">المهام المتبقية:</h3>
     <Taskli doneTasks={false}/>
  </ol>
 {/if}

 {#if $toDo.filter((task) => task.isDone).length > 0}
  <ol transition:slide={{ delay: 200, duration: 350, easing: quintOut, axis: 'y' }} 
   class="flex flex-col gap-2">
    <h3 class="font-semibold text-primary-800 text-lg">المهام المنجزة:</h3>
	<Taskli doneTasks={true}/>
  </ol>
 {/if}
{/if}