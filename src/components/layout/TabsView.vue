<template>
    <div class='tabs-view-container'>
        <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
            <el-tag :closable="true" :type="isActive(tag.path)?'primary':''" @close='closeViewTabs(tag,$event)'>
                {{tag.name}}
            </el-tag>
        </router-link>
    </div>
</template>

<script>
    export default {
        computed: {
            visitedViews() {
                return this.$store.state.app.visitedViews.slice(-6)
            }
        },
        methods: {
            closeViewTabs(view, $event) {
                console.log('close view tabs');
                this.$store.dispatch('VX_DEL_VISITED_VIEW', view).then((views) => {
                    if(this.isActive(view.path)) {
                        const latestView = views.slice(-1)[0]
                        if(latestView) {
                            this.$router.push(latestView.path)
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
                $event.preventDefault()
            },
            generateRoute() {
                console.log('this.$route', this.$route.matched[this.$route.matched.length - 1].name);
                if(this.$route.matched[this.$route.matched.length - 1].name) {
                    console.log('match name', this.$route.matched[this.$route.matched.length - 1]);
                    return this.$route.matched[this.$route.matched.length - 1]
                }
                console.log('match no name');
                this.$route.matched[0].path = '/'
                console.log('this.$route.matched[0]', this.$route.matched[0]);
                return this.$route.matched[0]
            },
            addViewTabs() {
                this.$store.dispatch('VX_ADD_VISITED_VIEW', this.generateRoute())
            },
            isActive(path) {
                return path === this.$route.path
            }
        },
        watch: {
            $route() {
                console.log('router is watched');
                this.addViewTabs();
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .tabs-view-container {
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
        .tabs-view {
            margin-left: 10px;
        }
    }
</style>
