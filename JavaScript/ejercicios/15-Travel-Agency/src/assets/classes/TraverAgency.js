import AlertTW from "../../helpers/AlertTW"
import Destination from "./Destination"
class TravelAgency {
    constructor() {
        this.allDestinations = []
        this.form = document.querySelector('.form')
        this.filters = document.querySelector('.filters')
        this.notFavorite = document.querySelector('.notFavorite')
        this.favorite = document.querySelector('.favorite')
        this.searchDestination = document.querySelector('.searchDestination')
        this.destinations = document.querySelector('.destinations')

        this.form.onsubmit = (e) => this.handleSubmit(e)
        this.getAllDestinations()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.checkvalues(this.form.city, this.form.country, this.form.photo)
        const city = this.form.city.value
        const country = this.form.country.value
        const photo = this.form.photo.value
        if (city === '' || country === '' || photo === '') {
            new AlertTW('No puedes dejar campos vacíos', 'bg-red-500').show()
        }
        this.addDestination(city, country, photo)
    }

    checkvalues(...inputs) {
        inputs.forEach((input) => {
            input.classList.toggle('ring', input.value.trim() === '')
            input.classList.toggle('ring-red-400', input.value.trim() === '')
        })
        return
    }

    async getAllDestinations() {
        try {
            const resp = await fetch('https://api-de-travels.herokuapp.com/destinations')
            const destinations = await resp.json()
            this.allDestinations = destinations.map((dest) => {
                const newDdest = new Destination(dest)
                newDdest.deleteButton.onclick = () => this.deleteDestination(dest.id)
                return newDdest
            })
            this.printDestinations()
        } catch (error) {
            console.log(error)
        }
    }

    printDestinations(array = this.allDestinations) {
        this.destinations.innerHTML = ''
        array.forEach((dest) => {
            this.destinations.append(dest.createMarkup())
        })
    }

    async addDestination(city, country, photo) {
        const newDest = {
            city: city,
            country: country,
            photo: photo,
            visited: false,
            favorite: false,
        }
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(newDest)
        }
        try {
            const response = await fetch('https://api-de-travels.herokuapp.com/destinations', postOptions)
            if (!response.ok) {
                new AlertTW('No se ha podido subir el objeto')
            }
            this.getAllDestinations()
        } catch (error) {
            console.error(error)
        }
    }

    deleteDestination(id) {
        fetch(`https://api-de-travels.herokuapp.com/destinations/${id}`, {method: 'DELETE'})
        .then((response) => {
            if (!response.ok) throw new Error('algo va ma')
            this.getAllDestinations()
        })
        .catch((error) => console.log(error))
    }

    changeFavorite(dest) {
        const newFavorite = {favorite: !dest.favorite}
        const patchOptions = {
            method: 'PATCH'
        }
        fetch(`https://api-de-travels.herokuapp.com/destinations/${id}`, patchOptions)
    }
}

export default TravelAgency