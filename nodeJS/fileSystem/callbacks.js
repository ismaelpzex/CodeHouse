function sumar(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 3000);
};

sumar(4, 5, (res) => {
    console.log(res);
});