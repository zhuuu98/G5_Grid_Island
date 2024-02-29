<template>
	<main class="cuppon" v-if="this.promos.length > 0">
		<div class="btn">
			<font-awesome-icon :icon="['fas', 'times']"  @click="closeCuppon" />
		</div>
		<div class="subContent" >
			<div v-for="num in 10" :key="num">
				<span  v-for="(detail,index) in promos" :key="index" >
					{{ detail.promo_detail + detail.promo_code}}
				</span>
			</div>
		</div>
	</main>
</template>

<script>

import axios from 'axios';

export default {
	data() {
		return {
			promos:{},
		};
	},
	methods: {
		getCode() {
			let url = `${import.meta.env.VITE_API_URL}/getCupponCode.php`;
			console.log(url);
			axios.get(url, {})
			.then(res => {
			this.promos = res.data.promos;
			// console.log(this.promos);
			})
			.catch(error => {
			console.error(error);
			});
		},
		closeCuppon() {
			this.$emit('closeTab');
		}
	},
	mounted() {
		this.getCode();
	}
}
</script>