let myName = '註冊成功' // string 字串
let age = '我的年齡:800歲'
let word = myName + age
console.log(word)
console.log(myName)

let score = 200  // number 數字
console.log(score)

let isFake = true // boolean
console.log(isFake)

let bag = undefined  // 包包內沒東西
console.log(bag)

let bag2 = null
console.log(bag2)



const para = document.querySelector('span');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('輸入使用者姓名');
  para.textContent = 'Welcome: ' + name;
}

(function(designWidth, maxWidth) {
	var doc = document,
		win = window;
	var docEl = doc.documentElement;
	var tid;
	var rootItem,rootStyle;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		if (!maxWidth) {
			maxWidth = 540;
		};
		if (width > maxWidth) {
			width = maxWidth;
		}
		//直接采用簡單的rem換算方法 1rem=100px
		var rem = width * 100 / designWidth;
		//兼容UC开始
		rootStyle="html{font-size:"+rem+'px !important}';
		rootItem = document.getElementById('rootsize') || document.createElement("style");
		if(!document.getElementById('rootsize')){
		document.getElementsByTagName("head")[0].appendChild(rootItem);
		rootItem.id='rootsize';
		}
		if(rootItem.styleSheet){
		rootItem.styleSheet.disabled||(rootItem.styleSheet.cssText=rootStyle)
		}else{
		try{rootItem.innerHTML=rootStyle}catch(f){rootItem.innerText=rootStyle}
		}
		//兼容UC结束
		docEl.style.fontSize = rem + "px";
	};
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})(640, 640);