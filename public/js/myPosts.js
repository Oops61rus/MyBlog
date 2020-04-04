class MyPosts {
  constructor() {
    this.init = () => {
      const id = Cookies.get("id");

      axios
        .get(`/api/v1/users/${id}/posts`, {
          params: {
            userId: id,
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
