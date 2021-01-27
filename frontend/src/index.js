// console.log("We're in!")

const URL = 'http://localhost:3000/users/2'

document.addEventListener('DOMContentLoaded', () => {
 console.log('we r in')
  getBooks()

})

 getBooks = () => {
	fetch(URL)
		.then(res => res.json())
		.then(data => console.log(data))
		
	
}
	