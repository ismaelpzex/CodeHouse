
class AlertTW {// gflksgfdñk
  constructor (message, color, delay) {
    this.message = message || 'Error'
    this.color = color || 'bg-red-200'
    this.delay = delay || 3000
    this.alert = this.createAlertMarkup()
  }

  createAlertMarkup () {
    const alert = document.createElement('div')
    alert.className = `${this.color} absolute left-1/2 bottom-2 -translate-x-1/2 p-3 rounded text-xl text-center w-3/4`
    alert.innerHTML = this.message
    alert.style.zIndex = '1100'

    return alert
  }

  createAlertAnimation () {
    this.alert.animate([
      // { left: '-100%' },
      // { left: '50%', offset: 0.1 },
      // { left: '50%', offset: 0.9 },
      // { left: '-100%' }
      { opacity: 0 },
      { opacity: 1 }
    ], { duration: 500, easing: 'ease-in' })

    setTimeout(() => {
      const animationFadeOut = this.alert.animate([
        { opacity: 1 },
        { opacity: 0 }
      ], { duration: 500, easing: 'ease-out' })

      animationFadeOut.onfinish = () => this.alert.remove()
    }, this.delay)
  }

  show () {
    this.createAlertAnimation()
    document.body.append(this.alert)
  }
}

export default AlertTW
