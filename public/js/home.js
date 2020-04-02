class Home {
  constructor() {
    this.usersArray = [];

    this.init = () => {
      this.searchButton = document.querySelector(".search__btn");
      this.searchButton.addEventListener("click", e => {
        e.preventDefault();
        this.clearUserList();

        this.searchingUser = this.getUserFromInput();

        if (!this.searchingUser) {
          return false;
        } else {
          axios
            .post("/api/v1/home", {
              user: this.searchingUser
            })
            .then(res => {
              this.usersArray = [...res.data];
              users.showUserOnList(this.usersArray);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    };
  }

  clearUserList() {
    this.usersList = document.querySelector(".userlist__block");
    while (this.usersList.lastChild) {
      this.usersList.removeChild(this.usersList.lastChild);
    }
  }

  getUserFromInput() {
    this.searchInput = document.querySelector(".search");
    this.value = this.searchInput.value.replace(/\s/gu, "");

    if (this.value !== "") {
      return this.searchInput.value;
    } else {
      return null;
    }
  }
}

const home = new Home();
home.init();
