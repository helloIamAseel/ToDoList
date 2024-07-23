<script lang="ts">

  import Header from "$lib/Header.svelte";
  import TaskInput from "$lib/TaskInput.svelte";
  import TasksList from "$lib/TasksList.svelte";
   

</script>

<svelte:head>
  <title>
   :منظم المهام
  </title>
</svelte:head>


<div class="p-2 pt-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-screen-lg mx-auto">
	
  <Header/>
  <TaskInput/>
  <TasksList/>
 
</div>
