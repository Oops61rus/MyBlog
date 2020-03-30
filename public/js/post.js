class Post {
  constructor() {}

  showPost() {
    this.postList = document.querySelector(".posts-list");
    const fragment = document.createDocumentFragment();
    fragment.append(this.createPostBlock(item));
    this.postList.append(fragment);
  }

  createPostBlock(item) {
    this.block = document.createElement("div");
    const fragment = document.createDocumentFragment();
    fragment.append(
      this.createPostTitle(item),
      this.createPostDate(),
      this.createPostText(item),
      this.createPostAuthor(item)
    );
    this.block.append(fragment);
    this.block.classList.add("single-post");
    return this.block;
  }

  createPostTitle(item) {
    this.postName = document.createElement("span");
    this.postName.classList.add("post-headline");
    this.postName.append(item.title);
    return this.postName;
  }

  createPostDate() {
    this.postDate = document.createElement("span");
    this.postDate.classList.add("post-date");
    this.postDate.append(Date.now());
    return this.postDate;
  }

  createPostText(item) {
    this.postText = document.createElement("p");
    this.postText.classList.add("post-text");
    this.postText.append(item.text);
    return this.postText;
  }

  createPostAuthor(item) {
    this.postAuthor = document.createElement("span");
    this.postAuthor.classList.add("post-author");
    this.postAuthor.append(item.author);
    return this.postAuthor;
  }
}

const post = new Post();
