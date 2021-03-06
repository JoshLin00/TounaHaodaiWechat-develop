//rem
(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	function recalc() {
		var clientWidth = docEl.clientWidth>540 ? 540 : docEl.clientWidth; // 控制最大宽度为540px
		if (!clientWidth) return;
		// var dpr = window.devicePixelRatio; //设备像素比
		//此处的100为页面html设置的字体大小值（为方便计算一般用100px）
		//此处的320为视觉稿宽度的一半
		//根据设备可视区的宽度以及设备像素比动态改变fontSize值
		//如果计算dpr,在iphone6 plus等dpr较高的浏览器中布局会错乱
		// docEl.style.fontSize = (dpr / 2) * 100 * (clientWidth  / 320) + 'px';
		//如设计图为750，在此JS之前调用 window.TounaDesignSize= 375
		docEl.style.fontSize = 100 * (clientWidth  / (win.TounaDesignSize||320)) + 'px';
	};
	recalc();

	if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
	if (doc.readyState === 'complete') {
		recalc();
	} else {
		doc.addEventListener('DOMContentLoaded', recalc, false);
	}
})(document, window);


//机型平台判断
var browserTouna = {
    versions: function() {
        var u = navigator.userAgent,
            ua = navigator.userAgent.toLowerCase(),
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            isweixin: ua.match(/MicroMessenger/i)=='micromessenger' //是否微信网页
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
// if (browserTouna.versions.android) {
//     //为android时
// }
// if (browserTouna.versions.ios || browserTouna.versions.iPhone || browserTouna.versions.iPad) {
//     //为IOS时
// }