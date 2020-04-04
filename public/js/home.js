class Home {
  constructor() {
    this.usersArray = [];

    this.init = () => {
      this.searchButton = document.querySelector(".search__btn");
      this.searchButton.addEventListener("click", e => {
        e.preventDefault();
        this.clearUserList();

        this.searchingUser = this.getUserFromInput();
        this.activeUserId = Cookies.get("id");

        if (!this.searchingUser) {
          return false;
        } else {
          axios
            .get("/api/v1/users/search", {
              params: {
                requiredUser: this.searchingUser,
                activeUserId: this.activeUserId
              }
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

      this.changeStatusUser = (id, status) => {
        const idFollowing = parseInt(id);

        axios
          .get("/api/v1/users/search", {
            params: {
              followingId: idFollowing,
              status: status,
              activeUserId: this.activeUserId
            }
          })
          .then(() => {
            users.changeHeartsImg(id);
            this.changeFollowingStatus(id);
          })
          .catch(err => {
            console.log(err);
          });
      };
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

  changeFollowingStatus(id) {
    this.idNum = parseInt(id);
    this.usersArray.forEach(item => {
      if (item.id === this.idNum && item.following) {
        item.following = null;
      } else if (item.id === this.idNum) {
        item.following = this.idNum;
      }
    });
  }
}

const home = new Home();
home.init();
