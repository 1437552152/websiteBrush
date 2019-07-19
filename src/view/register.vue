<style lang="less" scoped>
#page {
  .clearfix {
    clear: both;
  }
  &.page {
    background-image: url("../images/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
  }
  // width: 100%;
  // .logo {
  //   width: 100%;
  //   font-size: 0;
  //   text-align: center;
  //   margin: 1.2rem 0 1rem 0;
  //   img {
  //     width: 2.37rem;
  //     height: 1.44rem;
  //   }
  // }
  .logo {
    margin-left: 0.5rem;
    float: left;
    margin-top: 0.4rem;
  }
  .title {
    color: #cbcccb;
    margin-top: 0.5rem;
  }
  .title h1 {
    font-size: 0.65rem;
    margin-bottom: 0.4rem;
  }

  .title h3 {
    font-size: 0.35rem;
    margin-bottom: 0.8rem;
  }
  .backpassword {
    margin: 0 0.6rem;
    .box {
      width: 100%;
      margin: 0 0 0.25rem 0;
      position: relative;
      display: flex;
      z-index: 9;
      .icon {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        &.icon_name {
          background-image: url("../images/icon_name.png");
        }
        &.icon_country {
          background-image: url("../images/icon_country.png");
        }
        &.icon_key {
          background-image: url("../images/icon_key.png");
        }
        &.icon_vertify {
          background-image: url("../images/icon_vertify.png");
        }
        &.icon_email {
          background-image: url("../images/icon_email.png");
        }
        &.icon_phone {
          background-image: url("../images/icon_phone.png");
        }
      }
      select,
      input {
        border: none;
        -webkit-appearance: none;
        background: none;
        flex: 1;
        color: #fff;
        font-size: 0.25rem;
        // line-height: 0.32rem;
        margin: 0 0.3rem 0 0;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        height: 0.7rem;
        line-height: 0.7rem;
        outline: none;
      }
      .country option {
        color: #000;
      }
      .verfiCode {
        color: #6387fe;
        font-size: 0.25rem;
        height: 0.4rem;
        line-height: 0.4rem;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.15rem 0;
        padding: 0 0.3rem 0 0.4rem;
        border-left: 1px solid #ccc;
        z-index: 9999;
      }
      .setTime {
        color: #6387fe;
        font-size: 0.32rem;
        height: 0.5rem;
        line-height: 0.5rem;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.15rem 0;
        padding: 0 0.3rem 0 0.4rem;
        border-left: 1px solid #ccc;
      }
    }
  }
  .submit {
    margin: 0.8rem 0.6rem 0;
    color: #fff;
    font-size: 0.32rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    border: radius 20px;
    background: #6387fe;
  }
  .foottext {
    color: #fff;
    font-size: 0.3rem;
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }
}
</style>

