class FriendsPosts {
  constructor() {
    this.postsArray = [];

    this.init = () => {
      axios.get('/api/v1/users/friendsPosts')
      .then(res => {
        this.postsArray = [...res.data];
        post.showPost(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  cleanPostsList() {
    this.postsList = document.querySelector('.posts__list');
    while(this.postsList.lastChild) {
      this.postsList.removeChild(this.postsList.lastChild);
    }
  }
}