<script lang="ts">
   import dayjs from "dayjs";
   import { toDo } from "$lib/storeg/store";
   import relativeTime from 'dayjs/plugin/relativeTime'
   import { slide } from 'svelte/transition';
   import { quintOut } from 'svelte/easing';
   dayjs.extend(relativeTime);
   import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
		const modalStore = getModalStore();
                        
   export let doneTasks: boolean;

//show a confirming message to the user when trying to delete a task 
  function confirmDeleting(task: Task){
    const modal: ModalSettings = {
	type: 'confirm',
	title: 'حذف المهمة',
	body: `سيتم حذف المهمة"${task.titel}"`,
	buttonTextCancel: 'تراجع',
    buttonTextConfirm: 'حذف',
	response: (r: boolean) => {
      if (r) {
        toDo.update((currentTask) => {
          let index = currentTask.indexOf(task);
          currentTask.splice(index, 1);
          return currentTask; 
        })
      }
    },
    
};
modalStore.trigger(modal);

  }

</script>

{#each $toDo as task}
 {#if task.isDone == doneTasks}
 <li 
  transition:slide={{ delay: 200, duration: 350, easing: quintOut, axis: 'y' }} 
 class="variant-ghost-warning border-1 border-warning-500 rounded-md p-1 mt-2 font-semibold flex items-center justify-between h-12">
    <div class="flex items-center">
        <label class="flex items-center space-x-2 pr-2">
            <input bind:checked={task.isDone} class="checkbox" type="checkbox" />
            </label>
        <span class="text-warning-900 pr-2">
            {task.titel}
        </span>
     </div>
    
     <div class="flex gap-2">
        <button class="btn text-warning-700 bg-warning-700/30 rounded-md p-1 sm:p-2 md:p-2 lg:p-2 text-xs sm:text-sm md:text-base lg:text-md hover:bg-warning-600/40">
          {dayjs().to(dayjs(task.douDate))}
        </button>
        <button on:click={() => confirmDeleting(task)}
        class="btn text-warning-700 bg-warning-700/30 rounded-md rotate-90 p-[0.3rem] sm:p-1 md:p-1 lg:p-2 text-xs sm:text-sm md:text-base lg:text-md hover:bg-warning-600/40">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 40 40"><path fill="currentColor" d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.058 1.058 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"/></svg>
        </button>
      </div>
</li>
 {/if}  
{/each}