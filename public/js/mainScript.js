function Main() {
  this.listUsers = [];
  
  this.init = function() {
    let signUp = document.querySelector('.signUp__btn');
    signUp.addEventListener('click', this.checkPass.bind(this));
  }
}

Main.prototype = {
  addUser: function() {
    let user = new User(this.name, this.email, this.password);
    this.listUsers.push(user);
  },
  
  checkPass: function() {
    this.name = document.querySelector('#userName').value;
    this.email = document.querySelector('#userEmail').value;
    this.password = document.querySelector('#userPass').value;
    this.passwordConfirm = document.querySelector('.confirmPassword').value;
    if(this.password !== this.passwordConfirm || this.password == '' || this.passwordConfirm == '') {
      wrong.innerHTML = 'Passwords dont match!';
    }
  }
}

let mainScript = new Main();