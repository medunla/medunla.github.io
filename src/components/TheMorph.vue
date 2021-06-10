<template>
	<div class="morph-elements">
		<svg
			id="morph"
			x="0px"
			y="0px"
			width="1489.094px"
			height="571.784px"
			viewBox="0 0 1489.094 571.784"
			preserveAspectRatio="xMaxYMin meet"
		>
			<filter
				height="574.375"
				width="1578"
				id="morph_front_filter"
				filterUnits="userSpaceOnUse"
				y="0"
				x="0"
			>
				<feOffset input="SourceAlpha"></feOffset>
				<feGaussianBlur result="blur" stdDeviation="15"></feGaussianBlur>
				<feFlood flood-opacity="0.502" flood-color="#007cb2"></feFlood>
				<feComposite in2="blur" operator="in"></feComposite>
				<feComposite in="SourceGraphic" operator="over"></feComposite>
			</filter>
			<g>
				<defs>
					<rect id="morph_front_rect" y="0" width="1489.094" height="571.784" />
				</defs>
				<clipPath id="morph_front_clippath">
					<use xlink:href="#morph_front_rect" overflow="visible" />
				</clipPath>
				<path
					id="morph_front_green_1"
					fill="#71F6D7"
					clip-path="url(#morph_front_clippath)"
					d="M93.002-710.889v354.035v99.01V0.754 c17.256,9.182,192.237,99.774,398.718,110.719c110.635,6.166,213.746,5.229,317.152,50.311 c55.939,24.388,79.609,79.21,116.922,122.429s91.251,77.612,145.76,95.128c62.008,19.923,127.88,9.208,191.477,17.993 c55.427,7.66,109.249,29.584,148.367,70.091c11.292,11.691,21.204,24.603,30.891,37.606c9.12,12.24,46.805,66.753,46.805,66.753 h52.852h153.015h435.044v-829.627v-99.01v-354.035H93.002z"
				/>

				<path
					id="morph_front_green_2"
					display="none"
					d="M93.002-710.889v354.035v99.01V0c4.393,5.858,16.934,29.943,43.666,40.995 c63.046,26.064,106.18-0.762,157.031,5.983c69.457,9.213,138.454,73.513,196.374,94.999c58.257,21.61,197.309,34.364,274.87,20.722 c154.685-27.208,198.678,112.376,226.794,166.249c38.829,74.401,152.885,90.328,231.349,83.281 c27.795-2.496,54.533-9.601,81.96-14.139c0.001,0,150.428-24.881,183.824,173.696h0.223V0h0v571.784h52.852h153.015h435.044 v-829.627v-99.01v-354.035H93.002z"
				/>

				<g
					transform="matrix(1, 0, 0, 1, 0, 0)"
					clip-path="url(#morph_front_clippath)"
					filter="url(#morph_front_filter)"
				>
					<linearGradient
						id="morph_front_blue_gradient"
						gradientUnits="userSpaceOnUse"
						x1="431.9952"
						y1="968.8801"
						x2="431.7964"
						y2="967.4205"
						gradientTransform="matrix(577.0939 0 0 -187.8557 -248463.375 182065.7188)"
					>
						<stop offset="0" style="stop-color:#3DC4FF" />
						<stop offset="1" style="stop-color:#8BDCFF" />
					</linearGradient>
					<path
						id="morph_front_blue_1"
						fill="url(#morph_front_blue_gradient)"
						d="M36.838,0c1.019,0.627,27.807,15.192,40.598,21.826c71.511,37.088,144.633,53.684,231.48,57.364 c127.659,5.408,275.987-5.501,395.299,34.026c64.546,21.388,91.857,69.458,134.91,107.359 c43.052,37.898,105.29,68.059,168.19,83.417c71.549,17.469,147.552,8.073,220.936,15.778 c63.954,6.717,126.681,25.163,171.192,61.463c34.937,28.492,89.651,91.508,89.651,91.508h475.894V225.205v-578.691h-392.892h-83.002 H65.798h-28.96V0z"
					/>
					<path
						id="morph_front_blue_2"
						display="none"
						d="M36.838,0c1.019,0.627,30.545,26.23,56.209,42.392 c68.165,42.928,133.743,48.39,220.667,48c138.653-0.623,239.8-34.488,362.667-8c86.586,18.667,116.947,123.432,160,161.333 c43.052,37.898,104.433,63.309,167.333,78.667c71.549,17.469,167.283-24.372,240.667-16.667c63.954,6.717,120.444,35.686,166,70.667 c37.333,28.667,78.714,96.349,78.714,96.349h475.894V0v-176.743v-39.096v-137.647H281.82H36.838V0z"
					/>
				</g>
			</g>
		</svg>
	</div>
</template>

<script>
// import Snap from "../../public/vendor/snap.svg/js/snap.svg-min";

export default {
	name: "TheMorph",
	data() {
		return {
			morphBlue1: null,
			morphBlue2: null,
			morphBlue1Points: null,
			morphBlue2Points: null,
			morphGreen1: null,
			morphGreen2: null,
			morphGreen1Points: null,
			morphGreen2Points: null
		};
	},
	mounted() {
		this.handleAnimateMorph();
	},
	methods: {
		handleAnimateMorph() {
			// Setup
			const snapMorph = window.Snap("#morph");

			this.morphBlue1 = snapMorph.select("#morph_front_blue_1");
			this.morphBlue2 = snapMorph.select("#morph_front_blue_2");
			this.morphBlue1Points = this.morphBlue1.node.getAttribute("d");
			this.morphBlue2Points = this.morphBlue2.node.getAttribute("d");

			this.morphGreen1 = snapMorph.select("#morph_front_green_1");
			this.morphGreen2 = snapMorph.select("#morph_front_green_2");
			this.morphGreen1Points = this.morphGreen1.node.getAttribute("d");
			this.morphGreen2Points = this.morphGreen2.node.getAttribute("d");

			// Animate
			this.handleAnimateMorphBlueForm1To2();
			this.handleAnimateMorphGreenForm1To2();
		},
		animateSvg(snapElement, { points, time, timeingFunction, callback }) {
			snapElement.animate({ d: points }, time, timeingFunction, callback);
		},
		handleAnimateMorphBlueForm1To2() {
			const points = this.morphBlue2Points;
			const time = 1500;
			const timeingFunction = mina.linear; // eslint-disable-line no-undef
			const callback = this.handleAnimateMorphBlueForm2To1;

			this.animateSvg(this.morphBlue1, { points, time, timeingFunction, callback });
		},
		handleAnimateMorphBlueForm2To1() {
			const points = this.morphBlue1Points;
			const time = 1500;
			const timeingFunction = mina.easeout; // eslint-disable-line no-undef
			const callback = this.handleAnimateMorphBlueForm1To2;

			this.animateSvg(this.morphBlue1, { points, time, timeingFunction, callback });
		},
		handleAnimateMorphGreenForm1To2() {
			const points = this.morphGreen2Points;
			const time = 4000;
			const timeingFunction = mina.linear; // eslint-disable-line no-undef
			const callback = this.handleAnimateMorphGreenForm2To1;

			this.animateSvg(this.morphGreen1, { points, time, timeingFunction, callback });
		},
		handleAnimateMorphGreenForm2To1() {
			const points = this.morphGreen1Points;
			const time = 4000;
			const timeingFunction = mina.easeout; // eslint-disable-line no-undef
			const callback = this.handleAnimateMorphGreenForm1To2;

			this.animateSvg(this.morphGreen1, { points, time, timeingFunction, callback });
		}
	}
};
</script>
