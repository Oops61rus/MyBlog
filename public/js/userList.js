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
    this.blockUser.classList.add("single-user");
    fragment.append(this.createNewUser(item));
    this.blockUser.append(fragment);
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