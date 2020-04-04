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
    fragment.append(this.createNewUser(item), this.createHeart(item));
    this.blockUser.append(fragment);
    return this.blockUser;
  }

  createNewUser(item) {
    this.newUser = document.createElement("span");
    this.newUser.append(item.name);
    this.newUser.classList.add("searched-user");
    return this.newUser;
  }

  changeHeartsImg(id) {
    this.arrImg = Array.from(document.querySelectorAll('.img-heart'));
    this.img = this.arrImg.find(item => item.id === id);
    if(this.img.classList.contains('active')) {
      this.img.setAttribute('src', '/img/subscribe.svg');
    } else {
      this.img.setAttribute('src', '/img/unsubscribe.svg');
    }
  }

  createHeart(item) {
    const img = document.createElement('img');
    img.classList.add('img-heart');
    img.setAttribute('id', item.id);

    if(item.following) {
      img.classList.add('active');
      img.setAttribute('src', '/img/subscribe.svg');
    } else {
      img.setAttribute('src', '/img/unsubscribe.svg');
    }

    img.addEventListener('click', (e) => {
      if(img.classList.contains('active')) {
        img.classList.toggle('active');
        home.changeStatusUser(e.target.id, 'active');
      } else {
        img.classList.toggle('active');
        home.changeStatusUser(e.target.id, null);
      }
    });
    return img;
  }

  myUsername() {
    this.userName = Cookies.get("name");
    this.userNameBlock = document.querySelector(".username");
    this.userNameBlock.append(this.userName);
  }
}

const users = new Users();
users.myUsername();