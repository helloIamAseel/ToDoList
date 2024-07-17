<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import 'dayjs/locale/ar';
    import { filter } from "$lib/storeg/filter";

	dayjs.locale('ar');
    let dayOrNight = dayjs().format("a") == "م" ? "مساء" : "صباح";
	


const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item',
    state: (e: Record<string, boolean>) => {
        if(e.state){
            document.getElementById('arrow')?.classList.add('-rotate-90');
        } else {
            document.getElementById('arrow')?.classList.remove('-rotate-90'); 
        }
    }
};
				
</script>

<header class="flex justify-between pr-3">
    <div>
      <h1 class="text-3xl lg:text-4xl text-primary-800">{dayOrNight} الخير👋</h1>
       <div class="mt-4 whitespace-nowrap">
       <h2 class="text-l lg:text-xl text-primary-900/50">
         {dayjs().format('dddd D MMM YYYY , h:mm A')}
      </h2> 
    </div>
    </div>
     
    <div>

 <style>
      /** to override the default desing*/        
        .custom-selected {
          
            @apply bg-success-400 text-white;
          
        }           
        
        .card .selected-item {
              background-color: @apply bg-success-400 !important; 
              color: black !important; 
            }
 </style>

  <div class="pt-3 flex items-center">      
<button class="variant-filled-success border border-success-700 text-success-900 btn variant-filled w-40 lg:w-48 h-fit py-2 flex justify-between" use:popup={popupCombobox}>
	<span class="font-bold">{$filter}</span>

	<span class="!m-0">
        <svg id="arrow" class="transition-all"
        xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.5em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"/></svg></span>
</button>

<div class="card w-48 py-2 variant-filled-success text-success-800" data-popup="popupCombobox">
   
  <ListBox rounded="rounded-none">
	<ListBoxItem class="{$filter === 'جميع المهام' ? 'custom-selected selected-item' : ''}" bind:group={$filter} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
    <ListBoxItem class="{$filter === 'الــيــوم' ? 'custom-selected selected-item' : ''}" bind:group={$filter} name="medium" value="الــيــوم">الــيــوم</ListBoxItem>
    <ListBoxItem class="{$filter === 'هذا الأسبوع' ? 'custom-selected selected-item' : ''}" bind:group={$filter} name="medium" value="هذا الأسبوع">هذا الأسبوع</ListBoxItem>
	</ListBox>
 <div class="arrow bg-surface-100-600-token" />

</div>
</div>			
	
    </div>

 </header>