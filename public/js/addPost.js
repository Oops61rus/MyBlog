class AddPost {
  constructor() {
    this.postTitle = document.querySelector(".post__name");
    this.postText = document.querySelector(".post__body");

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

      this.sendPostBtn = document.querySelector(".send__post__btn");
      this.sendPostBtn.addEventListener("click", e => {
        e.preventDefault();
        this.newPost = this.getInputValues();
        this.newPost.userId = Cookies.get("name"); // нужно не имя а id
        this.newPost.date = new Date().getTime();
        this.cleanInputsValue();

        if (!this.newPost) {
          return false;
        }
        axios
          .post("/api/v1/add-post", { ...this.newPost })
          .then(res => {
            // res.json("Post added");
            console.log("Ok");
            res.data;
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
