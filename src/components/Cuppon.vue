<template>
	<main class="cuppon">
		<div class="btn">
			<font-awesome-icon :icon="['fas', 'times']"  @click="closeCuppon" />
		</div>
		<div class="subContent">
			<!-- 重複 render 10次，並使用三元運算符-->
			<span v-for="index in 10" :key="index"> 
				<!-- <div class="showCuppon">
					{{ promos[0].promo_detail }}
				</div> -->
				{{ promos[0].promo_detail }}
			</span>
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
			console.log(this.promos);
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