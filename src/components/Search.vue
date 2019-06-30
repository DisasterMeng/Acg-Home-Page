<template lang="pug">
    div.search-container
        input(v-model='content', @keyup.enter='enterKeyHander')

</template>


<script lang="ts">
import { Vue, Provide,Component } from 'vue-property-decorator'
import { fetchIsWallApi } from "../api"

@Component
export default class Search extends Vue {

	@Provide() private content: string = ''

	isWall: boolean = true;

	private enterKeyHander() {
	

	}

	private checkWall() {
		console.log(333)
		fetchIsWallApi()
			.then(() => {
				console.log(1111);
			})
			.catch(() => {
				console.log(22222);
			});
	}


	created() {
		console.log(444)
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

