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