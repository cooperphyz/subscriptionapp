// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbo:load", () => {
    const public_key = document.querySelector("meta[name='stripe-key']").getAttribute("content")
    const stripe = Stripe(public_key)

    const elements = stripe.elements()
    const card = elements.create('card')
    card.mount('#card-element')

    card.addEventListener("change", (event) => {
        var displayError = document.getElementById('card-errors')
        if (event.error) {
            displayError.textContent = event.error.message
        } else {
            displayError.textContent = ''
        }
    })
})

document.addEventListener("turbo:load", () => {
    const public_key = document.querySelector("meta[name='stripe-key']").getAttribute("content")
    const stripe = Stripe(public_key)

    const elements = stripe.elements()
    const card = elements.create('card')
    card.mount('#card-element')

    card.addEventListener("change", (event) => {
        var displayError = document.getElementById('card-errors')
        if (event.error) {
            displayError.textContent = event.error.message
        } else {
            displayError.textContent = ''
        }
    })
})