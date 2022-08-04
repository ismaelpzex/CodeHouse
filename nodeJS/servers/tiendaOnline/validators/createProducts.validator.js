module.exports = {
    name: {
        exists: true,
        errorMessage: 'El campo nombre es requerido',
        isLength: {
            options: {
                min: 3,
            },
            errorMessage: 'El campo debe de tener más de 3 carácteres'
        }
    },
    avaliable: {
        isBoolean: true,
        errorMessage: 'El campo avaliable ha de estar en true/faslse',
        custom: {
            options: (value) => value,
            errorMessage: 'Las insercciones deben de estar disponibles'
        },
    }
}