<template>
  <div id="page" class="page">
    <!-- <div v-wechat-title="$route.meta.title"></div> -->
    <Header :Title="$t('register')" KeyWord="email" @vertifyChange="vertifyFunc"></Header>
    <!-- <Header :Title="$t('phoneRegister')" @vertifyChange="vertifyFunc"></Header> -->
    <!-- <div class="logo">
      <img src="../images/logo.png" alt="">
    </div> -->
      	<div class="head">
					<img src="../images/logo.png" class="logo">
          <div class="clearfix"></div>
				</div>
				<div class="title">
					<h1 class="text-center">{{$t('global')}}</h1>
					<h3 class="text-center">{{$t('fiance')}}</h3>
			</div>
    <div class="backpassword">
      <div class="box">
        <!-- <i class="icon icon_name"></i> -->
        <input type="text" v-model="username" :placeholder="$t('enterusername')">
      </div>
      <div class="box">
        <!-- <i class="icon icon_country"></i> -->
        <select v-model="formInline.country" @on-change="onAreaChange" class="country"  v-if="lang=='zh'">
							<option v-for="(area, index) in areas" :key="index" :value="area.zhName">{{area.zhName}} +{{area.areaCode}}</option>
				</select>
        <select v-model="formInline.country" @on-change="onAreaChange" class="country"  v-if="lang=='tw'">
							<option v-for="(area, index) in areas" :key="index" :value="area.zhName">{{area.hkName }} +{{area.areaCode}}</option>
				</select>
        <select v-model="formInline.country" @on-change="onAreaChange" class="country"  v-if="lang=='en'">
							<option v-for="(area, index) in areas" :key="index" :value="area.zhName">{{area.enName }} +{{area.areaCode}}</option>
				</select>
         <select v-model="formInline.country" @on-change="onAreaChange" class="country"  v-if="lang=='fr'">
							<option v-for="(area, index) in areas" :key="index" :value="area.zhName">{{area.frName }} +{{area.areaCode}}</option>
				</select>
        <select v-model="formInline.country" @on-change="onAreaChange" class="country"  v-if="lang=='pt'">
							<option v-for="(area, index) in areas" :key="index" :value="area.zhName">{{area.ptName }} +{{area.areaCode}}</option>
				</select>

   <!-- <input type="text" v-model="username" :placeholder="$t('choiseCountry')"> -->
      </div>
      <div class="box" v-if="verfyType">
        <!-- <i class="icon icon_phone"></i> -->
        <input type="text" v-model="teleData" :placeholder="$t('enterPhone')">
      </div>
      <div class="box" v-if="!verfyType">
        <!-- <i class="icon icon_email"></i> -->
        <input type="text" v-model="emailData" :placeholder="$t('enterEmail')">
      </div>
      <div class="box" v-if="verfyType">
        <!-- <i class="icon icon_vertify"></i> -->
        <input type="number" v-model="codeData" :placeholder="$t('enterVertifyCode')">
        <div v-if="verfyStatus" ref="VerfiCode" class="verfiCode">
          <span>{{ $t('sendCode') }}</span>
        </div>
        <div v-else class="setTime">
          <span>{{ setTime }}s</span>
        </div>
      </div>
      <div class="box">
        <!-- <i class="icon icon_key"></i> -->
        <input type="password" v-model="password" :placeholder="$t('enterPassword')">
      </div>
      <div class="box">
        <!-- 推荐码 -->
        <input type="text" :disabled="disabled"   v-model="passwords" :placeholder="$t('enterPasswordAgain')">
      </div>
    </div>
    <div class="submit" v-show="verfyType" @click="submitFunc" :disabled="phregisting">
      <span>{{ $t('sure') }}</span>
    </div>
    <div class="submit" v-show="!verfyType" ref="VerfiSub" :disabled="elregisting">
      <span>{{ $t('sure') }}</span>
    </div>
    	<div class="footer">
					<p class="text-center foottext copy">{{ $t('register1') }}</p>
				</div>
  </div>
