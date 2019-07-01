<template lang='pug'>
	div.home-container
		search
		div.acg-group-container
			div(v-for="acg in acgs", :key="acg.link")
				acg-item(:acg='acg')
			
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Search from '../components/Search.vue'
import AcgItem, { AcgItemBean } from '../components/AcgItem.vue'



@Component({
	components: {
		Search,
		AcgItem
	}
})
export default class Home extends Vue {

	private acgs: AcgItemBean[] = [
		{
			title: 'title',
			link: 'linek',
			src: 'src'
		}
	]
}
</script>

<style lang="stylus" scoped>
.home-container
	height 100%
	width 100%
	display flex
	justify-content center
	align-items center
</style>

