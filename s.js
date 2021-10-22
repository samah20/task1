
let books = [
    {
        title: 'Politics of Opportunism',
        author: 'R P N Singh',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Malayalam poetry',
        author: 'Akkitham Achuthan Namboodri',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'The Testaments',
        author: 'Margaret Atwood',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Celestial Bodies',
        author: 'Jokha Alharthi',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Cheque book',
        author: 'Vasdev Mohi',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'The Braille edition of the book Exam Warriors',
        author: 'PM Narendra Modi',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'today Ill speak',
        author: 'soran mohd',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Mind-Master',
        author: 'Viswanathan Anand and Susan Ninan',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Hemant Karkare: A Daughter’s Memoir',
        author: 'Hemant Karkares daughter Jui Karkare',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
    {
        title: 'Courts of India',
        author: 'soran mohd',
        image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
    },
];

//

for (let i in books) {
    addToLibrary(books[i]);
}



let submit = document.getElementById('submit');



submit.addEventListener('click', function (e) {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let image = document.getElementById('image');
    let new_book = {
        title: '',
        author: '',
        image:''
    };
    new_book.title = title.value;
    new_book.author = author.value;
    new_book.image = image.value;
    console.log(image.value);
    books.push(new_book);

    addToLibrary(new_book);
});
function addToLibrary(book) {
    let library = document.querySelector('.library');
    library.innerHTML += `
       <div class="book">
            <img src="${book.image}" alt="images" class="book-image">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">${book.author}</h5>
        </div>
    `
}