<template lang="pug">
    div.search-container
        input(v-model='content', @keyup.enter='enterKeyHander')

</template>


<script lang="ts">
import { Vue, Provide } from 'vue-property-decorator'

export default class Search extends Vue {

	@Provide() private content: string = ''
	private isWall: boolean = true

	private enterKeyHander() {
		console.log(this.content)

	}

	private checkWall() {
        
	}

	created() {

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

