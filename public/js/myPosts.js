class MyPosts {
  constructor() {
    this.init = () => {
      this.addPostButton = document.querySelector(".add__post");
      this.myPostsButton = document.querySelector(".my__posts");
      this.allPostsButton = document.querySelector(".all__posts");
      this.userButton = document.querySelector(".username");

      this.addPostButton.addEventListener("click", () => {
        window.location = "/add-post";
      });
      this.myPostsButton.addEventListener("click", () => {
        window.location = "/my-posts";
      });
      this.allPostsButton.addEventListener("click", () => {
        window.location = "/all-posts";
      });
      this.userButton.addEventListener("click", () => {
        window.location = "/home";
      });

      const id = Cookies.get("id");
      const name = Cookies.get("name");

      axios
        .get("/api/v1/my-posts", {
          params: {
            userId: id,
            userName: name
          }
        })
        .then(res => {
          console.log(res)
          post.showPost(res.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
}

const myPosts = new MyPosts();
myPosts.init();
