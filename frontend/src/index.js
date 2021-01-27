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
	
function displayInfo (book) {

	const infoContainer= document.getElementById("info-container") 

	let bookTitle= document.getElementById('book-title')
			bookTitle.innerText = book.title 

	let bookImage=document.getElementById('image')
			bookImage.src= book.image

	let bookAuthor=document.getElementById('book-author')
			bookAuthor.innerText= book.author

	let bookPages=document.createElement('h5')
			bookPages.className= 'book-details'
			bookPages.innerText= book.pages

		infoContainer.appendChild(bookPages)

}