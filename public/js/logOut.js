import Cookies from 'js-cookie';

export default class LogOut {
  constructor() {
    this.cookie = document.cookie;
    this.storage = window.localStorage;

    this.init = () => {
      this.logOutBtn = document.querySelector('.logOut');
      this.logOutBtn.addEventListener("click", () => {
        this.clearCookies();
        this.clearStorage();
        window.location = '/';
      });
    }
  }

  clearStorage() {
    this.storage.removeItem('accessToken', 'refreshToken');
  }

  clearCookies() {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
}