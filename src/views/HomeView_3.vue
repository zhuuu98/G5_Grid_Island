<template>
	<main id="scroll-zone3" >
		<bannerComponent />

		<MainHeader />
		<!-- 跑馬燈 -->
		<div class="cuppon" v-if="cuppon">
			<div class="btn" @click="closeCuppon">
				<font-awesome-icon :icon="['fas', 'times']" />
			</div>
			<div class="subContent">
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
			</div>
		</div>

		<!-- ⬇ 各個區塊 ⬇ -->
		<div class="index" >
			<!-- 所有商品 -->
			<div id="indexContainer_products" class="indexContainer">
				<div class="index_row">
					<h1 data-stroke="所有商品">所有商品</h1>
					<!-- 寫這邊 -->
					<div class="prodBackground">
						<div class="prodBreif">
							<p>
								我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。
								即使您不熟悉遊戲規則，也無需擔心，因為我們會親自指導您如何遊玩，
								一起加入桌遊的行列吧！
							</p>
						</div>
						<div class="prodMarquee">
							<div class="marqueeAnimation">
								<div class="productCard" v-for="item in productData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">
										<div class="productImg">
											<img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`" />
										</div>
										<div class="productName">
											<p>{{ item.prod_name }}</p>
										</div>
									</router-link>
								</div>
								<div class="productCard" v-for="item in productData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">
										<div class="productImg">
											<img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`" />
										</div>
										<div class="productName">
											<p>{{ item.prod_name }}</p>
										</div>
									</router-link>
								</div>
								<div class="productCard" v-for="item in productData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">
										<div class="productImg">
											<img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`" />
										</div>
										<div class="productName">
											<p>{{ item.prod_name }}</p>
										</div>
									</router-link>
								</div>
								<div class="productCard" v-for="item in productData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">
										<div class="productImg">
											<img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`" />
										</div>
										<div class="productName">
											<p>{{ item.prod_name }}</p>
										</div>
									</router-link>
								</div>
								<div class="productCard" v-for="item in productData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">
										<div class="productImg">
											<img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`" />
										</div>
										<div class="productName">
											<p>{{ item.prod_name }}</p>
										</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="searchArea">
						<div class="searchGroup">
							<div class="searchTitle">
								<label for="productSearch">搜尋遊戲</label>
							</div>
							<div class="searchInput">
								<input type="text" id="productSearch" @input="handleSearch"
									@focus="searchResultDisplay = true" @blur="searchResultClose"
									v-model="gameSearch" />
							</div>
							<div class="searchResult" v-show="searchResultDisplay && displayProdData.length != 0">
								<p v-for="item in displayProdData">
									<router-link :to="{
						name: 'productInfo',
						params: { id: item.prod_id },
					  }">{{ item.prod_name }}</router-link>
								</p>
							</div>
						</div>
					</div>
					<div class="prodBtn">
						<button class="btn_lg" @click="toProduct">所有商品</button>
					</div>
				</div>
			</div>


			<!-- Griddy造型屋 -->
			<div id="indexContainer_griddystyle" class="indexContainer">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
				</div>
				<div class="index_row">
					<h1 data-stroke="Griddy 造型屋">Griddy 造型屋</h1>
					<div id="griddystyle-contentbox">

					</div>
				</div>
				<div id="griddystyle-btnbox">
					<button class="btn_lg" @click="griddy-style">設計Griddy！</button>
				</div>
			</div>

			<!-- 服務項目 -->
			<!-- <div class="index_service"> -->
			<div id="indexContainer_service" class="indexContainer">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
				</div>
				<div class="index_row">
					<h1 data-stroke="服務項目">服務項目</h1>
					<div class="serviceMarqueeContent">
						
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>桌遊販售</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>精釀啤酒與飲料</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>桌上遊戲遊玩與教學</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>各式場地租借</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>桌遊販售</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>桌遊販售</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>桌遊遊玩教學</span>
								</div>
							</div>
							<div class="marqueePic">
								<img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目" />
								<div class="marqueeText">
									<span>各式場地租借</span>
								</div>
							</div>

					</div>
				</div>
			</div>



			<!-- 預約方式 -->
			<div id="indexContainer_reserve" class="indexContainer">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
				</div>
				<div class="index_row">
					<h1 data-stroke="預約方式">預約方式</h1>
					<div class="reserveInfo row">
						<div class="reserveContent col-6 col-T-10 col-PC-10">
							<!-- <img v-for="num in 3" :src="getImageUrl(`home/reserveInfo_${num}.png`)" alt="預約方式"> -->
							<div class="reserveStep1">
								<img src="../assets/images/home/reserveInfo_1.png" alt="" />
								<span>確認預約須知</span>
							</div>
							<div class="reserveStep2">
								<img src="../assets/images/home/reserveInfo_2.png" alt="" />
								<span>選擇人數、日期、時段</span>
							</div>
							<div class="reserveStep3">
								<img src="../assets/images/home/reserveInfo_3.png" alt="" />
								<span>選擇桌號，預約完成！</span>
							</div>
						</div>
					</div>
					<button class="btn_lg" @click="goBook()">預約場地</button>
				</div>
			</div>

			<!-- 最新消息 -->
			<div id="indexContainer_news" class="indexContainer">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
				</div>
				<div class="index_row">
					<h1 data-stroke="最新消息">最新消息</h1>
					<div class="news_card_content">
						<NewsCard v-for="(item, index) in latestData" :key="item.news_id" :newsTitle="item.news_title"
							:newsDate="item.news_date"
							:imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
							:newsId="item.news_id" />
					</div>
					<div class="news_button">
						<button class="btn_lg" @click="goNews()">所有最新消息</button>
					</div>
				</div>
			</div>

			<!-- 一起遊樂 IG API -->
			<!-- <div class="index_insta">
		  <div class="index_row"> -->
			<!-- 寫這邊 -->
			<!-- </div>
		</div> -->



			<!-- Grid Island 關於我們 -->
			<div id="indexContainer_about" class="indexContainer">
				<div class="wave-imagebox">
					<div v-html="wave" class="wave"></div>
				</div>
				<div class="index_row">
					<!-- 寫這邊 -->
					<h1 data-stroke="Grid Island">Grid Island</h1>
					<!-- 中間圖片的外框 -->
					<div class="aboutContent">
						<!-- 桌機板的文字 -->
						<div class="aboutContentTxt">
							<p>
								我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。即使您不熟悉遊戲規則，也無需擔心，因為我們會親自指導您如何遊玩，一起加入桌遊的行列吧！
							</p>
						</div>
						<!-- 放圖片的地方 -->
						<div class="imgWrapper">
							<div class="aboutContentImg">
								<img v-for="num in 3" :src="getImageUrl(`home/homeAbout_${num}.svg`)" alt="首頁關於我們" />
							</div>
						</div>
					</div>
					<button class="btn_lg" @click="goAbout()">關於我們</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import axios from "axios";
	import { ref, onMounted, onUnmounted } from "vue";
	import MainHeader from "../components/MainHeader.vue";
	import headerWave from "../assets/images/header/headerWave.svg";
	import NewsCard from "../components/NewsCard.vue";
	import bannerComponent from "../components/Banner.vue"
	import { wave } from "../policy/wave.js";
	// import LocomotiveScroll from 'locomotive-scroll';
	// import 'locomotive-scroll/src/locomotive-scroll.scss';
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	export default {
		name: "HomeView",
		components: {
			bannerComponent,
			MainHeader,
			NewsCard,


		},
		data() {
			return {
				respondData: [],
				latestData: [],
				productData: [],
				displayProdData: [],
				gameSearch: "",
				searchResultDisplay: false,
				serviceText: [
					"桌遊販售",
					"精釀啤酒與飲料",
					"桌上遊戲遊玩與教學",
					"各式場地租借",
				],
				cuppon: true, //
				wave: wave,
			};
		},
		created() {
			this.axiosGetData();
			this.axiosGetProductData();
		},
		mounted() {
			// this.initLocomotiveScroll();
			this.initScrollAnimations();
		},
		methods: {
			initScrollAnimations() {
				gsap.utils.toArray(".indexContainer").forEach(container => {
					ScrollTrigger.create({
						trigger: container,
						start: "top top",
						pin: true,
						pinSpacing: false,
						// scroller: "#scroll-zone",
					});
				});
			},
			// initLocomotiveScroll() {
			// 	const locomotiveScroll = new LocomotiveScroll({
			// 		el: document.querySelector('#scroll-zone'),
			// 		smooth: true,
			// 		lerp: .08,
			// 	});

			// 	locomotiveScroll.on("scroll", ScrollTrigger.update);

			// 	ScrollTrigger.scrollerProxy("#scroll-zone", {
			// 		scrollTop(value) {
			// 			return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
			// 		},
			// 		getBoundingClientRect() {
			// 			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			// 		},
			// 		pinType: document.querySelector("#scroll-zone").style.transform ? "transform" : "fixed",
			// 	});

			// 	ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
			// 	ScrollTrigger.refresh();
			// },
			preventDrag(event) {
				// 检查事件的目标是否是您想阻止拖拽的图像
				if (event.target.tagName === "IMG") {
					event.preventDefault();
				}
			},
			axiosGetData() {
				axios
					.get("https://tibamef2e.com/chd103/g1/phps/news_fetch.php")
					.then((res) => {
						this.respondData = res.data;
						// 將數據按日期降序排序
						// const sortedData = allData.sort((a, b) => new Date(b.date) - new Date(a.date));
						// 取得日期最新的4筆資料
						this.latestData = this.respondData.slice(0, 4);
						// 在這裡處理latest4Data，例如打印出來或進行其他操作
						// console.log('最新的4筆資料:', this.latestData);
					});
			},
			axiosGetProductData() {
				axios
					.get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
					.then((res) => {
						this.productData = res.data;
					});
			},
			goNews() {
				this.$router.push("/news");
			},
			getImageUrl(paths) {
				//取得圖片路徑
				return new URL(`../assets/images/${paths}`, import.meta.url).href;
			},
			goBook() {
				this.$router.push("/PreBook");
			},
			toProduct() {
				this.$router.push("/product");
			},
			goAbout() {
				this.$router.push("/About");
			},
			handleSearch() {
				this.displayProdData = this.productData.filter((item) => {
					return item.prod_name.includes(this.gameSearch);
				});
				if (this.gameSearch == "") {
					this.displayProdData = [];
				}
			},
			searchResultClose() {
				setTimeout(() => {
					// 关闭搜索建议列表的逻辑
					this.searchResultDisplay = false;
				}, 100);
			},
			closeCuppon() {
				this.cuppon = false;
			},

		},
	};
</script>