document.querySelector('.signUp').onclick = function() {
  document.querySelector('.signUp__block').style.marginLeft = '-250px';
}

document.querySelector('.backToSingIn').onclick = function() {
  document.querySelector('.signUp__block').style.marginLeft = '0';
}