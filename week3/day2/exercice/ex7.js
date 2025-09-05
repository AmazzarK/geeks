const allBooks = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector('.listBooks');

allBooks.forEach(book => {
  const bookDiv = document.createElement('div');

  const bookDetails = document.createElement('p');
  bookDetails.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    bookDetails.style.color = 'red';
  }

  const bookImg = document.createElement('img');
  bookImg.src = book.image;
  bookImg.style.width = '100px';

  bookDiv.appendChild(bookDetails);
  bookDiv.appendChild(bookImg);
  section.appendChild(bookDiv);
});