# Consigna

Ver wireframe y recursos [acá](https://www.figma.com/file/4OQqIFoSMLRisjdBJY8F7w/CTD-FE2-CS8-Noticias?node-id=0%3A1)

Ver consigna completa [acá](https://drive.google.com/file/d/1K56tZusVNJvEiaXMQ9VKvvVwNRDwwnup/view)

## Requerimiento 1

El sitio debe estar previamente maquetado en un wireframe, pueden utilizar cualquier
herramienta para esto ( Figma / Adobe XD / Paint / etc). Incluso un dibujo en papel. El sitio debe
tener 3 secciones principales, un `header`, un `main` donde estarán las noticias y un `footer`.
Internamente en cada sección tienen libertad para la creación de sus componentes.

## Requerimiento 2

El html y el css deben reflejar lo estipulado en el boceto, los estilos pueden variar, pero el
wireframe y el resultado final no pueden ser 2 cosas distintas. Buscamos la coherencia entre lo
planificado y lo desarrollado, sino el primer requerimiento no tendría sentido.

## Requerimiento 3

La parte dinámica de nuestro sitio (la creación de cada tarjeta para las noticias) debe estar
basada en el listado JS brindado. Es un array de objetos que consta de 6 noticias. 
Si el array crece y contiene más noticias, el sitio debe poder
seguir respondiendo y funcionando correctamente.

## Requerimiento 4

En cuanto a lo visual, en el sitio se debe poder distinguir las noticias que son internacionales de
las nacionales. Para ello deberán crear alguna clase aplicable solamente a las noticias
internacionales(validar utilizando la propiedad del objeto que aclara esto) para que los usuarios
puedan identificar que las mismas no son exclusivas de Argentina.
