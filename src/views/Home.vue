<template lang='pug'>
    div.home-container
        Search
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Search from '../components/Search.vue'

@Component({
	components: {
		Search
	}
})
export default class Home extends Vue {
	private created() {

	}
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

