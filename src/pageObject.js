'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the' + this.header.logo; // usuń dodatkową spację
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(`${url}/${slug}`); // pełny URL przekazany do rodzica
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the' + this.commentButton; // usuń dodatkową spację
  }

  assertPageOpened() {
    return 'The ' + this.url + 'is opened'; // usuń spację przed 'is opened'
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
