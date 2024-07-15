// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { Dayjs } from "dayjs";
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
   
}


declare global{
	interface Task{
	    titel: string;
		douDate: srting;
        isDone: boolean;
    }
		 
}