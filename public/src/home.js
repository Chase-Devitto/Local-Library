// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  //loop through books, store each book title in an array and return the length of the array
  let totalBooksCount = books.map((book) => book.title);
  return totalBooksCount.length;
}

function getTotalAccountsCount(accounts) {
  //loop through accounts, store each account id in an array and return the length of the array
  let totalAccountsCount = accounts.map((account) => account.id);
  return totalAccountsCount.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowedCount = 0;
  //loop through books array
  for (let book in books) {
    //create an array of borrowed books for the current books
    let borrows = books[book].borrows;
    //loop through borrows array
    for (let borrow in borrows) {
      //check if the current book is checked out or not
      if (borrows[borrow].returned === false) {
        //if book is checked out add 1 to booksBorrowedCount
        booksBorrowedCount += 1;
      }
    }
  }
  return booksBorrowedCount;
}

function getMostCommonGenres(books) {
  //set mostCommonGenres equal to an empty array
  let mostCommonGenres = [];
  //set genres equal to an empty array
  let genres = [];
  //set uniqueGenres equal to an empty array
  let uniqueGenres = [];
  //loop through the array of books
  for (let book in books) {
    //push the value stored in the genre key of the current book to the genres array
    genres.push(books[book].genre);
    //setv uniqueGenres equal to a new set of only one of each genre that pushed to the genres array
    uniqueGenres = [...new Set(genres)];
  }
  //loop through the uniqueGenres array
  for (genre in uniqueGenres) {
    //create an empty object called objectToPush
    let objectToPush = {};
    //set a key called name in the objectToPush object equal to the current genre in the iteration
    objectToPush["name"] = uniqueGenres[genre];
    //set genreCount variable equal to 0
    let genreCount = 0;
    //loop through the books array
    for (let book in books) {
      //if the current genre is equal to the genre of the current book, add 1 to the genreCount variable
      if (uniqueGenres[genre] === books[book].genre) {
        genreCount += 1;
      }
    }
    //set a key called count in the objectToPush object equal to whatever number value is stored in genreCount variable
    objectToPush["count"] = genreCount;
    //add the objectToPush object to the mostCommonGenres array
    mostCommonGenres.push(objectToPush);
  }
  //sort the genres stored in mostCommonGenres array based on the value stored in the 'count' key from hoghest to lowest
  mostCommonGenres.sort((genre1, genre2) => genre2.count - genre1.count);
  //set sortedMostCommonGenres variable equal to an empty array
  let sortedMostCommonGenres = [];
  //set itemCount variable equal to 0
  let itemCount = 0;
  //loop through the mostCommonGenres array
  for (genre in mostCommonGenres) {
    //if itemCount variable is less than 5 push the current genre object in the mostCommonGenres array to sortedMostCommonGenres array and add 1 to itemCount variable otherwise break the loop
    if (itemCount < 5) {
      sortedMostCommonGenres.push(mostCommonGenres[genre]);
      itemCount += 1;
    } else break;
  }
  return sortedMostCommonGenres;
}

function getMostPopularBooks(books) {
  //set mostPopularBooks equal to an empty array
  let mostPopularBooks = [];
  //loop through books array
  for (let book in books) {
    //set objectToPush variable equal to an empty array
    let objectToPush = {};
    //set a key called 'name' in the objectToPush object equal to the title of the current book object
    objectToPush["name"] = books[book].title;
    //set the variable borrows equal to the borrows array in the current book object
    let borrows = books[book].borrows
    //set borrowsCount equal to 0
    let borrowsCount = 0;
    //loop through the borrows array and for each item in the array add 1 to the borrowsCount array
    for (let borrow in borrows) {
      borrowsCount += 1;
    }
    //set a key called 'count' in the objectToPush object equal to the number value stored in the borrowsCount variable
    objectToPush["count"] = borrowsCount;
    //add the objectToPush object to the mostPopularBooks array
    mostPopularBooks.push(objectToPush);
  }
  //sort the mostPopularBooks array based on the number value stored in the count key of each book object from highest to lowest
  mostPopularBooks.sort((book1, book2) => book2.count - book1.count);
  //set sortedMostPopularBooks equal to an empty array
  let sortedMostPopularBooks = [];
  //set itemCount variable equal to 0
  let itemCount = 0;
  //loop through the mostPopularBooks array
  for (let book in mostPopularBooks) {
    //if itemCount is less than 5, add the current book object to sortedMostPopularBooks array and add 1 to itemCount, otherwise break the loop
    if (itemCount < 5) {
      sortedMostPopularBooks.push(mostPopularBooks[book]);
      itemCount += 1;
    } else break;
  }
  return sortedMostPopularBooks;
}

