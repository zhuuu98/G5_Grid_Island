<template>
	<main class="cuppon">
		<div class="btn">
			<font-awesome-icon :icon="['fas', 'times']"  @click="closeCuppon" />
		</div>
		<div class="subContent">
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<span
			>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
			折抵🐛🐛🐛🐛🐛🐛🐛
			</span>
			<!-- <span
			> {{ data.promo_detail }}
			</span> -->
		</div>
	</main>
</template>

<script>

import axios from 'axios';

export default {
	data() {
		return {
			data: [],
		};
	},
	methods: {
		getCode() {
			let url = `${import.meta.env.VITE_API_URL}/getCode.php`;
			console.log(url);
			axios.get(url, {})
			.then(res => {
			console.log(res.data);
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