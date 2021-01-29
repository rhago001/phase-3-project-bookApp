const URL = 'http://localhost:3000/users/4'
const bookURL ='http://localhost:3000/books'


document.addEventListener('DOMContentLoaded', () => {
  getBooks()
	//createButtons()
	createBook()
	
})

 function getBooks(){
	fetch(URL)
		.then(res => res.json())
		.then(userdata => renderUser(userdata))
		
		
}

const renderUser = (user) => {

		// let bookSpan=document.createElement('span')


		let headerUserName=document.getElementById('user-name')
				headerUserName.innerText= "Hi!  " + user.name

		let bookContainer= document.querySelector('#list')

				user.books.forEach( book => {
		let bookLi=document.createElement('li')
		bookLi.innerText= book.title

		bookLi.addEventListener('click', () => {
			displayInfo(book)
			
		})

		
		bookContainer.appendChild(bookLi)
	})

			

}
	
function displayInfo(book) {

	const infoContainer= document.getElementById("info-container")

	let bookTitle= document.getElementById('book-title')
			bookTitle.innerText = book.title 

	let bookImage=document.getElementById('image')
			bookImage.src= book.image

	let bookAuthor=document.getElementById('book-author')
			bookAuthor.innerText= `Written By: ${book.author}`

	let bookPages=document.getElementById('book-pages')
			bookPages.innerText= "Page count: " + book.pages

	let bookSummary=document.getElementById('book-summary')
			bookSummary.textContent = book.summary
			
			createButtons(book, infoContainer)
	



			let bookId = document.getElementById('bookId')
			bookId.value = book.id
	// debugger 
	
}

function createButtons(book, infoContainer){
const deleteBook=document.getElementById('delete-book')
			deleteBook.innerHTML = ""
			let deleteBtn= document.createElement('button')
			deleteBtn.textContent="Delete"

		deleteBtn.addEventListener('click', () => { 
			fetch(`${bookURL}/${book.id}`, {
				method: 'DELETE'
			}) 
			document.querySelector('#deleted-message').innerText = "This book has been deleted."
		
		})

		
		
		
		
		let editBtn= document.createElement('button')
		editBtn.textContent= "Edit Book"
		
		editBtn.addEventListener('click', (event) =>{
			console.log("am edit, clicked")


			
	let bookForm = document.getElementById('book-form')

  bookForm.title.value= book.title
  bookForm.author.value = book.author
  bookForm.pages.value = book.pages
  bookForm.summary.value = book.summary
  bookForm.image.value = book.image

			let editBook = {
				title: event.target.title.value,
				author: event.target.author.value,
				pages: event.target.pages.value,
				summary: event.target.summary.value,
				image: event.target.image.value,
				user_id: 4
			}
			
			
			let reqPack = {
				method: "PATCH",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(editBook)
			}
			
			//console.log(bookData)
			fetch(bookURL, reqPack)
			.then(response => response.json())
			.then(editedInfo => displayInfo(editedInfo))
		
			bookForm.reset()
			
		})
		deleteBook.append(deleteBtn, editBtn)
	}








function createBook() {

let bookForm = document.getElementById('book-form')
	bookForm.addEventListener('submit', (event) => {
		event.preventDefault()
		//console.log(event, "Clicked")

		let bookData = {
			
			title: event.target.title.value,
			author: event.target.author.value,
			pages: event.target.pages.value,
			summary: event.target.summary.value,
			image: event.target.image.value,
			user_id: 4
		}
		
		let reqPack = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(bookData)
		}

			//console.log(bookData)
		fetch(bookURL, reqPack)
		.then(response => response.json())
		.then(newBook => displayInfo(newBook))

	})
	bookForm.reset()

	}

