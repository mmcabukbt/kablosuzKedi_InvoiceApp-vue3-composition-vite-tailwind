<script setup>
const props = defineProps({
	contact: Object,
});
</script>

<template>
	<div>
		<label for="client_name" class="flex flex-col text-gray-400 mb-2">
			<small class="mb-1">Müşteri Adı</small>
			<input
				autocomplete="off"
				id="client_name"
				class="bg-gray-600 px-1 rounded-sm"
				type="text"
				v-model="contact.contactName"
			/>
		</label>
		<label for="client_email" class="flex flex-col text-gray-400 mb-2">
			<small class="mb-1">E-posta</small>
			<input
				id="client_email"
				class="bg-gray-600 px-1 rounded-sm"
				type="email"
				required
				v-model="contact.contactEmail"
			/>
		</label>
		<div class="grid grid-cols-3 gap-5">
			<label for="city" class="flex flex-col text-gray-400 mb-2">
				<small class="mb-1">Şehir</small>
				<input
					autocomplete="off"
					id="city"
					class="bg-gray-600 px-1 rounded-sm"
					type="text"
					v-model="contact.contactCity"
				/>
			</label>
			<label for="zip_code" class="flex flex-col text-gray-400 mb-2">
				<small class="mb-1">Posta Kodu</small>
				<input
					autocomplete="off"
					id="zip_code"
					class="bg-gray-600 px-1 rounded-sm"
					type="text"
					v-model="contact.contactZipcode"
				/>
			</label>
			<label for="country" class="flex flex-col text-gray-400 mb-2">
				<small class="mb-1">Ülke</small>
				<input
					autocomplete="off"
					id="country"
					class="bg-gray-600 px-1 rounded-sm"
					type="text"
					v-model="contact.contactCountry"
				/>
			</label>
		</div>
	</div>
</template>