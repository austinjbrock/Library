// //Books will be stored in an array 
 let myLibrary = [2,5,4,6,7];
// // const bookList = document.getElementById('bookList')

//display Form will be hidden until clicked
let displayFormBtn = document.getElementById('form-setup')
let form = document.getElementById('form')

//add to library Btn
let addToLib = document.createElement("button");
addToLib.innerHTML += "Add To Library";

//Brings up the form onclick
displayFormBtn.addEventListener('click',function() {
    form.classList.remove('form')
    document.body.appendChild(addToLib);
});

//adds book to current libraryArr
function addBookToLibrary(){

   for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);

   }
// bookList.textContent = myLibrary
}
addBookToLibrary()


function getFormData(){
   let title = document.getElementById('form-title')
   let author = document.getElementById('form-author')
   let pages = document.getElementById('form-pages')
   let isRead = document.getElementById('form-read')

   console.log(title.value)
   console.log(author)
   console.log(pages)
   console.log(isRead)
}


getFormData()