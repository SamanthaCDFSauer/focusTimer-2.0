import state from './state.js'
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from './sounds.js'
import { updateDisplay } from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plus() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    const cincoMinutos = 5

    if(minutes + cincoMinutos <= 60) {
        minutes += cincoMinutos    
    }

    if(minutes + cincoMinutos >= 60){
        seconds = 0
    }

    updateDisplay(minutes, seconds)
}

export function minus() {
    let minutes = Number(el.minutes.textContent)
    const cincoMinutos = 5

    if(minutes - cincoMinutos >= 0) {
        minutes -= cincoMinutos
    }

    updateDisplay(minutes)
}


const forestButton = document.getElementById('forestButton')

forestButton.addEventListener('click', (event) => {
    if(state.isMuteForest) {
        forestButton.style.backgroundColor = '#02799D'
        sounds.forest.play()
        state.isMuteForest = false
    } else {
        forestButton.style.backgroundColor = '#E1E1E6'
        sounds.forest.pause()
        state.isMuteForest = true
    }
})


const cloudButton = document.getElementById('cloudButton')

cloudButton.addEventListener('click', (event) => {
    if(state.isMuteRain) {
        cloudButton.style.backgroundColor = '#02799D'
        sounds.rain.play()
        state.isMuteRain = false
    } else {
        cloudButton.style.backgroundColor = '#E1E1E6'
        sounds.rain.pause()
        state.isMuteRain = true
    }
})


const storeButton = document.getElementById('storeButton')

storeButton.addEventListener('click', (event) => {
    if(state.isMuteCoffeShop) {
        storeButton.style.backgroundColor = '#02799D'
        sounds.coffeShop.play()
        state.isMuteCoffeShop = false
    } else {
        storeButton.style.backgroundColor = '#E1E1E6'
        sounds.coffeShop.pause()
        state.isMuteCoffeShop = true
    }
})


const fireButton = document.getElementById('fireButton')

fireButton.addEventListener('click', (event) => {
    if(state.isMuteFireplace) {
        fireButton.style.backgroundColor = '#02799D'
        sounds.fireplace.play()
        state.isMuteFireplace = false
    } else {
        fireButton.style.backgroundColor = '#E1E1E6'
        sounds.fireplace.pause()
        state.isMuteFireplace = true
    }
})