</template>
<script>
import Header from "@/components/header";
import gtInit from "@/assets/js/gt.js";
export default {
  name: "Register",
  data() {
    return {
      disabled: false,
      areas: [],
      username: "", // 用户名
      teleData: "", // 手机号
      emailData: "", // 邮箱账号
      codeData: "", // 验证码
      password: "", // 密码
      // passwords: "", // 二次密码
      passwords: "", // 改为了推荐码
      verfyStatus: true, // 验证码状态
      verfyData: "", // 级验证暂存参数
      verfyType: true, // 手机验证
      setTime: 60, // 验证码时间
      setInterVal: "", //
      phregisting: false, // 注册时按钮不可再按
      elregisting: false, // 注册时按钮不可再按
      //手机验证
      formInline: {
        country: "",
        areaCode: ""
      }
    };
  },
  created() {
    if (this.getParamString("agent") == undefined) {
      this.passwords = "";
      this.disabled = false;
    } else {
      this.passwords = this.getParamString("agent");
      this.disabled = true;
    }
    this.country();
    this.initGeetest(); // 初始化级验证
  },
  methods: {
    //   接收参数
    getParamString(name) {
      let paramUrl = window.location.href;
      let paramStrs = paramUrl.split("?");
      let params = {};
      for (var index = 0; index < paramStrs.length; index++) {
        params[paramStrs[index].split("=")[0]] = decodeURI(
          paramStrs[index].split("=")[1]
        );
      }
      return params[name];
    },
    //国家选择
    onAreaChange(value) {
      for (var i = 0; i < this.areas.length; i++) {
        if (this.areas[i].zhName == value) {
          this.formInline.areaCode = this.areas[i].areaCode;
        }
      }
    },
    country() {
      let that = this;
      that.$http.Getcountry().then(function (res) {
        that.areas = res.data;
        that.formInline.country = that.areas[0].zhName;
        that.formInline.areaCode = that.areas[0].areaCode;
      });
    },
    uservertifyFunc() {
      if (this.username == "") {
        this.$toast(this.$t("enterusername"), {
          durtaion: 200,
          location: "bottom"
        });
        return false;
      } else {
        return true;
      }
    },
    televertifyFunc() {
      return true;
    },

    emailvertifyFunc() {
      if (this.emailData.indexOf("@") == -1 || !this.emailData) {
        this.$toast(this.$t("emailerr"), {
          durtaion: 200,
          location: "bottom"
        });
        return false;
      } else {
        return true;
      }
    },
    passwordFunc() {
      if (this.password == "") {
        this.$toast(this.$t("enterPassword"), {
          durtaion: 200,
          location: "bottom"
        });
        return false;
      } else {
        return true;
      }
    },
    setInterFunc() {
      this.setInterVal = setInterval(() => {
        this.setTime -= 1;
        if (this.setTime == 0) {
          this.setTime = 60;
          this.verfyStatus = true;
          this.verfyData = "";
          clearInterval(this.setInterVal);
        }
      }, 1000);
    },
    submitFunc() {
      this.phregisting = true;
      let self = this;
      if (
        this.televertifyFunc() &&
        this.passwordFunc() &&
        this.uservertifyFunc()
      ) {
        this.$http
          .Phoneregister({
            phone: self.teleData,
            username: self.username,
            password: self.password,
            code: self.codeData,
            country: self.formInline.country,
            promotion: self.passwords
          })
          .then(res => {
            var resp = res.body;
            self.phregisting = false;
            self.$toast(res.message, {
              durtaion: 200,
              location: "top"
            });
            setTimeout(() => {
              window.location.href = "https://www.exchief.pro/update/download.html";
            }, 3000);
          });
      }
    },
    vertifyFunc(val) {
      // 这个val值是子组件传过来的值val，为了让父组件做判断
      // 切换验证邮箱
      this.verfyType = val;
    },
    initGeetest() {
      let self = this;
      this.$http.Gtcaptcha().then(res => {
        window.initGeetest(
          {
            // 以下配置参数来自服务端 SDK
            gt: res.gt,
            challenge: res.challenge,
            offline: !res.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: res.new_captcha, // 用于宕机时表示是新验证码的宕机
            product: "bind",
            width: "100%",
            lang:
              localStorage.getItem("Languages") == "tw" ? "zh-tw" : localStorage.getItem("Languages") == "zh" ? "zh-cn" : localStorage.getItem("Languages") == 'en' ? "en" : localStorage.getItem("Languages") == 'fr' ? 'fr' : localStorage.getItem("Languages") == "pt" ? "pt" : "en"
          },
          function (captchaObj) {
            self.$refs.VerfiCode.onclick = function () {
              if (self.televertifyFunc()) {
                captchaObj.verify();
              }
            };
            self.$refs.VerfiSub.onclick = function () {
              if (
                self.emailvertifyFunc() &&
                self.passwordFunc() &&
                self.uservertifyFunc()
              ) {
                captchaObj.verify();
              }
            };
            captchaObj.onSuccess(function () {
              self.verfyData = captchaObj.getValidate();
              if (self.verfyData) {
                self.afterValidate();
              }
            });
          }
        );
      });
    },
    afterValidate() {
      let self = this;
      if (!this.verfyType) {
        self.elregisting = true;
        self.$http
          .Emailcode({
            email: this.emailData,
            username: this.username,
            password: this.password,
            country: self.formInline.country,
            promotion: this.passwords,
            geetest_challenge: self.verfyData.geetest_challenge,
            geetest_validate: self.verfyData.geetest_validate,
            geetest_seccode: self.verfyData.geetest_seccode
          })
          .then(res => {
            self.elregisting = false;
            self.$toast(res.message, {
              durtaion: 200,
              location: "top"
            });
            setTimeout(() => {
              window.location.href = "https://www.exchief.pro/update/download.html";
            }, 3000);
          });
      } else {
        self.verfyStatus = false;
        self.setInterFunc();
        self.$http
          .Messagecode({
            phone: self.teleData,
            country: self.formInline.country,
            geetest_challenge: self.verfyData.geetest_challenge,
            geetest_validate: self.verfyData.geetest_validate,
            geetest_seccode: self.verfyData.geetest_seccode
          })
          .then(res => {
            self.$toast(res.message, {
              durtaion: 200,
              location: "center"
            });
          });
      }
    }
  },
  components: {
    Header
  },
  computed: {
    lang: function () {
      if (this.$store.getters.lang == null) {
        console.log(localStorage.getItem("Languages"))
        return localStorage.getItem("Languages");
      } else {
        return this.$store.getters.lang;
      }    }  },
  watch: {
    lang: function () {
      if (this.$store.getters.lang == null) {
        this.lang = localStorage.getItem("Languages")
      } else {
        this.lang = this.$store.getters.lang;
      }    }
  }
};
</script>
