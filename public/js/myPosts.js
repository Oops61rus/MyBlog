class MyPosts {
  constructor() {
    this.init = () => {
      axios
        .get("/api/v1/my-posts")
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
