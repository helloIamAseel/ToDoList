<script lang="ts">

  import Header from "$lib/Header.svelte";
  import { toDo } from "$lib/storeg/store";
  import dayjs from "dayjs";
    
   let titel = "";

   function addTask() {

     toDo.update((currentTask) => {
		currentTask.push({
			titel,
			douDate: dayjs(),
			isDone: false,
		});
		return currentTask;
	 });
      titel = "";
   }

   $: console.log(titel);
   

</script>

<style>
	/**To add a border color to the input element*/
  
	.costom-border {
	  border-color: #b30e87
	}
  
</style>
 
 
<div class="p-4 sm:p-4 md:p-6 lg:p-8 xl:p-14 flex flex-col gap-6 max-w-screen-lg mx-auto">
	
  <Header/>
  <div class="variant-ghost-secondary costom-border input-group input-group-divider flex justify-between">
	<input bind:value={titel} class="flex-1" type="search" placeholder="إضافة مهمة" />
	<button on:click={addTask} class="bg-secondary-400">حفظ</button>
</div>
</div>
