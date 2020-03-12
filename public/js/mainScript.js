function Main() {
  this.init = function() {
    this.name = document.querySelector('#userName');
    this.email = document.querySelector('#userEmail');
    this.password = document.querySelector('#userPass');
    this.passwordConfirm = document.querySelector('.confirmPassword');

    let signUp = document.querySelector('.signUp__btn');
    let self = this;

    signUp.addEventListener('click', function() {
      const isValid = self.checkPass();
      if (isValid) {
        self.addUser();
      }
    });
  }
}

Main.prototype = {
  addUser: function() {
    axios.post('http://localhost:3000/api/v1/signUp', {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  
  checkPass: function() {
    let wrong = document.querySelector('.wrong');
    if(this.password.value !== this.passwordConfirm.value || this.password.value == '' || this.passwordConfirm.value == '') {
      wrong.innerHTML = 'Passwords dont match!';
      return false
    } else {
      return true
    }
  }
}

let mainScript = new Main();
mainScript.init();