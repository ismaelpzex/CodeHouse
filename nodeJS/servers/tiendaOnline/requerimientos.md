# Creación del CRUD de Productos

- GET /api/products
    - Recuperar todos los productos
    PRUEBAS:
    - Que el status de la respuesta sea 200 [X]
    - Que el contenido de la respuesta es un formato JSON
    - Que la respuesta sea un Array
    - Que los productos devueltos son un número concreto
- POST /api/products
    Crear un único producto
- PUT /api/products/IDPRODUCT
    Actualiza un producto a partir de su ID
- DELETE /api/products/IDPRODUCT