function SignUp() {
  this.init = function() {
    this.name = document.querySelector("#userName");
    this.email = document.querySelector("#userEmail");
    this.password = document.querySelector("#userPass");
    this.passwordConfirm = document.querySelector(".confirmPassword");

    const signUp = document.querySelector(".signUp__btn");
    let self = this;

    signUp.addEventListener("click", function() {
      const isValid = self.checkPass();
      if (isValid) {
        self.addUser();
      }
    });
  };
}

SignUp.prototype = {
  addUser: function() {
    const wrong = document.querySelector(".wrong");
    const success = document.querySelector(".success");
    axios
      .post("http://localhost:3000/api/v1/signUp", {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value
      })
      .then(function(response) {
        console.log("response ========", response);
        const span = document.createElement("span");
        span.append("Registration succsessfully!");
        success.append(span);
        setTimeout(() => {
          success.removeChild(span);
        }, 3000);
      })
      .catch(function(error) {
        console.log(error);
        const span = document.createElement("span");
        span.append(`Email is not unique \n ${error} \n`);
        wrong.append(span);
        setTimeout(() => {
          wrong.removeChild(span);
        }, 3000);
      });
  },

  checkPass: function() {
    const wrong = document.querySelector(".wrong");
    if (
      this.password.value !== this.passwordConfirm.value ||
      this.password.value == "" ||
      this.passwordConfirm.value == ""
    ) {
      const span = document.createElement("span");
      span.append("Passwords dont match! \n");
      wrong.append(span);
      setTimeout(() => {
        wrong.removeChild(span);
      }, 3000);
      return false;
    } else {
      return true;
    }
  }
};

let signUp = new SignUp();
signUp.init();
