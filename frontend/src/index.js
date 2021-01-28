// console.log("We're in!")

const URL = 'http://localhost:3000/users/4'

document.addEventListener('DOMContentLoaded', () => {
  getBooks()

})

 function getBooks(){
	fetch(URL)
		.then(res => res.json())
		.then(userdata => renderUser(userdata))
		
}

const renderUser = (user) => {

		// console.log(user)
		// let bookSpan=document.createElement('span')
		
		let bookContainer= document.querySelector('#list')

				user.books.forEach( book => {
		let bookLi=document.createElement('li')
		bookLi.innerText= book.title

		bookLi.addEventListener('click', () => {
			displayInfo(book)

		})
	// bookSpan.appenChild(bookLi)	
					bookContainer.appendChild(bookLi)
			})


			

}
	
function displayInfo (book) {

	const infoContainer= document.getElementById("info-container") 

	let bookTitle= document.getElementById('book-title')
			bookTitle.innerText = book.title 

	let bookImage=document.getElementById('image')
			bookImage.src= book.image

	let bookAuthor=document.getElementById('book-author')
			bookAuthor.innerText= `Written By: ${book.author}`

	let bookPages=document.getElementById('book-pages')
			bookPages.innerText= "Page count: " + book.pages

		// infoContainer.appendChild(bookPages)
	let bookSummary=document.getElementById('book-summary')
			bookSummary.textContent = book.summary

}