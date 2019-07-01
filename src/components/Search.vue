<template lang="pug">
    div.search-container
        input(v-model='content', @keyup.enter='enterKeyHander')

</template>


<script lang="ts">
import { Vue, Provide, Component } from 'vue-property-decorator'
import { fetchIsWallApi } from '../api'

@Component
export default class Search extends Vue {

	@Provide() private content: string = ''

	private isWall: boolean = true

	private enterKeyHander() {

		const content = this.content

		if (content.length === 0) {
			return
		}

		if (this.isWall) {
			window.location.href = `https://wwww.baidu.com/s?wd=${content}`
		} else {
			window.location.href = `https://wwww.google.com/search?q=${content}`
		}
	}

	private checkWall() {
		fetchIsWallApi()
			.then(() => {
				this.isWall = false
			})
			.catch(() => {
				this.isWall = true
			})
	}


	private created() {
		this.checkWall()
	}


}
</script>

<style lang="stylus" scoped>
.search-container
	input
		height 50px
		width 600px
		border 1px solid rgba(0, 0, 0, 0.1)
		border-radius 25px
		font-size 20px
		padding 0 16px

		&:focus
			outline none
</style>

