<template>
  <div class="login">
    <van-nav-bar
      title="会员登录"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <div class="head">
        <h2>手机号登录</h2>
        <p>未注册的手机号登录后将自动注册</p>
      </div>
      <div class="form">
        <ul>
          <li><input v-model="phone" type="text" placeholder="请输入手机号码"></li>
          <li><input v-model="userIptPicCode" type="text" placeholder="请输入图形验证码"> <img :src="picUrl" alt="" @click="resetPicCode"></li>
          <li><input v-model="code" type="text" placeholder="请输入短信验证码"> <button @click="getCode">{{time === 0 ? '获取验证码' : time + '秒后重新获取'}}</button></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { getPicCode, getNumCode, loginRequest } from '@/api/login'
export default {
  name: 'LoginIndex',
  data () {
    return {
      userIptPicCode: '',
      picUrl: '',
      picKey: '',
      phone: '',
      code: '',
      time: 0,
      timeId: null
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getPicCode () {
      const res = await getPicCode()
      const { base64, key } = res.data.data
      this.picUrl = base64
      this.picKey = key
    },
    resetPicCode () {
      this.getPicCode()
    },
    async getCode (e) {
      if (!/^1\d{10}$/.test(this.phone)) {
        // console.log(111)
        this.$toast.fail('请输入正确的手机号')
        return
      }
      if (!/^\w{4}$/.test(this.userIptPicCode)) {
        this.$toast.fail('请输入正确的验证码')
        return
      }
      const res = await getNumCode(this.userIptPicCode, this.key, this.phone)
      console.log(res)
      this.$toast('获取验证码成功')
      e.target.disabled = true
      this.time = 60
      this.timeId = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          e.target.disabled = false
          clearInterval(this.timeId)
        }
      }, 1000)
    },
    async login () {
      if (!/^1\d{10}$/.test(this.phone)) {
        // console.log(111)
        this.$toast.fail('请输入正确的手机号')
        return
      }
      if (!/^\w{4}$/.test(this.userIptPicCode)) {
        this.$toast.fail('请输入正确的验证码')
        return
      }
      // console.log(11)/
      const res = await loginRequest(this.phone, this.code)
      // console.log(res.data.data)
      this.$store.commit('user/getUserinfo', res.data.data)
      this.$router.back()
      this.$toast('登录成功')
    }

  },
  created () {
    this.getPicCode()
  },
  destroyed () {
    clearInterval(this.timeId)
  }
}
</script>

<style lang="less" scoped>

.login {
  margin: 0 30px;
  .content {
    // margin: 0 30px;
    padding: 50px 0 0;
    .head {
      margin-bottom: 48px;
      h2 {
        font-size: 30px;
        font-weight: 480;
        margin-bottom: 18px;
      }
      p {
        font-size: 16px;
        color: #aaa;
      }
    }
  }
  .form {
    ul li {
      height: 56px;
      line-height: 56px;
      margin-top: 15px;
      // background-color: pink;
      border-bottom: #ddd solid 1px;
      padding: 0 8px;
      input {
        width: 50%;
        border: 0;
        border-bottom: 1px solid #ddd;
        outline: none;
      }
      &:nth-child(2) {
        display: flex;
        justify-content:space-between;
        img {
          height: 36px;
          margin-top: 8px;
          text-align: end;
        }
      }
      &:nth-child(3) {
        display: flex;
        button {
          flex: 1;
          background-color: #fff;
          color: orange;
          font-size: 15px;
          text-align: end;
        }
      }

    }
  }
  .footer {
    margin: 48px 0;
    button {
      display: block;
      width: 100%;
      height: 40px;
      // background-color: orange;
      color: #fff;
      font-size: 18px;
      border-radius: 40px;
      background: linear-gradient(to right, #f3b439, #ff9717);
    }
  }
}
</style>
