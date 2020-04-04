class MyPosts {
  constructor() {
    this.init = () => {
      const id = Cookies.get("id");
      const name = Cookies.get("name");

      axios
        .get("/api/v1/users/id/userPosts", {
          params: {
            userId: id,
            userName: name
          }
        })
        .then(res => {
          post.showPost(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
}

const myPosts = new MyPosts();
myPosts.init();
