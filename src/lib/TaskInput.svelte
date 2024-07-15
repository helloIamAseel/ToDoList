<script lang="ts">
  import { toDo } from "$lib/storeg/store";
  import dayjs from "dayjs";

  let titel = "";

  function addTask() {
    toDo.update((currentTask) => {
      currentTask.push({
        titel,
        douDate: dayjs().format(),
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

    /* to gave the placeholder a new color */

    .custom-placeholder::placeholder {
      color: #a1167f; 
      opacity: 0.5; /* for the saturstion of the color */
    }
   
</style>
 
<div
  class="variant-ghost-secondary costom-border input-group input-group-divider flex justify-between text-secondary-600"
>
  <input 
    bind:value={titel}
    class="flex-1 custom-placeholder"
    type="search"
    placeholder="إضافة مهمة"
  />
  <button on:click={addTask} class="bg-secondary-500 text-secondary-900 font-semibold hover:bg-secondary-400">حفظ</button>
</div>
