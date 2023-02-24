//-------------- Book Class -----------------//

class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
      this.comments = [];
    }

    // Rendering comments on the the book
    renderComments() {
        const commentsUl = document.createElement('ul');
        commentsUl.classList.add('comments');
        for (const comment of this.comments) {
          const commentLi = document.createElement('li');
          commentLi.textContent = comment;
          commentsUl.appendChild(commentLi);
        }
        return commentsUl;
    }

    // Rendering the book 
    render() {
      const li = document.createElement("li");
      li.classList.add("book");
    
    // creating the comment button 
    const commentBtn = document.createElement('button');
    commentBtn.textContent = 'Comment';
    commentBtn.addEventListener('click', () => {
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.maxLength = 280;
      const sendBtn = document.createElement('button');
      sendBtn.textContent = 'Send';
      sendBtn.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment) {
          bookshelf.addComment(this.title, comment);
          app.innerHTML = '';
          app.append(bookshelf.render());
        }
      });
      li.appendChild(commentInput);
      li.appendChild(sendBtn);
    });
      li.innerHTML =
      `<p><strong>Title:</strong> ${this.title}</p>
      <p><strong>Author:</strong> ${this.author}</p>
      <p><strong>Subject:</strong> ${this.subject}</p>
      <p><strong>Language:</strong> ${this.language}</p>
    `;
    li.appendChild(commentBtn);
    li.appendChild(this.renderComments());

    return li;
    }
  }

  