<template>
	<div class="icon-mouse">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 104 104"
			@click="handleClick"
		>
			<g id="svg_scroll_down">
				<g transform="translate(36 28)">
					<path
						fill="#666666"
						d="M16,0A16.014,16.014,0,0,0,0,15.992V32.008a16,16,0,0,0,32,0V15.992A16.014,16.014,0,0,0,16,0ZM30.222,32.008a14.222,14.222,0,0,1-28.445,0V15.992a14.222,14.222,0,0,1,28.445,0Zm0,0"
					/>
					<path
						fill="#666666"
						d="M53.887,18.7a.9.9,0,0,0-.895.895V27.7a.9.9,0,0,0,1.79,0V19.6a.9.9,0,0,0-.9-.895Zm0,0"
						transform="translate(-37.888 -13.333)"
					>
						<animateTransform
							id="mouse_hover"
							attributeName="transform"
							type="translate"
							dur="1.5s"
							values="-37.888 -13.333; -37.888 -1.333; -37.888 -13.333; -37.888 -13.333"
							keyTimes="0; 0.2; 0.5; 1"
							repeatCount="indefinite"
							fill="freeze"
						/>
					</path>
				</g>
				<g transform="translate(52 52)">
					<g
						transform="scale(0.9)"
						stroke="#cccccc"
						stroke-dasharray="7"
					>
						<circle
							cx="0"
							cy="0"
							r="51.5"
							fill="#ffffff"
							fill-opacity="0"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								from="0"
								to="360"
								dur="10s"
								begin="0s"
								repeatCount="indefinite"
								fill="freeze"
							/>
						</circle>
						<animateTransform
							id="radius_hover"
							attributeName="transform"
							type="scale"
							dur="1.5s"
							values="0.9; 0.8; 1; 0.9"
							keyTimes="0; 0.2; 0.8; 1"
							begin="svg_scroll_down.mouseover"
							end="svg_scroll_down.mouseout"
							repeatCount="indefinite"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							dur="0.5s"
							to="0.9"
							begin="radius_hover.endEvent"
							repeatCount="1"
							fill="freeze"
						/>
					</g>
				</g>
			</g>
		</svg>
		<span>Scroll Down</span>
	</div>
</template>

<script>
export default {
	name: "homeFrontPageMouse",
	methods: {
		handleClick() {
			this.$emit("onClick");
		}
	}
};
</script>
