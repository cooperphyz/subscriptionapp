# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Movie.create(title: "The Matrix", video_url: "secret")

Plan.create(name: "Small", stripe_id: "price_1KpyliJJqtNbhEBeHqEI1X2W", amount:1000, interval: "month")
Plan.create(name: "Large", stripe_id: "price_1KpynoJJqtNbhEBemcccswke", amount:10000, interval: "month")
Plan.create(name: "Small", stripe_id: "price_1KpymwJJqtNbhEBevbfJxuY1", amount:10000, interval: "year")
Plan.create(name: "Large", stripe_id: "price_1KpynbJJqtNbhEBehVmqHj7L", amount:100000, interval: "year")