<script setup>
import { computed } from "vue";
const props = defineProps({
	newItem: Object,
	resetItem: Function,
});

const resetIt = () => props.resetItem(props.newItem);

const total = computed(
	() => props.newItem.productPrice * props.newItem.productQuantity
);
</script>

<template>
	<div class="">
		<input
			autocomplete="off"
			type="text"
			required
			v-model="newItem.productName"
			class="w-[260px] px-1 bg-gray-600 rounded-sm mr-2"
		/>
		<input
			autocomplete="off"
			type="number"
			min="1"
			required
			v-model="newItem.productQuantity"
			class="w-[65px] text-right bg-gray-600 rounded-sm mr-2"
		/>
		<input
			autocomplete="off"
			type="number"
			min="0"
			required
			v-model="newItem.productPrice"
			class="w-[85px] text-right bg-gray-600 rounded-sm mr-2"
		/>
		<span class="inline-block text-right w-[110px] text-gray-400">
			{{
				total.toLocaleString("tr-TR", {
					style: "currency",
					currency: "TRY",
				})
			}}
		</span>
		<div class="inline-block align-middle ml-2 my-1">
			<button
				tabindex="-1"
				class="delete-button text-red-400 hover:text-red-800"
				@click="resetIt"
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