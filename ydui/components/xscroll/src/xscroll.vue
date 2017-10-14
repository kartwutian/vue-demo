<template>
    <div class="wrap">
      <div class="vui-xscroll" ref="xscroll" v-finger:long-tap="longTap" v-finger:press-move="pressMove">
        <div class="item-wrap" v-for="item in nav" :key="item.link"  >
          <router-link :to="item.link">
            <div class="vui-xscroll-item" :style="{background:item.background}">
              <span>{{item.name}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

</template>

<script type="text/babel">
  export default{
      name: 'vui-xscroll',
      data(){
          return{
              nav:[
                {
                  name:"小说精选",
                  link: '/index1',
                  background: '#f18888'
                },
                {
                  name:"真实故事",
                  link: '/index2',
                  background: '#f18888'
                },
                {
                  name:"历史人文",
                  link: '/index3',
                  background: '#f18'
                },
                {
                  name:"IT:互联",
                  link: '/index3',
                  background: '#f98'
                },
                {
                  name:"IT:互联",
                  link: '/index3',
                  background: '#f98'
                },
                {
                  name:"IT:互联",
                  link: '/index3',
                  background: '#f98'
                }
              ]
          }
      },
      mounted(){
          console.log(this.$refs.xscroll)
          Transform(this.$refs.xscroll)
          this._xscroll =this.$refs.xscroll;
      },
      methods: {
        longTap(evt){
            alert(123)
        },
        pressMove(evt){
          console.log(evt.deltaX);
          this._xscroll.translateX += evt.deltaX
        }
      }

  }
</script>

<style lang="less">
  .wrap{
    overflow: hidden;
    .item-wrap{
      display: inline-block;
      white-space: nowrap;
    }
  }
@import "../../../styles/components/xscroll.less";
</style>
