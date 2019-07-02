<template lang='pug'>
    div.home-container
        search
        div.acg-group-container
            acg-item.acg-item(v-for="acg in acgs", :key="acg.link", :acg='acg')

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    import Search from '../components/Search.vue'
    import AcgItem, {AcgItemBean} from '../components/AcgItem.vue'


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
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
            },
            {
                title: 'title',
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
            },
            {
                title: 'title',
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
            },
            {
                title: 'title',
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
            },
            {
                title: 'title',
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
            },
            {
                title: 'title',
                link: 'https://www.baidu.com',
                src: 'https://www.baidu.com/img/bd_logo1.png'
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
        flex-direction column

        .acg-group-container
            margin-top 16px
            display flex
            flex-wrap wrap
            max-width 600px


</style>

