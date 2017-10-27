<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="getSidebarOpened"></hamburger>
        <levelbar></levelbar>
        <tabs-view></tabs-view>
        <!--<error-log v-if="log.length>0" class="errLog-container" :logsList="log"></error-log>-->
        <screenfull class='screenfull'></screenfull>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="getAvatar">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>
                        首页
                    </el-dropdown-item>
                </router-link>
                <!--<a target='_blank' href="https://">-->
                    <!--<el-dropdown-item>-->
                        <!--其他外链-->
                    <!--</el-dropdown-item>-->
                <!--</a>-->
                <el-dropdown-item divided><span @click="signOut" style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Hamburger from './Hamburger';
    import Levelbar from './Levelbar';
    import TabsView from './TabsView'
    import Screenfull from './Screenfull'
//    import ErrorLog from 'components/ErrLog'
//    import errLogStore from 'store/errLog'

    export default {
        components: {
            Hamburger,
            Levelbar,
            TabsView,
            Screenfull,
//            ErrorLog
        },
        data() {
            return {
//                log: errLogStore.state.errLog
            }
        },
        computed: {
            ...mapGetters(['getSidebarOpened', 'getAvatar']),
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('VX_SIDERBAR_TOGGLE');
            },
            signOut() {
                this.$store.dispatch('VX_SIGN_OUT').then((res) => {
                    console.log('sign out res', res);
                    location.reload()// 为了重新实例化vue-router对象 避免bug
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>



