function live2dnowshow() {
    console.log("执行了")
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        document.getElementById("live2d-widget").style.opacity = "1";
        document.getElementById("live2d-widget-dark").style.opacity = "0";
    } else {
        document.getElementById("live2d-widget").style.opacity = "0";
        document.getElementById("live2d-widget-dark").style.opacity = "1";
    }

}
live2dnowshow()