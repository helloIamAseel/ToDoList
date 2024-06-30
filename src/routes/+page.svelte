<script lang="ts">
	import dayjs from 'dayjs';
	import 'dayjs/locale/ar';

	dayjs.locale('ar');

	let dayOrNight = dayjs().format('a') == 'م' ? 'مساء' : 'صباح';
</script>

<div class="p-12">
	<header class="flex justify-between">
		<div>
		  <h1 class="text-4xl">{dayOrNight} الخير👋</h1>
	 	  <h2 class="text-xl mt-3 pl-20 text-black/50">
		     {dayjs().format('dddd D MMM YYYY , h:mm A')}
		  </h2> 
		</div>
		 
		<div class="bg-success-400 w-40 h-16 rounded-xl"></div>
	 </header>
</div>
