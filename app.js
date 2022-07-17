const formSetup = document.getElementById('form-setup')
const submitBtn = document.getElementById('submit-btn')
const formLayout = document.querySelector('.form-layout')
const cardContainer = document.querySelector('.card-container')
const input = document.querySelectorAll('input')
const libraryTitle = document.querySelector('h2')

formSetup.addEventListener('click', ()=>{
   formLayout.style.display='block';
   submitBtn.style.display='block';
   cardContainer.style.display ='block'
   libraryTitle.style.display = 'block'

})
//Adds all form data during onclick
submitBtn.addEventListener('click',createBook)

function BookObj (title,author,pages,readStatus){
   this.title= title;
   this.author = author;
   this.pages = pages;
   this.readStatus =readStatus;

}

let newBook = new BookObj();

function createBook(){
   newBook.title = bookform.title.value
   newBook.author = bookform.author.value
   newBook.pages = bookform.pages.value
   newBook.readStatus = bookform.readStatus.value 

      const bookCard = `
   <div class="card">
      <p>Title: ${newBook.title}</p>
      <p>Author: ${newBook.author}</p>
      <p>Pages: ${newBook.pages}</p>
      <p>Read Status: ${newBook.readStatus}</p>
</div>
`
//renders individual cards to the screen
cardContainer.innerHTML += bookCard;


//Clears input after click
input.forEach(input =>{
   input.value = ''
})


} // End createBook function
