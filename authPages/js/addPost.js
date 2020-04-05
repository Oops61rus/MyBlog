class AddPost {
  constructor() {
    this.postTitle = document.querySelector(".post__name");
    this.postText = document.querySelector(".post__body");

    this.init = () => {
      this.sendPostBtn = document.querySelector(".send__post__btn");
      this.sendPostBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.getInputValues();
        this.newPost.userId = Cookies.get("id");
        this.newPost.date = this.getDateTime();
        this.cleanInputsValue();

        if (!this.newPost) {
          return false;
        }
        axios
          .post(`/api/v1/posts`, { ...this.newPost })
          .then((res) => {
            alert(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
  }

  getDateTime() {
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}`;
    return `Date: ${date} Time: ${time}`;
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
