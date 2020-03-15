function Storage() {
  this.token = JSON.parse(localStorage.getItem("token"));

  this.getToken = function() {
    return this.token;
  };

  this.setToken = function(data) {
    localStorage.setItem(this.token, JSON.stringify(data));
  };
}

const storage = new Storage();
