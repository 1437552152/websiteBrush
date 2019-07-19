<style lang="less" scoped>
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #272a31;
  ul {
    width: 100%;
    display: flex;
    li {
      line-height: 0.45rem;
      flex: 1;
      i {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
      }
      &:nth-child(1) {
        i {
          background-image: url("../images/home_1.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          &.active {
            background-image: url("../images/home.png");
          }
        }
      }
      &:nth-child(2) {
        i {
          background-image: url("../images/market_1.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          &.active {
            background-image: url("../images/market.png");
          }
        }
      }
      &:nth-child(3) {
        i {
          background-image: url("../images/group_1.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          &.active {
            background-image: url("../images/group.png");
          }
        }
      }
      p {
        color: #ccc;
        font-size: 0.22rem;
        &.active {
          color: #e18a00;
        }
      }
    }
  }
}
</style>

<template>
  <div class="footer">
    <ul>
      <li @click="tabChange('index')">
        <i :class="{active: homeStatus}"></i>
        <p :class="{active: homeStatus}">{{ $t('home') }}</p>
      </li>
      <li @click="tabChange('market')">
        <i :class="{active: marketStatus}"></i>
        <p :class="{active: marketStatus}">{{ $t('market') }}</p>
      </li>
      <li @click="tabChange('personal')">
        <i :class="{active: mineStatus}"></i>
        <p :class="{active: mineStatus}">{{ $t('mine') }}</p>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      homeStatus: false,
      marketStatus: false,
      mineStatus: false
    }
  },
  methods: {
    tabChange (eq) {
      if (eq === 'index') {
        this.homeStatus = true
        this.marketStatus = false
        this.mineStatus = false
      } else if (eq === 'market') {
        this.homeStatus = false
        this.marketStatus = true
        this.mineStatus = false
      } else {
        this.homeStatus = false
        this.marketStatus = false
        this.mineStatus = true
      }
      this.$router.push({path: eq})
    }
  },
  created () {
    let _Path = this.$route.path
    if (_Path === '/index') this.homeStatus = true
    if (_Path === '/market') this.marketStatus = true
    if (_Path === '/personal') this.mineStatus = true
  }
}
</script>
