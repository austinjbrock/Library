//Books will be stored in an array 
let myLibrary = [1,2,2,3,2,2,3];

const bookList = document.getElementById('bookList')

function Book(){

}


function addBookToLibrary(){

   for (let i = 0; i < myLibrary.length; i++) {
      const element = myLibrary[i];
      console.log(element)
   }


bookList.textContent = myLibrary

}

addBookToLibrary()