<template>
    <yd-layout>
        <div slot="navbar">
          <yd-navbar :title="title" v-if="!!title">
            <router-link :to="link || '/index'" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
            <router-link :to="link || '/index'" slot="right">
              <yd-navbar-next-icon></yd-navbar-next-icon>
            </router-link>
          </yd-navbar>
        </div>
        <yd-button-group class="demo-pitch">

            <yd-button type="primary">primary</yd-button>
            <yd-button type="danger">danger</yd-button>
            <yd-button type="warning">warning</yd-button>
            <yd-button type="hollow">hollow</yd-button>

            <yd-button size="large" type="primary">primary</yd-button>
            <yd-button size="large" type="danger">danger</yd-button>
            <yd-button size="large" type="warning">warning</yd-button>
            <yd-button size="large" type="disabled" disabled>disabled</yd-button>
            <yd-button size="large" type="hollow">hollow</yd-button>

            <yd-button size="large" type="primary" shape="circle">shape="circle"</yd-button>
            <yd-button size="large" type="hollow" shape="circle">shape="circle"</yd-button>

        </yd-button-group>

    </yd-layout>
</template>
<script>
  export default {
      data(){
          return {
              link: '/index'
          }
      },
      computed:{
          title(){
              return 'buttons'
          }
      }
  }
</script>
