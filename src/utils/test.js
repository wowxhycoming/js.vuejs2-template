let item = { "path": "/", "component": { "name": "layout", "components": { "Sidebar": { "components": { "SidebarItem": { "name": "SidebarItem", "props": { "routes": {} }, "staticRenderFns": [], "_compiled": true, "_scopeId": "data-v-e0c47854", "beforeCreate": [ null, null ], "__file": "src\\components\\layout\\SidebarItem.vue", "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} } }, "computed": {}, "staticRenderFns": [], "_compiled": true, "__file": "src\\components\\layout\\Sidebar.vue", "beforeCreate": [ null ], "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} }, "Navbar": { "components": { "Hamburger": { "name": "hamburger", "props": { "isActive": { "default": false }, "toggleClick": { "default": null } }, "staticRenderFns": [], "_compiled": true, "_scopeId": "data-v-66ac2a10", "beforeCreate": [ null, null ], "__file": "src\\components\\layout\\Hamburger.vue", "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} }, "Levelbar": { "methods": {}, "watch": {}, "staticRenderFns": [], "_compiled": true, "_scopeId": "data-v-146c1758", "beforeCreate": [ null, null ], "__file": "src\\components\\layout\\Levelbar.vue", "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} } }, "computed": {}, "methods": {}, "staticRenderFns": [], "_compiled": true, "_scopeId": "data-v-56bb2119", "beforeCreate": [ null, null ], "__file": "src\\components\\layout\\Navbar.vue", "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} } }, "computed": {}, "staticRenderFns": [], "_compiled": true, "_scopeId": "data-v-77b9e333", "beforeCreate": [ null, null ], "__file": "src\\components\\layout\\Layout.vue", "beforeDestroy": [ null ], "_Ctor": {}, "inject": {} }, "redirect": "/dashboard", "name": "首页", "displayName": "首页", "noDropdown": true, "children": [ { "path": "dashboard" } ] }


if(!item.hidden && item.noDropdown && item.children.length > 0) {
    console.log(true);
} else {
    if(!item.hidden === false) {
        console.log('hidden');
    }
    if(item.noDropdown === false) {
        console.log('noDropdown');
    }
    if(item.children.length === false) {
        console.log('length');
    }
}