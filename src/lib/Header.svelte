<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import 'dayjs/locale/ar';

	dayjs.locale('ar');
    let dayOrNight = dayjs().format("a") == "م" ? "مساء" : "صباح";
	
let comboboxValue: string = "جميع المهام";

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
</script>

<header class="flex justify-between">
    <div>
      <h1 class="text-4xl">{dayOrNight} الخير👋</h1>
       <h2 class="text-xl mt-3 pl-20 text-black/50 whitespace-nowrap">
         {dayjs().format('dddd D MMM YYYY , h:mm A')}
      </h2> 
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
        
<button class="variant-filled-success border border-success-700 text-black btn variant-filled w-48 h-fit py-2" use:popup={popupCombobox}>
	<span class="font-bold">{comboboxValue}</span>

	<span class="!m-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/></svg></span>
</button>

<!-- bg-success-300-->
<div class="card w-48 py-2 variant-filled-success" data-popup="popupCombobox">
   
  <ListBox rounded="rounded-none">
	<ListBoxItem class="{comboboxValue === 'جميع المهام' ? 'custom-selected selected-item' : ''}" bind:group={comboboxValue} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
    <ListBoxItem class="{comboboxValue === 'الــيــوم' ? 'custom-selected selected-item' : ''}" bind:group={comboboxValue} name="medium" value="الــيــوم">الــيــوم</ListBoxItem>
    <ListBoxItem class="{comboboxValue === 'هذا الأسبوع' ? 'custom-selected selected-item' : ''}" bind:group={comboboxValue} name="medium" value="هذا الأسبوع">هذا الأسبوع</ListBoxItem>
	</ListBox>
 <div class="arrow bg-surface-100-600-token" />

</div>
					
	
    </div>

 </header>