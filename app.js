let formSetup = document.getElementById('form-setup')
let submitBtn = document.getElementById('submit-btn')
let formLayout = document.querySelector('.form-layout')

formSetup.addEventListener('click', ()=>{
   formLayout.style.display='block';
   submitBtn.style.display='block';
})

submitBtn.addEventListener('click',createBook)



function BookObj (title,author,pages,readStatus){
   this.title= title;
   this.author = author;
   this.pages = pages;
   this.readStatus =readStatus;

}


let newBook = new BookObj();

function createBook(){
   newBook.title = bookform.title.value;
   newBook.author = bookform.author.value;
   newBook.pages = bookform.pages.value;
   newBook.readStatus = bookform.readStatus.value;


   console.log(newBook)

}

