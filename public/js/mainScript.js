function Main() {
  this.listUsers = [];
  
  this.init = function() {
    let signUp = document.querySelector('.signUp__btn');
    signUp.addEventListener('click', this.checkPass.bind(this));
    this.name = document.querySelector('#userName');
    this.email = document.querySelector('#userEmail');
    this.password = document.querySelector('#userPass');
    this.passwordConfirm = document.querySelector('.confirmPassword');
  }
}

Main.prototype = {
  addUser: function() {
    let user = new User(this.name, this.email, this.password);
    this.listUsers.push(user);
  },
  
  checkPass: function() {
    if(this.password.value !== this.passwordConfirm.value || this.password.value == '' || this.passwordConfirm.value == '') {
      wrong.innerHTML = 'Passwords dont match!';
    }
  }
}

let mainScript = new Main();