let buttonPhoneOne = document.getElementById("phoneOne")
let buttonTvOne = document.getElementById("tvOne")
let buttonPcOne = document.getElementById("pcOne")
let buttonPhoneTwo = document.getElementById("phoneTwo")
let buttonTvTwo = document.getElementById("tvTwo")
let buttonPcTwo = document.getElementById("pcTwo")

let bascketItem = []

buttonPhoneOne.addEventListener('click', function() {
  swal("Успешно!", "Товар 'Samsung Galaxy S22' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('Samsung Galaxy S22')
  let itemPhoneOne = console.log(bascketItem.includes('Samsung Galaxy S22')); 
  if (itemPhoneOne !== true) {
    let cardBascket = document.querySelector('.card-bascket1')
    cardBascket.classList.toggle('active')
  }
})

buttonTvOne.addEventListener('click', function() {
  swal("Успешно!", "Товар 'Samsung 32 inches QLED 4K Smart TV' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('Samsung 32 inches QLED 4K Smart TV')
  let itemTvOne = console.log(bascketItem.includes('Samsung 32 inches QLED 4K Smart TV')); 
  if (itemTvOne !== true) {
    let cardBascket = document.querySelector('.card-bascket2')
    cardBascket.classList.toggle('active')
  }
})

buttonPcOne.addEventListener('click', function() {
  swal("Успешно!", "Товар '2021 Apple MacBook Pro' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('2021 Apple MacBook Pro')
  let itemPPcOne = console.log(bascketItem.includes('2021 Apple MacBook Pro')); 
  if (itemPPcOne !== true) {
    let cardBascket = document.querySelector('.card-bascket3')
    cardBascket.classList.toggle('active')
  }
})

buttonPhoneTwo.addEventListener('click', function() {
  swal("Успешно!", "Товар 'iPhone 12' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('iPhone 12')
  let itemPhoneTwo = console.log(bascketItem.includes('iPhone 12')); 
  if (itemPhoneTwo !== true) {
    let cardBascket = document.querySelector('.card-bascket4')
    cardBascket.classList.toggle('active')
  }
})

buttonTvTwo.addEventListener('click', function() {
  swal("Успешно!", "Товар 'Sony X85J 55 Inch smart TV' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('Sony X85J 55 Inch smart TV')
  let itemTvTwo = console.log(bascketItem.includes('Sony X85J 55 Inch smart TV')); 
  if (itemTvTwo !== true) {
    let cardBascket = document.querySelector('.card-bascket5')
    cardBascket.classList.toggle('active')
  }
})

buttonPcTwo.addEventListener('click', function() {
  swal("Успешно!", "Товар 'SAMSUNG Galaxy Book Pro' успешно добавлен в корзину! Для удаления, нажмите еще раз", "success");
  bascketItem.push('SAMSUNG Galaxy Book Pro')
  let itemPcTwo = console.log(bascketItem.includes('SAMSUNG Galaxy Book Pro')); 
  if (itemPcTwo !== true) {
    let cardBascket = document.querySelector('.card-bascket6')
    cardBascket.classList.toggle('active')
  }
})

// let body = document.querySelector('.body')
// let bascket = document.getElementById('bascket')
// let btnCloseBascket = document.querySelector('.closeBascket')


// function openBascket() {
//   body.classList.toggle('bodyOverflow')
//   bascket.classList.toggle('bascket')
//   btnCloseBascket.classList.toggle('active')
// }

// function closeBascket() {
//   body.classList.remove('bodyOverflow')
//   bascket.classList.remove('bascket')
//   btnCloseBascket.classList.remove('active')
// }