// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  //use the find() method to return the author if the given id matches the current author's id
  let findAuthorById = authors.find((author) => author.id === id);
  return findAuthorById;
}

function findBookById(books, id) {
  //use the find() method to return the book if the given id matches the current book's id 
  let findBookById = books.find((book) => book.id === id);
  return findBookById;
}

function partitionBooksByBorrowedStatus(books) {
  //set partitionBooksByBorrowedStatus equal to an empty array
  let partitionBooksByBorrowedStatus = [];
  //set borrowedBooks variable equal to an empty array
  let borrowedBooks = []
  //set booksNotBorrowed variable equal to an empty array
  let booksNotBorrowed = [];
  //loop through array of books
  for (let book in books) {
    //set borrowed variable equal to the borrows array of the current book
    let borrowed = books[book].borrows;
    //use some() method to loop through borrowed array and return true if any of the borrowed status's are false it will return true 
    let isBorrowed = borrowed.some((borrow) => borrow.returned === false);
    //if isBorrowed equals true, push the current book to borrowedBooks array, else push it to the booksNotBorrowed array
    if (isBorrowed === true) {
      borrowedBooks.push(books[book]);
    } else {
      booksNotBorrowed.push(books[book]);
    }
  }
  //push the borrowed and not borrowed books to the partitionBooksByBorrowedStatus array and return partitionBooksByBorrowedStatus
  partitionBooksByBorrowedStatus.push(borrowedBooks);
  partitionBooksByBorrowedStatus.push(booksNotBorrowed);
  return partitionBooksByBorrowedStatus;
}

function getBorrowersForBook(book, accounts) {
  //set borrowersForBook equal to an empty array
  let borrowersForBook = [];
  //initialize userInfoToPush variable 
  let userInfoToPush;
  //loop through accounts array
  for (let account in accounts) {
    //set borrowedStatus variable equal to the given book's borrows array
    let borrowedStatus = book.borrows;
    //loop through borrowedStatus array
    for (let borrowed in borrowedStatus) {
      //check if current accoun's id is equal to the current borrow object's id 
      if (accounts[account].id === borrowedStatus[borrowed].id) {
        //check if the current borrow object returned key is equal to true
        if (borrowedStatus[borrowed].returned === true) {
          //set userInfoToPush variable equal to  the current object in the borrowedStatus array
          userInfoToPush = borrowedStatus[borrowed];
          //push user info into borrowersForBook array
          borrowersForBook.push(userInfoToPush);
          //loop through borrowersForBook array
          for (let borrower in borrowersForBook) {
            //set current borrower equal to the current object in the borrowersForBook array
            let currentBorrower = borrowersForBook[borrower];
            //if the current account's id equals the current borrower's id
            if (accounts[account].id === currentBorrower.id) {
              //create all other object keys and values needed in current borrower's info
              currentBorrower["picture"] = accounts[account].picture;
              currentBorrower["age"] = accounts[account].age;
              currentBorrower["name"] = accounts[account].name;
              currentBorrower["company"] = accounts[account].company;
              currentBorrower["email"] = accounts[account].email;
              currentBorrower["registered"] = accounts[account].registered; 
            }
          }
        }
      } 
    }
  }
  //return borrowers for the given book
  return borrowersForBook;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
