<template lang="pug">
    div.acg-item
        p {{acg.title}}
    
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'


export  interface AcgItemBean {
	src: string,
	title: string,
	link: string
}


@Component
export default class AcgItem extends Vue {

	@Prop({type: Object as () => AcgItemBean})
	private acg!: AcgItemBean



}
</script>
