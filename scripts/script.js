'use strict'
const rateBox = document.querySelector('.rate-box')
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const rateButtons = document.querySelectorAll('.rate');
const submitButton = document.querySelector('.btn-submit');
const rateShowBtn = document.querySelector('.selection-btn')

// document.querySelector('.rate').addEventListener('click', function(){
//     document.querySelector('.btn').style.backgroundColor = '#fff'
//     document.querySelector('.btn').style.color = '#e27c00'
// })
rateButtons.forEach((button,index) => {
  button.addEventListener('click', () => {
    rateShowBtn.textContent = `You selected ${index+1} out of 5`;
    button.style.backgroundColor = '#fff';
    button.style.color = '#e27c00';
    document.querySelector('.btn-submit').style.backgroundColor = '#fff'
    document.querySelector('.btn-submit').style.color = '#e27c00'
  });
})
submitButton.addEventListener('click', () => {
    message.classList.remove('hidden')
    rateBox.classList.add('hidden')
})
overlay.addEventListener('click', () => {
    rateBox.classList.add('hidden')
    message.classList.remove('hidden')
    console.log('clicked')
})