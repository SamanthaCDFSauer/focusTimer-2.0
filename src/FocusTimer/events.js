import { controls } from "./elements.js"
import * as actions from './actions.js'

export function timerControl() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)
}

export function soundsControls() {
    soundsControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}