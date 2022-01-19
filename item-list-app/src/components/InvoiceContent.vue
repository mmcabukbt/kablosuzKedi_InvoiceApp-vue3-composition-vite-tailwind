<script setup>
import { reactive, computed, provide, watch } from "vue";
import InvoiceContact from "./InvoiceContact.vue";
import InvoiceItems from "./InvoiceItems.vue";

const props = defineProps({
	invoiceList: Array,
	showingInvoice: Object,
});

const initiateInvoice = (invoice, showingInvoice = null) => {
	invoice.contact = showingInvoice
		? {
				contactName: showingInvoice.contactName,
				contactEmail: showingInvoice.contactEmail,
				contactCity: showingInvoice.contactCity,
				contactZipcode: showingInvoice.contactZipcode,
				contactCountry: showingInvoice.contactCountry,
		  }
		: {
				contactName: null,
				contactEmail: null,
				contactCity: null,
				contactZipcode: null,
				contactCountry: null,
		  };
	invoice.items = showingInvoice ? showingInvoice.items : [];
};
const invoiceInstance = reactive({});
initiateInvoice(invoiceInstance);

const saveInvoice = () => {
	props.invoiceList.push({
		id: new Date().getTime(),
		...invoiceInstance.contact,
		items: invoiceInstance.items,
		subtotal: subtotal.value,
		tax: tax.value,
		grandtotal: grandtotal.value,
		created_at: new Date().getTime(),
	});
	initiateInvoice(invoiceInstance);
};

const deleteItem = (item) =>
	(invoiceInstance.items = invoiceInstance.items.filter(
		(itm) => itm.id !== item.id
	));

provide("deleteItem", deleteItem);
watch(
	() => props.showingInvoice,
	() => initiateInvoice(invoiceInstance, props.showingInvoice)
);
const subtotal = computed(() =>
	invoiceInstance.items.reduce((t, i) => t + i.total, 0.0)
);
const tax = computed(() => subtotal.value * 0.18);
const grandtotal = computed(() => subtotal.value * 1.18);
</script>

<template>
	<section
		class="
			bg-gray-900
			w-[510]
			shrink-0
			mx-auto
			mt-10
			py-2
			px-4
			rounded-md
			shadow-2xl
		"
	>
		<!-- {{ props.showingInvoice }} -->
		<!-- <pre>{{ invoiceList }}</pre> -->
		<!-- FAtura Bilgileri -->
		<AppSectionTitle sectionTitle="Fatura Bilgileri" />
		<InvoiceContact :contact="invoiceInstance.contact" />

		<div class="mt-5">
			<AppSectionTitle sectionTitle="Fatura Kalemleri" />
			<InvoiceItems :items="invoiceInstance.items" />
		</div>
		<!-- Summary -->
		<div class="mt-5 flex justify-end items-end">
			<div class="text-right mr-5">
				<div class="text-gray-500">Ara Toplam :</div>
				<div class="text-gray-400">KDV %18 :</div>
				<div class="text-gray-300">Genel Toplam :</div>
			</div>
			<div class="text-right">
				<div class="text-gray-500">
					{{
						subtotal.toLocaleString("tr-TR", {
							style: "currency",
							currency: "TRY",
						})
					}}
				</div>
				<div class="text-gray-400">
					{{
						tax.toLocaleString("tr-TR", {
							style: "currency",
							currency: "TRY",
						})
					}}
				</div>
				<div class="text-gray-300">
					{{
						grandtotal.toLocaleString("tr-TR", {
							style: "currency",
							currency: "TRY",
						})
					}}
				</div>
			</div>
		</div>
		<AppSectionTitle sectionTitle="Fatura Tutarı" />
		<!-- <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" /> -->
		<div class="text-right my-5">
			<button @click="saveInvoice" class="text-cyan-300 hover:text-sky-400">
				Kaydet
			</button>
		</div>
	</section>
</template>