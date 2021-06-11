<template>
	<div class="about-content-item-content">
		<h4
			v-if="yearLabel"
			class="about-content-item-content-time color-blue"
		>
			{{ yearLabel }}<span v-if="yearAmount" class="about-content-item-content-time-amount">{{ yearAmount }}</span>
		</h4>
		<h4
			v-if="data.positionName"
			class="about-content-item-content-name"
		>
			{{ data.positionName }}
			<template v-if="data.companyName">
				<br>at {{ data.companyName }}
			</template>
		</h4>
		<ul
			v-if="data.details && data.details.length"
			class="about-content-item-content-detail-list"
		>
			<li
				v-for="(item, index) in data.details"
				:key="index"
				class="about-content-item-content-detail-list-item"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "AboutWorkExperienceItem",
	props: {
		data: {
			type: Object,
			default: () => ({})
		}
	},
	computed: {
		yearLabel() {
			const {
				start,
				end
			} = this.data.year || {};

			if (start) {
				const endLabel = end || "Present";
				return `${start} - ${endLabel}`;
			}
			return null;
		},
		yearAmount() {
			const {
				start,
				end
			} = this.data.year || {};

			if (start) {
				const startDate = new Date(start);
				const endDate = end
					? new Date(end)
					: new Date();
				const diffMounths = endDate.getMonth() - startDate.getMonth() + (12 * (endDate.getFullYear() - startDate.getFullYear()));
				const year = Math.floor((diffMounths / 12));
				const month = diffMounths - (year * 12);

				let yearLabel = "";
				if (year > 1) {
					yearLabel = `${year} years`;
				} else if (year === 1) {
					yearLabel = `${year} year`;
				}

				let monthLabel = "";
				if (month > 1) {
					monthLabel = `${month} months`;
				} else if (month === 1) {
					monthLabel = `${month} month`;
				}

				const joiner = yearLabel && monthLabel
					? " "
					: "";

				return `${yearLabel}${joiner}${monthLabel}`;
			}
			return null;
		}
	}
};
</script>
