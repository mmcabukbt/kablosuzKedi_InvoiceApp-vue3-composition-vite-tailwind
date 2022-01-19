<script setup>
import { computed, inject } from "vue";
const props = defineProps({
	item: Object,
});
const deleteItem = inject("deleteItem");

const deleteIt = () => deleteItem(props.item);
</script>

<template>
	<div class="">
		<input
			autocomplete="off"
			type="text"
			required
			:value="item.productName"
			disabled
			class="w-[260px] px-1 bg-slate-800 rounded-sm mr-2"
		/>
		<input
			autocomplete="off"
			type="number"
			min="1"
			required
			:value="item.productQuantity"
			disabled
			class="w-[65px] text-right bg-slate-800 rounded-sm mr-2"
		/>
		<input
			autocomplete="off"
			type="number"
			min="0"
			required
			:value="item.productPrice"
			disabled
			class="w-[85px] text-right bg-slate-800 rounded-sm mr-2"
		/>
		<span class="inline-block w-[110px] text-right text-gray-400">
			{{
				item.total.toLocaleString("tr-TR", {
					style: "currency",
					currency: "TRY",
				})
			}}
		</span>
		<div class="inline-block align-middle ml-2">
			<button
				tabindex="-1"
				class="group delete-button text-red-400 hover:text-red-800"
				@click="deleteIt"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path
						d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>