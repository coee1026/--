<template>
  <div class="home">
    <div class="head">智慧商城</div>
    <van-search v-model="searchKey" placeholder="请输入搜索关键词" @click="search"/>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgUrlList" :key="item.imgName"><img style="width: 100%;" :src="item.imgUrl" alt=""></van-swipe-item>
    </van-swipe>

    <van-grid :column-num="5">
      <van-grid-item v-for="item in navList" :key="item.imgUrl" :icon="item.imgUrl" :text="item.text" />
    </van-grid>

    <img :src="img" alt="" class="imgbottom">

    <GoodsCon v-for="item in goods" :key="item.goods_id" :item="item">
    </GoodsCon>
  </div>
</template>

<script>
import { getIndexData } from '@/api/home'
import GoodsCon from '@/components/Goods.vue'

export default {
  components: { GoodsCon },
  name: 'LayoutHome',
  data () {
    return {
      searchKey: '',
      imgUrlList: [],
      navList: [],
      img: '',
      goods: []
    }
  },
  async created () {
    const res = await getIndexData()
    const item = res.data.data.pageData.items
    this.imgUrlList = item[1].data
    this.navList = item[3].data
    this.img = item[4].data[0].imgUrl
    this.goods = item[6].data
    console.log(this.goods)
  },
  methods: {
    search () {
      // console.log(111)
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    margin-bottom: 64px;
    .head {
      height: 60px;
      background-color: #d12203;
      text-align: center;
      line-height: 48px;
      color: #fff;
      font-size: 24px;
    }
    .my-swipe {
      img {
        width: 100%;
      }
    }
    .imgbottom {
      width: 100%;
    }
  }
</style>
