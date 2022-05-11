const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O Homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const sumCategory = booksByCategory.length

console.log(`There is a total of ${sumCategory} categories`)
let sumBooks = 0
for (let i = 0; i < booksByCategory.length; i++) {
  console.log(`Total of books in the category: ${booksByCategory[i].category}`)
  sumBooks = booksByCategory[i].books.length
  console.log(sumBooks)
}

function authorCount() {
  let authorArray = []
  for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (authorArray.indexOf(booksByCategory[i].books[j].author) == -1) {
        authorArray.push(booksByCategory[i].books[j].author)
      }
    }
  }
  console.log(`There's ${authorArray.length} authors, ${authorArray.join(", ")}!`)
}
authorCount()

function augustoCuryBooks() {
  let augustoCuryArrayOfBooks = []
  for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (booksByCategory[i].books[j].author == 'Augusto Cury') {
        augustoCuryArrayOfBooks.push(booksByCategory[i].books[j].title)
      }
    }
  }
  console.log(`${augustoCuryArrayOfBooks.join(", ")} are books of August Cury!`)
}
augustoCuryBooks()

function booksOfAuthor(author) {
  let booksArray = []
  for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (booksByCategory[i].books[j].author == author) {
        booksArray.push(booksByCategory[i].books[j].title)
      }
    }
  }
  console.log(`${booksArray.join(", ")} are books of ${author}!`)
}

booksOfAuthor('Augusto Cury')