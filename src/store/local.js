const prefix = 'xhy-';

// 存储本地数据
export const setStorage = function(key,data) { // data 为要存储的数据
    localStorage.setItem(prefix+key, JSON.stringify(data));
}

// 获取数据
export const getStorage = function(key) {
    return JSON.parse(localStorage.getItem(prefix+key));
}