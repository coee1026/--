<template>
  <div class="goods">
    <div class="left">
      <img :src="item.goods_image" alt="">
    </div>
    <div class="right">
      <h4>{{ item.goods_name }}</h4>
      <ul>
        <li>最高价{{ item.goods_price_max }}</li>
        <li>最低价{{ item.goods_price_min }}</li>
        <li>已售{{ item.goods_sales }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsCon',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
  .goods {
    height: 120px;
    margin: 10px 5px;
    display: flex;
    .left {
      img {
        width: 120px;
        height: 120px;
        background-size: cover;
      }
      margin-right: 10px;
    }
    .right {
      margin-right: 10px;
      h4 {
        font-size: 14px;
        height: 90px;
        margin-top: 8px;
      }
      ul {
        display: flex;
        justify-content: space-between;
        // align-items: end;
        li {
          font-size: 12px;
        }
      }
    }
  }
</style>
