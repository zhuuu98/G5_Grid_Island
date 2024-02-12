<template>
	<main>
		<div class="index2" id="scroll-zone">
			<div id="test-container0" class="test-container">
				<div class="test-box">
					<h1>測試測試0</h1>
					<div class="test-contentbox">
						<p>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
				<div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div>
			</div>
			<div class="test-container" id="test-container1">
				<div class="waveTop-imagebox">
					<div v-html="waveTop" class="waveTop"></div>
				</div>
				<div class="test-box">
					<h1>測試測試1</h1>
					<div class="test-contentbox">
						<p>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
				<div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div>
			</div>
			<div class="test-container" id="test-container2">
				<div class="waveTop-imagebox">
					<div v-html="waveTop" class="waveTop"></div>
				</div>
				<div class="test-box">
					<h1>測試測試2</h1>
					<div class="test-contentbox">
						<p>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
				<div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div>
			</div>
			<div class="test-container" id="test-container3">
				<div class="waveTop-imagebox">
					<div v-html="waveTop" class="waveTop"></div>
				</div>
				<div class="test-box">
					<h1>測試測試3</h1>
					<div class="test-contentbox">
						<p>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
				<div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div>
			</div>
			<div class="test-container" id="test-container4">
				<div class="waveTop-imagebox">
					<div v-html="waveTop" class="waveTop"></div>
				</div>
				<div class="test-box">
					<h1>測試測試4</h1>
					<div class="test-contentbox">
						<p>
							開箱的快慢不重要，重點是相較其他博主，此影片是我目前看過最有深度詳細介紹的內容！印象最深的是7:37陰影和樂高湖面的倒影都能發現的光影細節、還有12:03全景街道在iPhone和Vision
							Pro上展現街道的差異。很喜歡最後提到的“真正的科技讓每個人都受益”，也喜歡你的分享與開箱！
						</p>
					</div>
					<button>最新消息</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import { ref, onMounted, onUnmounted } from "vue";
	import MainHeader from "../components/MainHeader.vue";
	import bannerComponent from "../components/Banner.vue";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { waveTop } from "../policy/wave.js";
	import { waveBotton } from "../policy/wave.js";


	gsap.registerPlugin(ScrollTrigger);

	export default {
		name: "HomeView2",
		components: {
			bannerComponent,
			MainHeader,
		},
		data() {
			return {
				waveTop: waveTop,
				waveBotton: waveBotton,
			}
		},
		mounted() {
			this.initScrollAnimations();
		},
		methods: {
			initScrollAnimations() {
				gsap.utils.toArray(".test-container").forEach(container => {
					const box = container.querySelector(".test-box");
					gsap.fromTo(box, {
						// y: 100 // 從100px的偏移開始
					}, {
						y: 0, // 沒有偏移
						scrollTrigger: {
							trigger: container,
							start: "top top", // 當容器的頂部進入中心時開始
							end: "+=100rem", // 當容器的底部離開頂部時結束
							scrub: true, // 平滑過渡
							pin: true,
						}
					});
				});
			}



		},
	};
</script>