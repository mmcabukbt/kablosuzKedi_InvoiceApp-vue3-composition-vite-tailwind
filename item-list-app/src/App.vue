<script setup>
// import themeVue from "./theme.vue";
import { reactive, ref, provide } from "vue";
import AppSidebar from "./components/appComponents/AppSidebar.vue";
import InvoiceContent from "./components/InvoiceContent.vue";

const invoiceList = ref([]);
const deleteInvoice = (invoice) =>
	(invoiceList.value = invoiceList.value.filter(
		(inv) => inv.id !== invoice.id
	));
const showingInvoice = reactive({});
const showInvoice = (invoice) => (showingInvoice.value = invoice);
provide("deleteInvoice", deleteInvoice);
provide("showInvoice", showInvoice);
</script>

<template>
	<div
		class="
			w-screen
			h-screen
			bg-gray-800
			flex flex-row
			text-white
			items-start
			justify-center
		"
	>
		<AppSidebar
			:invoiceList="invoiceList"
			:deleteInvoice="deleteInvoice"
			:showInvoice="showInvoice"
		/>
		<InvoiceContent
			:invoiceList="invoiceList"
			:showingInvoice="showingInvoice.value"
		/>
	</div>
	<!-- <themeVue></themeVue> -->
</template>
