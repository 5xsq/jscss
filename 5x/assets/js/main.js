(function(){var themeSwitch=document.getElementById('themeSwitch');if(themeSwitch){initTheme();themeSwitch.addEventListener('change',function(event){resetTheme();});function initTheme(){var darkThemeSelected=(localStorage.getItem('themeSwitch')!==null&&localStorage.getItem('themeSwitch')==='dark');themeSwitch.checked=darkThemeSelected;darkThemeSelected?document.body.setAttribute('data-theme','dark'):document.body.removeAttribute('data-theme');};function resetTheme(){if(themeSwitch.checked){document.body.setAttribute('data-theme','dark');localStorage.setItem('themeSwitch','dark');}else{document.body.removeAttribute('data-theme');localStorage.removeItem('themeSwitch');}};}
var mainHeader=document.getElementsByClassName('js-main-header')[0];if(mainHeader){var trigger=mainHeader.getElementsByClassName('js-main-header__nav-trigger')[0],nav=mainHeader.getElementsByClassName('js-main-header__nav')[0];trigger.addEventListener("click",function(event){event.preventDefault();var ariaExpanded=!Util.hasClass(nav,'main-header__nav--is-visible');Util.toggleClass(nav,'main-header__nav--is-visible',ariaExpanded);trigger.setAttribute('aria-expanded',ariaExpanded);if(ariaExpanded){nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();}});}}());
//全站公共JS
window.onscroll = function () {
    setShowScoll();//启动滚回顶部！
}
/*滚回顶部*/
function setShowScoll() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let clientHeight = 600;
    if (scrollTop >= clientHeight) {
        $("#totop").show();
    } else {
        $("#totop").hide()
    }
}
function doScroll1() {
    $('body,html').animate({scrollTop:0},600);

}
/*滚回顶部End*/