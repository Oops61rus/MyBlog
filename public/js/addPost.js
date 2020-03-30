class AddPost {
  constructor() {
    this.postTitle = document.querySelector(".post-name");
    this.postText = document.querySelector(".post-body");

    this.init = () => {
      this.sendPostBtn = document.querySelector(".add-post");
      this.sendPostBtn.addEventListener("click", e => {
        e.preventDefault();
        this.newPost = this.getInputValues();
        this.newPost.date = new Date().getTime();
        this.cleanInputsValue();

        if (!this.newPost) {
          return false;
        }
        axios
          .post("/api/v1/add-post", { ...this.newPost })
          .then(res => {
            res.json("Post added");
          })
          .catch(err => {
            console.log(err);
          });
      });
    };
  }

  getInputValues() {
    this.newPost = {};

    this.titleValue = this.postTitle.value;
    this.textValue = this.postText.value;

    this.titleValue.replace(/\s/gu, "");
    this.textValue.replace(/\s/gu, "");

    if (this.titleValue && this.textValue) {
      this.newPost.title = this.titleValue;
      this.newPost.text = this.textValue;
      return this.newPost;
    } else {
      return null;
    }
  }

  cleanInputsValue() {
    this.postTitle.value = "";
    this.postText.value = "";
  }
}

const addPost = new AddPost();
addPost.init();
