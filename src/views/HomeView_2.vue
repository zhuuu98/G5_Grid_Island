<template>
	<main>
		<div class="index2" id="scroll-zone">
			<div class="test-container" id="scroll-box0">
				<div class="test-box" data-scroll data-scroll-speed="2" data-scroll-target="#scroll-zone">
					<h1 data-scroll>測試測試0</h1>
					<div class="test-contentbox" >
						<img src="https://fakeimg.pl/300x200/200">
						<p data-scroll>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
			</div>
			<div class="test-container" id="scroll-box1">
				<div class="test-box" data-scroll data-scroll-speed="2" data-scroll-target="#scroll-zone">
					<h1 data-scroll>測試測試1</h1>
					<div class="test-contentbox">
						<img src="https://fakeimg.pl/300x200/200">
						<p data-scroll>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
			</div>
			<div class="test-container" id="scroll-bottom">
			</div>
			<!-- 
			<div class="test-container" data-scroll data-scroll-target="#scroll-zone" data-scroll-speed="0"
				id="scroll-box2">
				<div class="test-box" data-scroll data-scroll-speed="2" data-scroll-target="#scroll-zone">
					<h1 data-scroll data-scroll-speed="0" data-scroll-target="#scroll-zone">測試測試2</h1>
					<div class="test-contentbox" data-scroll data-scroll-speed="0" data-scroll-target="#scroll-zone">
						<img src="https://fakeimg.pl/300x200/200">
						<p data-scroll>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
			</div> -->
		</div>
	</main>
</template>

<script>
	import { ref, onMounted, onUnmounted } from "vue";
	import MainHeader from "../components/MainHeader.vue";
	import bannerComponent from "../components/Banner.vue";
	import LocomotiveScroll from 'locomotive-scroll'; //滾動套件

	export default {
		name: "HomeView2",
		components: {
			bannerComponent,
			MainHeader,
		},
		mounted() {
			this.initLocomotiveScroll();
			window.addEventListener('load', this.initLocomotiveScroll);
		},
		methods: {
			initLocomotiveScroll() {
				this.scroll = new LocomotiveScroll({
					el: document.querySelector("#scroll-zone"),
					smooth: true,
					lerp: 0.1,
					repeat: true,
					smartphone: {
						smooth: true
					},
					tablet: {
						smooth: true,
						breakpoint: 768
					}
				});
				this.scroll.update();
			},
			// 假設這是你加載動態內容的方法
			loadDynamicContent() {
				// 加載動態內容的邏輯...
				// 內容加載完畢後，更新Locomotive Scroll的狀態
				this.scroll.update();
			},
			
		},


		beforeUnmount() {
			if (this.scroll) {
				this.scroll.destroy();
			}
		},
	};
</script>