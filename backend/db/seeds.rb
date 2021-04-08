# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.create(name: "Clementine von Radics", bio: "non-binary poet, mental health advocate, and educator living in brooklyn, new york. i am the author of three poetry collections, and create writing workshops designed to cultivate healing and self-love.")
Author.create(name: "Richard Siken", bio: "Richard Siken (born February 15, 1967) is an American poet, painter, and filmmaker. He is the author of the collection Crush (Yale University Press, 2005), which won the Yale Series of Younger Poets Competition in 2004. His second book of poems, \"War of the Foxes\", was released from Copper Canyon Press in 2015.")

Book.create(title: "Mouthful of Forevers", pages: 112, summary: "Clementine von Radics writes of love, loss, and the uncertainties and beauties of life with a ravishing poetic voice and piercing bravura that speak directly not only to the sensibility of her generation, but to anyone who has ever been young.", rating: 4, favorite: false, author_id: 1)
Book.create(title: "Dream Girl", pages: 76, summary: "Dream Girl is a reflection on girlhood by 24 year-old poet Clementine von Radics. The collection is about the ways idealization leads to dehumanization, perception versus reality, sexism, feminism, mania, love, and Oregon. Dream Girl features poems that have gone viral on tumblr and Button Poetry, as well as 30 new poems, and illustrations by the author. This book is the much-anticipated second collection by Clementine von Radics.", rating: 5, favorite: true, author_id: 1)

Book.create(title: "Crush", pages: 80, summary: "Richard Siken’s \"Crush\", selected as the 2004 winner of the Yale Younger Poets prize, is a powerful collection of poems driven by obsession and love. Siken writes with ferocity, and his reader hurtles unstoppably with him.", rating: 4, favorite: true, author_id: 2)