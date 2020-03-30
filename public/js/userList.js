class Users {
  constructor() {}

  showUserOnList(arr) {
    this.array = arr;
    this.list = document.querySelector(".userlist__block");
    const fragment = document.createDocumentFragment();
    this.array.forEach(item => {
      fragment.append(this.createBlockUser(item));
    });
    this.list.append(fragment);
  }

  createBlockUser(item) {
    this.blockUser = document.createElement("div");
    const fragment = document.createDocumentFragment();
    const btn = document.createElement("button");
    btn.classList.add("viev-user-posts");
    btn.append("Viev posts");

    this.blockUser.classList.add("single-user");
    fragment.append(this.createNewUser(item));
    this.blockUser.append(fragment);
    this.blockUser.append(btn)
    return this.blockUser;
  }

  createNewUser(item) {
    this.newUser = document.createElement("span");
    this.newUser.append(item.name);
    this.newUser.classList.add("searched-user");
    return this.newUser;
  }

  myUsername() {
    this.userName = Cookies.get("name");
    this.userNameBlock = document.querySelector(".username");
    this.userNameBlock.append(this.userName);
  }
}

const users = new Users();
users.myUsername();