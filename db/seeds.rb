# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all
Note.destroy_all

user1 = User.create(name: "Tim", email: "Tim@yahoo.com")
user2 = User.create(name: "Evan", email: "Evan@gmail.com")
user3 = User.create(name: "Jennifer", email: "Jennifer@gmail.com")

book1 = Book.create(user_id: user1.id, title: "The Hobbit", author: "J. R. R. Tolkien", pages: 310, summary: "Bunch of little dudes going on a long trip", image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg", read: true )
book1 = Book.create(user_id: user2.id, title: "The Hobbit", author: "J. R. R. Tolkien", pages: 310, summary: "Bunch of little dudes going on a long trip", image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg", read: true )
book2 = Book.create(user_id: user2.id, title: "The Thrill Of The Chase", author: "Forrest Fenn", pages: 147, summary: "Memoire", image: "https://images-na.ssl-images-amazon.com/images/I/41gEZpCA-bL._SX350_BO1,204,203,200_.jpg", read: true)
book2 = Book.create(user_id: user1.id, title: "The Thrill Of The Chase", author: "Forrest Fenn", pages: 147, summary: "Memoire", image: "https://images-na.ssl-images-amazon.com/images/I/41gEZpCA-bL._SX350_BO1,204,203,200_.jpg", read: true)
book3 = Book.create(user_id: user1.id, title: "The Three Muskateers", author: "Alexandre Dumas", pages: 700, summary: "Candy Bar", image: "https://images-production.bookshop.org/spree/images/attachments/1287745/original/9781643130408.jpg?1588209101", read: true)
book3 = Book.create(user_id: user2.id, title: "The Three Muskateers", author: "Alexandre Dumas", pages: 700, summary: "Candy Bar", image: "https://images-production.bookshop.org/spree/images/attachments/1287745/original/9781643130408.jpg?1588209101", read: true)
book4 = Book.create(user_id: user2.id, title: "Robin Hood", author: "Howard Pyle", pages: 192, summary: "Guy robbing from the rich to give to the poor yo!", image: "https://images-na.ssl-images-amazon.com/images/I/71CNx2vReYL.jpg", read: true)
book4 = Book.create(user_id: user1.id, title: "Robin Hood", author: "Howard Pyle", pages: 192, summary: "Guy robbing from the rich to give to the poor yo!", image: "https://images-na.ssl-images-amazon.com/images/I/71CNx2vReYL.jpg", read: true)

Note.create(user_id: user2.id, book_id: book2.id, comment: "I looked everywhere for that treasure chest")
Note.create(user_id: user1.id, book_id: book1.id, comment: "I love HOBBITS!!!!")
Note.create(user_id: user3.id, book_id: book3.id, comment: "I love that candy bar!!!!!")
Note.create(user_id: user2.id, book_id: book4.id, comment: "I need Money!")
