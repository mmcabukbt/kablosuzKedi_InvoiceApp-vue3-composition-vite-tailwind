<script setup>
import SidebarInvoice from "./SidebarInvoice.vue";
const props = defineProps({
	invoiceList: Array,
	showInvoice: Function,
});
</script>

<template>
	<aside class="bg-gray-700 w-[300px] h-screen text-white">
		<h3 class="text-2xl font-bold mt-2 p-2">Fatura Listesi</h3>
		<SidebarInvoice
			v-for="invoice in invoiceList"
			:key="invoice.id"
			:invoice="invoice"
			class="odd:bg-gray-600 flex justify-between items-center p-2"
		/>
	</aside>
</template>