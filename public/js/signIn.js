function SignIn() {
  this.init = function() {
    this.email = document.querySelector(".email");
    this.password = document.querySelector(".password");

    const signIn = document.querySelector(".signIn__btn");
    let self = this;

    signIn.addEventListener("click", function() {
      const isValid = self.checkUser();
      if (isValid) {
      }
    });
  };
}

SignIn.prototype = {
  checkUser: function() {
    const wrong = document.querySelector(".wrong");
    axios.post("http://localhost:3000/api/v1/signIn"),
      {
        email: this.email.value,
        password: this.password.value
      }
        .then()
        .catch(function(err) {
          console.log(err);
          const span = document.createElement("span");
          span.append(`${err} \n`);
          wrong.append(span);
          setTimeout(() => {
            wrong.removeChild(span);
          }, 3000);
        });
  }
};

const signIn = new SignIn();
signIn.init();
