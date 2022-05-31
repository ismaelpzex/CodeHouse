class Crono {

    inicio = 0
    paro = 0
    segundos = 0
    interval = null

    arrancar() {
        if (this.inicio !== 0) return console.log('no puedes volver a arrancar')
        const start = Date.now()
        this.inicio = start
        this.interval = setInterval(() => {
            this.segundos += 0.01
            this.printar('#result')
        }, 10)
    }

    parar() {
        if (this.paro !== 0) return console.log('no puedes volver a parar')
        if (this.inicio === 0) return console.log('El crono no ha empezado')
        const stop = Date.now()
        this.paro = stop
        clearInterval(this.interval)
    }

    resetear() {
        if (this.inicio === 0 && this.paro === 0) return console.log('cronometro no activo')
        if (this.inicio === 0) return console.log('El crono no ha empezado')
        if (this.paro === 0) return console.log('el crono no ha terminado')
        this.inicio = 0
        this.paro = 0
        this.segundos = 0
        this.printar('#result')
    }

    collect() {
        this.segundos = ((this.paro - this.inicio) / 1000)
    }

    printar(id) {
        const box = document.querySelector(id)
        box.innerHTML = `${(boton.segundos).toFixed(2)}s`
    }
}

const boton = new Crono()

boton.printar('#result')

const btnInicio = document.querySelector('#inicio')
btnInicio.addEventListener('click', () => {
    boton.arrancar()
})

const btnParo = document.querySelector('#paro')
btnParo.addEventListener('click', () => {
    boton.parar()
    boton.collect()
    boton.printar('#result')
})

const btnReset = document.querySelector('#reset')
btnReset.addEventListener('click', () => {
    boton.resetear()
    boton.printar('#result')
})