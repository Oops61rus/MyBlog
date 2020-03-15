function SignIn() {
  this.init = () => {
    this.email = document.querySelector(".email");
    this.password = document.querySelector(".password");
    const signIn = document.querySelector(".signIn__btn");
    
    signIn.addEventListener("click", () => {
      this.checkUser();
    });
  };
}

SignIn.prototype = {
  checkUser: function() {
    const wrong = document.querySelector(".wrong");
    axios.post("http://localhost:3000/api/v1/signIn", {
        email: this.email.value,
        password: this.password.value
      })
        .then(res => {
          if (res.status === 200) {
            window.location = "/mainPage";
          }
        })
        .catch(err => {
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
