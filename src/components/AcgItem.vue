<template lang="pug">
    div.acg-item(@click='itemHandler(acg.link)')
        img(:src='acg.src', )
        p {{acg.title}}

</template>


<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'


    export interface AcgItemBean {
        src: string,
        title: string,
        link: string
    }


    @Component
    export default class AcgItem extends Vue {

        @Prop({type: Object as () => AcgItemBean})
        private acg!: AcgItemBean


        private itemHandler(link: string) {
            window.location.href = link
        }

    }
</script>

<style lang="stylus" scoped>
    .acg-item
        display flex
        flex-direction column
        margin 16px
        height 80px
        width 80px
        cursor pointer
        align-items center
        border white solid 1px
        background-color white
        border-radius 80px

        &:hover
            border rgba(0, 0, 0, 0.1) solid 1px


        img
            height 40px
            width 40px
            border-radius 40px

        p
            font-size 15px
</style>

