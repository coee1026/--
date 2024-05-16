<template>
  <div class="search">
    <div class="head">
      <button><van-icon name="arrow-left" @click="$router.back()" class="icon"/></button>
      <h4>商品搜索</h4>
    </div>
    <div class="ipt">
      <div class="left"><van-icon name="search" class="icon"/><input v-focus v-model="key" type="text" placeholder="请输入关键词" name="" id=""></div>
      <div class="right" @click="clickSaveHistory(obj, key)">搜索</div>
    </div>
    <div class="lately">
      <div class="top">
        <h6>最近搜索</h6>
        <van-icon name="delete-o" @click="clear"/>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="item in history" :key="item.id" @click="saveHistory(item)">{{ item.content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchIndex',
  data () {
    return {
      history: this.$store.state.history.History,
      key: '',
      obj: { id: +new Date(), content: '' }
    }
  },
  created () {

  },
  methods: {
    saveHistory (obj) {
      // console.log(obj)
      this.history = this.history.filter(item => item.id !== obj.id)
      this.history.unshift(obj)
      this.$store.commit('history/saveHistory', this.history)
      this.$router.push(`/searchlist?key=${this.key}`)
    },
    clickSaveHistory (obj, key) {
      obj.content = key
      this.saveHistory(obj)
    },
    clear () {
      this.history = []
      this.$store.commit('history/clear')
    }
  }
}
</script>

<style lang="less" scoped>
  .search {
    // height: 80px;
    // background-color: pink;
    padding: 0 16px;
    .head {
      font-size: 20px;
      display: flex;
      line-height: 80px;
      .icon {
        line-height: 80px;
        width: 24px;
        background-color: #fff;
      }
      h4 {
        flex: 1;
        text-align: center;
        margin-left: -14px;
        font-weight: 550;
      }
    }
    .ipt {
      height: 44px;
      // background-color: pink;
      display: flex;
      justify-content: space-between;
      line-height: 44px;
      border-radius: 10px;
      .left {
        width: 260px;
        background-color: #f7fbfa;
        .icon {
          background-color: #f7fbfa;
          margin-left: 5px;
        }
        input {
          background-color: #f7fbfa;
          margin-left: 10px;
          color: #999;
          font-size: 18px;
          border: none;
        }
      }
      .right {
        background-color: #cd2300;
        width: 80px;
        color: #eee;
        text-align: center;
        font-size: 18px;
      }
    }
    .lately {
      padding: 40px 0;
      .top {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        h6 {
          font-size: 22px;
        }
      }
      .bottom {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            // background-color: pink;
            width: 110px;
            margin-top: 24px;
            font-size: 20px;
            text-align: center;
          }
        }
      }
    }

  }
</style>
