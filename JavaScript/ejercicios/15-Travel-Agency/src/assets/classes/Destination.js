class Destination {
    constructor(dest) {
        this.id = dest.id
        this.city = dest.city
        this.country = dest.country
        this.photo = dest.photo
        this.visited = dest.visited
        this.favorite = dest.favorite
        this.createMarkup()
        this.editButton = document.createElement('i')
        this.editButton.className = 'editIcon fa-solid fa-pen-to-square ml-auto cursor-pointer hover:scale-125 transition-transform'
        this.deleteButton = document.createElement('i')
        this.deleteButton.className = 'deleteIcon fa-solid fa-trash-can text-red-500 cursor-pointer ml-3 hover:scale-125 transition-transform'

    }
    createMarkup() {
        const destinationHTML = document.createElement('article')
        destinationHTML.className = 'destination bg-white shadow rounded p-2 relative'
        destinationHTML.innerHTML = `<img class="aspect-video object-cover" src="${this.photo}" alt="${this.city}, ${this.country}">
        <i class="favoriteIcon ${this.favorite ? 'fa-solid' : 'fa-regular'}  fa-heart text-red-700 absolute top-5 left-4 cursor-pointer text-xl hover:scale-125 transition-transform"></i>
        <div class="destInfo flex items-center mt-2">
            <h2 class="mr-3">${this.city}</h2>
            <h3 class="bg-blue-500 px-2 rounded text-white">${this.country}</h3>


        </div>
        `
        destinationHTML.querySelector('.destInfo').append(this.editButton, this.deleteButton)
        return destinationHTML
    }
    
}

export default Destination