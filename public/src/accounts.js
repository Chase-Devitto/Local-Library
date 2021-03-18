// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  //loop through accounts
  for (let account in accounts) {
    //if current account id in iteration is equal to the given id return the account
    if (accounts[account].id === id) return accounts[account];
  }
}

function sortAccountsByLastName(accounts) {
  //sort each account by last name in alphabetical order
  return accounts.sort((account1, account2) => account2.name.last < account1.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //set totalNumberOfBorrows variable equal to zero
  let totalNumberOfBorrows = 0;
  //loop through books array
  for (let book in books) {
    //set borrows variable eaqual to the borrows array of the current book in the iteration
    let borrows = books[book].borrows;
    //loop through the borrows array
    for (let borrow in borrows) {
      //if the account's id is equal to the id of the borrow id of the current iteration, add 1 to the totalNumberOfBorrows variable
      if (account.id === borrows[borrow].id) {
        totalNumberOfBorrows += 1;
      }
    }
  }
  //return totalNumberOfBBorrows variable
  return totalNumberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  //set booksPossessedByAccount variable equal to an empty array
  let booksPossessedByAccount = [];
  //loop through books array
  for (let book in books) {
    //loop through authors array
    for (let author in authors) {
      //if the author id of the current book equals the author id of the current author in the iteration set borrows equal to the borrows array of the current book
      if (books[book].authorId === authors[author].id) {
        let borrows = books[book].borrows;
        //loop through the borrows array
        for (let borrow in borrows) {
          //if the borrow id equals the given account's id and if the book isn't returned, create an object contining book id, title, genre, author id, author and borrows array
          if (borrows[borrow].id === account.id) {
            if (borrows[borrow].returned === false) {
              let objectToPush = {};
              objectToPush["id"] = books[book].id;
              objectToPush["title"] = books[book].title;
              objectToPush["genre"] = books[book].genre;
              objectToPush["authorId"] = books[book].authorId;
              objectToPush["author"] = authors[author];
              objectToPush["borrows"] = borrows;
              //push the newly created object into the booksPossessedByAccount array
              booksPossessedByAccount.push(objectToPush);
            }
          }
        }
      }
    }
  }
  //return booksPossessedByAccount array
  return booksPossessedByAccount;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