function getMostPopularAuthors(books, authors) {
  //set mostPopularAuthors, uniqueAuthors and bookAuthors variables equal to an empty array
  let mostPopularAuthors = [];
  let uniqueAuthors = [];
  let bookAuthors = [];
  //loop through the array of authors
  for (let author in authors) {
    //loop through the array of books
    for (let book in books) {
      //if the current authors id is equal to the authorId key of the current book, add the current author object to the bookAuthors array and then set uniqueAuthors variable equal to an array of only unique authors stored in bookAuthors 
      if (authors[author].id === books[book].authorId) {
        bookAuthors.push(authors[author]);
        uniqueAuthors = [...new Set(bookAuthors)];
      }
    }
  }
  //loop through uniqueAuthors array
  for (let author in uniqueAuthors) {
    //set authorObject variable equal to the current author object
    let authorObject = uniqueAuthors[author];
    //set a key called 'borrows' in the authorObject object equal to an empty array
    authorObject["borrows"] = [];   
  }
  //loop through the array of books
  for (let book in books) {
    //loop through the array of uniqueAuthors
    for (let author in uniqueAuthors) {
      //if the 'authorId' key value in the current book is equal to the 'id' key value in the current author, loop through the array stored in the 'borrows' key of the current book and add the current borrow object to the 'borrows' key stored in the current author object
      if (books[book].authorId === uniqueAuthors[author].id) {
        for (let borrow in books[book].borrows) {
          uniqueAuthors[author].borrows.push(borrow);
        }
      }
    }
  }
  //loop through uniqueAuthors array
  for (let author in uniqueAuthors) {
    //set objectToPush variable equal to an empty object
    let objectToPush = {};
    //set a key called 'name' in the objectToPush object equal to the current author's full name 
    objectToPush["name"] = uniqueAuthors[author].name.first + " " + uniqueAuthors[author].name.last;
    //set borrows variable equal to the borrows array stored in the current author object
    let borrows = uniqueAuthors[author].borrows;
    //set borrowsCount variable equal to 0
    let borrowsCount = 0;
    //loop through the borrows array and add 1 to borrowsCount for each item in the array
    for (let borrow in borrows) {
      borrowsCount += 1;
    }
    //set a key called 'count' equal to the number value stored in the borrowsCount variable and then add the objectToPush object to the mostPopularAuthors array
    objectToPush["count"] = borrowsCount;
    mostPopularAuthors.push(objectToPush);
  }
  //sort the mostPopularAuthors array based on number value stored in the 'count' key of each author object from highest to lowest
  mostPopularAuthors.sort((author1, author2) => author2.count - author1.count);
  //set sortedMostPopularAuthors variable equal to an empty array
  let sortedMostPopularAuthors = [];
  //set itemCount equal to 0
  let itemCount = 0;
  //loop through the mostPopularAuthors array
  for (let author in mostPopularAuthors) {
    //if itemCount is less than 5, add the current author object in mostPopularAuthors to sortedMostPopularAuthors array and add 1 to the itemCount variable, otherwise break the loop
    if (itemCount < 5) {
      sortedMostPopularAuthors.push(mostPopularAuthors[author]);
      itemCount += 1;
    } else break;
  }
  return sortedMostPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
