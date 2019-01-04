if (false) {
    switch (location.pathname) {
        // 判断如果为false就是打包过后
        case ("/airlog/html/login.html" || "/html/login.html"):
            //登录设置
            createScript("./../build/js/lib/require/require.js");
            createScript("./../build/js/require.config.js");
            createScript("./../build/js/login.js");
            break;
    }
} else {
    console.log(location.pathname)
    switch (location.pathname) {
        // 判断如果为true就是开发环境
        case ("/airlog/html/login.html" || "/html/login.html"):
            //登录设置
            createScript("./../static/src/js/lib/require/require.js");
            createScript("./../static/src/js/require.config.js");
            createScript("./../static/src/js/login.js");
            break;
    }
}

function createScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.async = false //同步加载执行
    document.body.appendChild(script);
}