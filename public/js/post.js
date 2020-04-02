class Post {
  constructor() {}

  showPost(arr) {
    this.postList = document.querySelector(".posts__list");
    const fragment = document.createDocumentFragment();
    arr.forEach(item => {
      fragment.append(this.createPostBlock(item));
    });
    this.postList.append(fragment);
  }

  createPostBlock(item) {
    const fragment = document.createDocumentFragment();
    this.block = document.createElement("div");
    fragment.append(
      this.createPostTitle(item.title),
      this.createPostDate(item.date),
      this.createPostText(item.text),
      this.createPostAuthor(item.name)
    );
    this.block.append(fragment);
    this.block.classList.add("single__post");
    return this.block;
  }

  createPostTitle(item) {
    this.postName = document.createElement("span");
    this.postName.classList.add("post__headline");
    this.postName.append(item);
    return this.postName;
  }

  createPostDate(item) {
    this.postDate = document.createElement("span");
    this.postDate.classList.add("post__date");
    this.postDate.append(item); // как вернуть нужное время????
    return this.postDate;
  }

  createPostText(item) {
    this.postText = document.createElement("p");
    this.postText.classList.add("post__text");
    this.postText.append(item);
    return this.postText;
  }

  createPostAuthor(item) {
    this.postAuthor = document.createElement("span");
    this.postAuthor.classList.add("post__author");
    this.postAuthor.append(item);
    return this.postAuthor;
  }
}

const post = new Post();
