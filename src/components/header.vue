<style lang="less" scoped>
#header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
  font-size: 0.36rem;
  position: absolute;

  .return {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../images/arrow_left.png");
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .register,
  .email {
    color: #fff;
    font-size: 0.28rem;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0.5rem;
  }
  .lang {
    font-size: 0.28rem;
    position: absolute;
    top: 0.7rem;
    right: 0.5rem;
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
  }
}
select::-ms-expand {
  display: none;
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
}
</style>

<template>
  <div id="header">
    <div v-if="KeyWord == 'register'" class="register" @click="registerFunc">
      <span>{{ $t('register') }}</span>
    </div>
    <div v-if="KeyWord == 'email'" class="email" @click="registerTypeFunc">
      <span v-if="type">{{ $t('emailRegister') }}</span>
      <span v-else>{{ $t('phoneRegister') }}</span>
    </div>
    <div v-if="KeyWord == 'backEmail'" class="email" @click="FindpwTypeFunc">
      <span v-if="pwtype">{{ $t('backEmail') }}</span>
      <span v-else>{{ $t('backPhone') }}</span>
    </div>
      <select v-model="formInline.language" @change="onlangChange" class="country lang">
            <option v-for="(lang, index) in languages" :key="index"   :value="lang.code"  style="background-color:#FFFFFF; color:#000;">{{lang.name }}</option>
      </select>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      type: true,
      pwtype: true,
      formInline: {
        language: ""
      },
    };
  },
  props: {
    Title: {
      type: String,
      default: ""
    },
    KeyWord: {
      type: String,
      default: ""
    }
  },
  methods: {
    returnFunc() {
      this.$router.go(-1);
    },
    registerFunc() {
      this.$router.push({
        path: "/register"
      });
    },
    registerTypeFunc() {
      this.type = !this.type;
      this.$emit("vertifyChange", this.type);
    },
    FindpwTypeFunc() {
      this.pwtype = !this.pwtype;
      this.$emit("FindpwChange", this.pwtype);
    },
    onlangChange(e) {
      this.$i18n.locale = e.target.value;
      this.$store.commit("setlang", this.$i18n.locale);
    }
  },
  created() {
    this.formInline.language = localStorage.getItem("Languages")
  },
  computed: {
    languages:function() {
      return [
        { name: this.$t("lang.zh"), code: "zh" },
        { name: this.$t("lang.tw"), code: "tw" },
        { name: this.$t("lang.en"), code: "en" },
        { name: this.$t("lang.fr"), code: "fr" },
        { name: this.$t("lang.pt"), code: "pt" }
      ]
    },
    lang: function () {
      return this.$store.getters.lang;
    }  },
  watch: {
    lang: function () {
      this.lang = this.$store.getters.lang;
    }
  }
};
</script>
