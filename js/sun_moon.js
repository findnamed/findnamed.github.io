function switchNightMode() {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),
        setTimeout(function () {
            document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
                setTimeout(function () {
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
                    setTimeout(function () {
                        document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
                    }, 1e3);
                }, 2e3)
        })
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        // 先设置太阳月亮透明度
        document.getElementById("sun").style.opacity = "1";
        document.getElementById("moon").style.opacity = "0";
        // document.getElementById("live2d-widget-dark").style.opacity = "0";
        // document.getElementById("live2d-widget").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("sun").style.opacity = "0";
            document.getElementById("moon").style.opacity = "1";

            //先隐藏模型(sun模式)
            if (checkLivc2dShow()) {
                document.getElementById("live2d-widget-dark").style.opacity = "1";
                document.getElementById("live2d-widget").style.opacity = "0";
            }
            // document.getElementById("live2d-widget").style.display = 'none';
            // document.getElementById("live2d-widget-dark").style.display = 'block';
            //显示模型
        }, 1000);

        btf.activateDarkMode()
        btf.saveToLocal.set('theme', 'dark', 2)
        // GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')


        //js文件引入
        localStorage.setItem("jsonPath", "/live2dw/assets/bronya.model.json")

        // 延时弹窗提醒
        // setTimeout(() => {
        //     new Vue({
        //         data: function () {
        //             this.$notify({
        //                 title: "关灯啦🌙",
        //                 message: "当前已成功切换至夜间模式！",
        //                 position: 'top-left',
        //                 offset: 50,
        //                 showClose: true,
        //                 type: "success",
        //                 duration: 5000
        //             });
        //         }
        //     })
        // }, 2000)
    } else {
        // 先设置太阳月亮透明度
        document.getElementById("sun").style.opacity = "0";
        document.getElementById("moon").style.opacity = "1";
        // if (checkLivc2dShow()) {
        //     document.getElementById("live2d-widget-dark").style.opacity = "1";
        //     document.getElementById("live2d-widget").style.opacity = "0";
        // }



        setTimeout(function () {
            document.getElementById("sun").style.opacity = "1";
            document.getElementById("moon").style.opacity = "0";
            //先隐藏模型(sun模式)
            if (checkLivc2dShow()) {
                document.getElementById("live2d-widget-dark").style.opacity = "0";
                document.getElementById("live2d-widget").style.opacity = "1";
            }
            //显示模型
        }, 1000);

        btf.activateLightMode()
        btf.saveToLocal.set('theme', 'light', 2)
        document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')

        localStorage.setItem("jsonPath", "/live2dw/assets/Kobayaxi.model.json")
        // setTimeout(() => {
        //     new Vue({
        //         data: function () {
        //             this.$notify({
        //                 title: "开灯啦🌞",
        //                 message: "当前已成功切换至白天模式！",
        //                 position: 'top-left',
        //                 offset: 50,
        //                 showClose: true,
        //                 type: "success",
        //                 duration: 5000
        //             });
        //         }
        //     })
        // }, 2000)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}
function checkLivc2dShow() {
    if (!localStorage.getItem("live2dshow") || (localStorage.getItem("live2dshow") == 1)) {
        return true;
    } else {
        return false;
    }
}

function showlive2d() {
    if (!localStorage.getItem("live2dshow") || (localStorage.getItem("live2dshow") == 0)) {
        const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
        if (nowMode === 'light') {
            document.getElementById("live2d-widget").style.opacity = "1";
        } else {
            document.getElementById("live2d-widget-dark").style.opacity = "1";
        }
        localStorage.setItem("live2dshow", 1)
    } else {
        document.getElementById("live2d-widget").style.opacity = "0";
        document.getElementById("live2d-widget-dark").style.opacity = "0";
        localStorage.setItem("live2dshow", 0)
    }
}