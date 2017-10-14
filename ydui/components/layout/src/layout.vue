<template>
    <section class="vui-flexview">
        <slot name="navbar" v-if="showNavbar">
            <yd-navbar :title="title" v-if="!!title">
                <router-link :to="link || '/'" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>
        </slot>

        <slot name="top"></slot>

        <section class="vui-scrollview" ref="scrollView" id="scrollView">
            <slot name="scollview"></slot>
        </section>

        <slot name="bottom"></slot>

        <slot name="tabbar"></slot>
    </section>
</template>

<script type="text/babel">
    export default {
        name: 'vui-layout',
        props: {
            link: String,
            title: String,
            showNavbar: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/layout.less";
</style>
