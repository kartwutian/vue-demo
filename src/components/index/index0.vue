<template>

  <div>
    <yd-navbar title="index" fixed :style="styles">
      <router-link to="'/" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>

    <vui-xscroll></vui-xscroll>

    <div style="height: 2000px;">
      12dasdas
    </div>
  </div>
</template>

<script type="text/babel">

  export default {
    computed:{
        styles (){
           return this.$store.state.index.navbarStyles
        }
    },
    mounted(){
    }
  }
</script>
