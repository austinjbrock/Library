let formSetup = document.getElementById('form-setup')
let submitBtn = document.getElementById('submit-btn')
let formLayout = document.querySelector('.form-layout')
let cardContainer = document.querySelector('.card-container')

//create a card for the books variable to sit in. then render each time the button is clicked


formSetup.addEventListener('click', ()=>{
   formLayout.style.display='block';
   submitBtn.style.display='block';
   cardContainer.style.display ='block'

})

//Adds all form data during onclick
submitBtn.addEventListener('click',createBook)

//----Create a div-card with data each time the button is clicked
//--card will have a container around it, which will be responsive based on size


function BookObj (title,author,pages,readStatus){
   this.title= title;
   this.author = author;
   this.pages = pages;
   this.readStatus =readStatus;

}


let newBook = new BookObj();

function createBook(){
   let books = [
   newBook.title = bookform.title.value,
   newBook.author = bookform.author.value,
   newBook.pages = bookform.pages.value,
   newBook.readStatus = bookform.readStatus.value,
   ]
   
cardContainer.textContent += books



}

