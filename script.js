const bookList = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : [];

console.log(bookList);

const addBook = (e) => {
    e.preventDefault();

    let book = {
        id: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
    }
    if (book.id && book.title && book.author) {
        bookList.push(book);
    }
    document.querySelector('form').reset();

    localStorage.setItem('book', JSON.stringify(bookList));
    document.location.reload();
}

bookList.forEach((element, e) => {
    const allBooks = document.querySelector('.all-books');
    const book = document.createElement('div');
    book.classList = 'book-style';

    book.innerHTML = `
    
    <h2 class="title">${bookList[e].title}</h2>
    <p class="author">${bookList[e].author}</p>
    <button class="remove">Remove</button>
    <hr />
    `;
    allBooks.append(book);
    
});

function activateDelete() {
    let remove = document.querySelectorAll('.remove');
    remove.forEach((btn, i) => {
        btn.addEventListener('click', () => { deleteBook(i) })
               
    })
}

//filter function
function deleteBook(i) {
    bookList.splice(i, 1);
    localStorage.setItem('book', JSON.stringify(bookList));
    document.location();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBook);
    activateDelete();
})
