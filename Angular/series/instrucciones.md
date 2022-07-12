### APP SERIES

1 - ¿Componentes?
    - header
    - listaItems
    - card
    - vistaPersonaje
    - vistaSerie
        - reparto
        - temporadas
    - filtros

2 - Interfaces. ¿Cuántas entidades hay?
    personaje
    serie

3 - Servicios. Van enlazados con las interfaces, asi que casi siempre son los mismos.
    personajes
    series

4 - Rutas. Cuantas, formación de cada ruta. Rutas dinámicas o activas ¿Hay rutas hijas?.
    - "" -> "/series"
    - "series" componente ListaItemsComponent
    - "" -> "/personajes"
    - "personaje" componente ListaItemsComponent
    - "personaje/:idpersonaje" componente vistaPersonaje
    - "serie/:idseries" componente vistaSerie
        - "" componente reaprtoComponent
        - "reparto" componente repartoComponent
        - "temporadas" componente temporadasComponent
    - "canal/nombreCanal", coponente ListaItemsComponent
    - "**" componente c404

5 - Investigar como averiguar en angular en que ruta estática estoy en funcion de eso hacemos un condicional pidiendo a cada servicio el array de series o el de personajes
