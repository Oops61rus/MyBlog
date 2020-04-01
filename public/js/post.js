class Post {
  constructor() {}

  showPost(item) {
    this.postList = document.querySelector(".posts__list");
    const fragment = document.createDocumentFragment();
    fragment.append(this.createPostBlock(item));
    this.postList.append(fragment);
  }

  createPostBlock(item) {
    this.block = document.createElement("div");
    const fragment = document.createDocumentFragment();
    fragment.append(
      this.createPostTitle(item),
      this.createPostDate(item),
      this.createPostText(item),
      this.createPostAuthor(item)
    );
    this.block.append(fragment);        // как отобразить все посты, а не один
    this.block.classList.add("single__post");
    return this.block;
  }

  createPostTitle(item) {
    this.postName = document.createElement("span");
    this.postName.classList.add("post__headline");
    this.postName.append(item.title);
    return this.postName;
  }

  createPostDate(item) {
    this.postDate = document.createElement("span");
    this.postDate.classList.add("post__date");
    this.postDate.append("Post time:");
    this.postDate.append(Date.parse(item.date)); // как вернуть нужное время????
    return this.postDate;
  }

  createPostText(item) {
    this.postText = document.createElement("p");
    this.postText.classList.add("post__text");
    this.postText.append(item.text);
    return this.postText;
  }

  createPostAuthor(item) {
    this.postAuthor = document.createElement("span");
    this.postAuthor.classList.add("post__author");
    this.postAuthor.append(item.name);
    return this.postAuthor;
  }
}

const post = new Post();
