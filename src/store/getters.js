export const getters = {
    // auth
    getToken: state => state.auth.token,

    // layout
    getSidebarOpened: state => state.sidebar.isOpened,

    // user
    getUserIsSignIn: state => state.user.isSignIn, // 用户是否登录
    getUserPhone: state => state.user.phone,

    // calculate
    getProjectNo: state => state.calculate.projectNo
};