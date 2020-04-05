function SignIn() {
  this.init = () => {
    this.email = document.querySelector(".email");
    this.password = document.querySelector(".password");
    this.form = document.querySelector(".signIn__block");
    const signIn = document.querySelector(".signIn__btn");

    signIn.addEventListener("click", () => {
      this.checkUser();
    });
    this.form.onkeyup = (e) => {
      if (e.key !== "Enter") return;
      this.checkUser();
    };
  };
}

SignIn.prototype = {
  checkUser: function () {
    const wrong = document.querySelector(".wrong");
    axios
      .post("http://localhost:3000/api/v1/signIn", {
        email: this.email.value,
        password: this.password.value,
      })
      .then((res) => {
        if (res.status === 200) {
          Cookies.set("name", res.data.name);
          Cookies.set("id", res.data.id);
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
        const span = document.createElement("span");
        span.append(`${err} \n`);
        wrong.append(span);
        setTimeout(() => {
          wrong.removeChild(span);
        }, 3000);
      });
  },
};

const signIn = new SignIn();
signIn.init();
