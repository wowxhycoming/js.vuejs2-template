export const getters = {
    // auth
    getToken: state => state.auth.token,
    getLastActionTime: state => state.auth.lastActionTime,
    getLastActionTimeCrypt: state => state.auth.lastActionTimeCrypt,
    // menu
    getMenuList: state => state.menu.menuList,
    // app
    getSidebarOpened: state => state.app.isOpened,

    // user
    getUserIsSignIn: state => state.user.isSignIn, // 用户是否登录
    getUserPhone: state => state.user.phone,

    // calculate
    getProjectNo: state => state.calculate.projectNo
};