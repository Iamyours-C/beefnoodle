//根节点字体大小的计算
/*
 * @description function fontSize
 * 
 */
fontSize();
window.onresize = function(){
	fontSize();
}
function fontSize(){
	//规定：屏幕大小为750px时，html字体大小为100px，是为了方便计算
	//盒子的宽度/字体大小 = 750/100
	let width = document.documentElement.clientWidth * 2;
	width = width > 750 ? 750 : width;
	fontsize = width*100/750;
	document.querySelector('html').style['font-size'] = fontsize + 'px';
}