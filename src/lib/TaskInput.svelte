<script lang="ts">
  import { toDo } from "$lib/storeg/store";
  import dayjs from "dayjs";

  let titel = "";
  let douTime = dayjs().add(1, "hour").format("YYYY-MM-DDTHH:mm");

  function addTask() {
    toDo.update((currentTask) => {
      currentTask.push({
        titel,
        douDate: douTime,
        isDone: false,
      });
      return currentTask.sort((a: Task, b:Task) => {
        return dayjs(a.douDate).unix() - dayjs(b.douDate).unix();
      });
    });
    titel = "";
  }

 
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
 
<form
  class="variant-ghost-secondary costom-border input-group input-group-divider flex justify-between flex-col sm:flex-row text-secondary-600"
>
  <input 
    bind:value={titel}
    class="flex-1 custom-placeholder"
    type="search"
    placeholder="إضافة مهمة"
  />
  <input
   bind:value={douTime} 

   class="input sm:w-fit rounded-none border-none" 
   title="Input (datetime-local)" 
   type="datetime-local" 
  />
  <button type="submit" disabled={titel.trim().length == 0} on:click={addTask} class="bg-secondary-500 text-secondary-900 font-semibold hover:bg-secondary-400 p-2">
    <span class="mx-auto">حفظ</span>
  </button>
</form>
