function App() {
  this.listUsers = [];
}

App.prototype = {
  
}

let newApp = new App();

document.querySelector('.signUp__btn').onclick = function () {
  let name = document.querySelector('#userName').value;
  let email = document.querySelector('#userEmail').value;
  let password = document.querySelector('#userPass').value;
}

