// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

const template = document.getElementById("content");

const createReadingList = (books) => {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".card");

  card.querySelector("h2").textContent = `${books.title} by ${books.author}`;
  card.querySelector("img").src = books.bookCoverImage;

  card.classList.add(books.alreadyRead ? "already-read" : "not-read");
 

  return fragment;
};

const bookCards = books.map(createReadingList);

document.body.append(...bookCards);