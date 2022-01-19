<script setup>
import { computed, reactive } from "vue";
import InvoiceItem from "./InvoiceItem.vue";
import InvoiceNewItem from "./InvoiceNewItem.vue";
const props = defineProps({
	items: Array,
});

const initiateItem = (itm) => {
	itm.productName = "";
	itm.productQuantity = 1;
	itm.productPrice = 0.0;
};
const newItem = reactive({});
initiateItem(newItem);
const addItem = () => {
	props.items.push({
		id: new Date().getTime(),
		...newItem,
		total: total.value,
	});
	initiateItem(newItem);
};

const total = computed(() => newItem.productPrice * newItem.productQuantity);
</script>

<template>
	<div>
		<!-- <pre>{{ items }}</pre> -->
		<div class="table-header flex">
			<span class="text-left p-1 w-[250px] mr-2">Ürün Adı</span>
			<span class="text-right p-1 w-[70px] mr-2">Adet</span>
			<span class="text-right p-1 w-[90px] mr-8">Fiyat</span>
			<span class="text-right p-1 w-[90px]">Toplam</span>
		</div>
		<div class="table-body">
			<InvoiceItem v-for="item in items" :key="item.id" :item="item" />
			<InvoiceNewItem :newItem="newItem" :resetItem="initiateItem" />
		</div>

		<button
			@click="addItem"
			class="
				flex
				justify-center
				w-full
				rounded-full
				border border-cyan-800
				mt-4
				p-1
				text-cyan-600
				group
				hover:shadow-cyan-300 hover:text-cyan-200 hover:shadow
			"
		>
			<svg
				class="fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="5 0 24 24"
				height="22"
				width="22"
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
			</svg>
			<span class="text-cyan-600 group-hover:text-cyan-200">Ekle</span>
		</button>
	</div>
</template>