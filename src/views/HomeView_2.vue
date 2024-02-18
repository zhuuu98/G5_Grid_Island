<template>
	<main>
		<div class="index2" id="scroll-zone" data-scroll>
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
			</div>

			<div class="test-container" id="test-container1">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
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
				<!-- <div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div> -->
			</div>
			<div class="test-container" id="test-container2">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
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
				<!-- <div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div> -->
			</div>
			<div class="test-container" id="test-container3">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
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
				<!-- <div class="waveBotton-imagebox">
					<div v-html="waveBotton" class="waveBotton"></div>
				</div> -->
			</div>
			<div class="test-container" id="test-container4">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
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
	import { wave } from "../policy/wave.js";
	import LocomotiveScroll from 'locomotive-scroll';
	import 'locomotive-scroll/src/locomotive-scroll.scss';
	// import  wave  from "../assets/images/wave/wave.svg?raw";


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
				wave: wave,
			}
		},
		mounted() {
			this.initLocomotiveScroll();
			this.initScrollAnimations();
		},
		methods: {
			initLocomotiveScroll() {
				const locomotiveScroll = new LocomotiveScroll({
					el: document.querySelector('#scroll-zone'),
					smooth: true,
					lerp: .02,
				});

				locomotiveScroll.on("scroll", ScrollTrigger.update);

				ScrollTrigger.scrollerProxy("#scroll-zone", {
					scrollTop(value) {
						return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
					},
					getBoundingClientRect() {
						return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
					},
					pinType: document.querySelector("#scroll-zone").style.transform ? "transform" : "fixed",
				});

				ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
				ScrollTrigger.refresh();
			},
			initScrollAnimations() {
				gsap.utils.toArray(".test-container").forEach(container => {
					ScrollTrigger.create({
						trigger: container,
						start: "top top",
						pin: true,
						pinSpacing: false,
						scroller: "#scroll-zone",
					});
				});
			}
		},

	};
</script>