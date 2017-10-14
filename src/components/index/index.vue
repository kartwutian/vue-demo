<template>
  <yd-layout >


        <router-view ></router-view>

        <yd-tabbar class="demo-small-pitch" slot="tabbar">
          <yd-tabbar-item title="微信" link="/" active>
            <i slot="icon" class="demo-icons-weixin"></i>
            <yd-badge slot="badge" type="danger">2</yd-badge>
          </yd-tabbar-item>
          <yd-tabbar-item title="通讯录" link="/index1">
            <i slot="icon" class="demo-icons-contact"></i>
          </yd-tabbar-item>
          <yd-tabbar-item title="发现" link="/index2" dot>
            <i slot="icon" class="demo-icons-discover"></i>
          </yd-tabbar-item>
          <yd-tabbar-item title="图片" link="/index3">
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"/>
          </yd-tabbar-item>
        </yd-tabbar>
  </yd-layout>
</template>

<script type="text/babel">
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this._oScrollView = this.$el.querySelector('#scrollView')
      this._oScrollView.addEventListener('scroll',this.scrollHandler)
    },
    methods: {
      scrollHandler(evt){
        this.opacity= this._oScrollView.scrollTop/100
        this.$store.dispatch('updataNavbarOpacity',{ opacity: this.opacity })
      }
    }
  }
</script>
