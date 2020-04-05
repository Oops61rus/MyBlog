class FriendsPosts {
  constructor() {
    this.postsArray = [];

    const id = Cookies.get("id");

    this.init = () => {
      axios
        .get("/api/v1/posts/friends", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.postsArray = [...res.data];
          post.showPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  cleanPostsList() {
    this.postsList = document.querySelector(".posts__list");
    while (this.postsList.lastChild) {
      this.postsList.removeChild(this.postsList.lastChild);
    }
  }
}

const friendsPosts = new FriendsPosts();
friendsPosts.init();
