import './js/api';
import './js/render-functions';
import './js/themechange';
import './js/mob-menu';

// const allBooks = [
//   { title: 'Книга 1', category: 'Пригоди' },
//   { title: 'Книга 2', category: 'Фантастика' },
//   { title: 'Книга 3', category: 'Романи' },
//   { title: 'Книга 4', category: 'Пригоди' },
// ];

// const booksList = document.getElementById('booksList');
// const categoryLinks = document.querySelectorAll('.category'); // Отримуємо всі посилання категорій
// const allBooksLink = document.getElementById('allBooks'); // Отримуємо посилання на "Всі книги"

// function displayBooks(books) {
//   booksList.innerHTML = '';

//   books.forEach(book => {
//     const bookItem = document.createElement('div');
//     bookItem.textContent = book.title;
//     booksList.appendChild(bookItem);
//   });
// }

// // Функція для відображення книг конкретної категорії
// function displayBooksByCategory(event) {
//   event.preventDefault(); // Зупиняємо дію переходу за посиланням
//   const category = this.textContent; // Отримуємо текст категорії
//   const booksInCategory = allBooks.filter(book => book.category === category); // Фільтруємо книги за категорією
//   displayBooks(booksInCategory); // Відображаємо книги конкретної категорії
// }

// // Функція для відображення всіх книг
// function displayAllBooks(event) {
//   event.preventDefault(); // Зупиняємо дію переходу за посиланням
//   displayBooks(allBooks); // Відображаємо всі книги
// }

// // Додаємо прослуховувач подій для кожної категорії
// categoryLinks.forEach(categoryLink => {
//   categoryLink.addEventListener('click', displayBooksByCategory);
// });

// // Додаємо прослуховувач подій для "Всі книги"
// allBooksLink.addEventListener('click', displayAllBooks);

// // Відображення всіх книг при завантаженні сторінки
// displayBooks(allBooks);
