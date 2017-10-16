<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebarOpened}">
        <sidebar class="sidebar-container"></sidebar>
        <!--<div class="main-container">-->
            <!--<navbar></navbar>-->
            <!--<app-main></app-main>-->
        <!--</div>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {Sidebar, /*Navbar, AppMain*/} from '@/components/layout';

    export default {
        name: 'layout',
        components: {
            Sidebar,
//            Navbar,
//            AppMain
        },
        computed: {
            ...mapGetters(['getSidebarOpened']),
            sidebarOpened() {
                return this.getSidebarOpened;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-container {
                width: 36px;
                overflow: inherit;
            }
            .main-container {
                margin-left: 36px;
            }
        }
        .sidebar-container {
            transition: width 0.28s ease-out;
            width: 180px;
            height: 100%;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display: none
            }
        }
        .main-container {
            min-height: 100%;
            transition: margin-left 0.28s ease-out;
            margin-left: 180px;
        }
    }
</style>
