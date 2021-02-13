## Casos de usuario

- Como usuario quiero tener la posibilidad de **crear una nueva nota** (vista *index*)
- Como usuario quiero poder **ver todas las notas que existan en mi base de datos** (vista *index*)
- Como usuario quiero poder **editar una nota** en un formulario (al hacer clic en el botoncito izquierdo al pie de cada nota deben renderizar la vista *detail* con los datos de la nota que quieren editar)
- Como usuario quiero poder **eliminar una nota** (al hacer clic en el botoncito derecho al pie de cada nota)

## Consignas

- Crear un **repositorio en GitHub** para realizar la entrega
- Crear un proyecto en **Express**
- Utilizar el HTML y trasladar todo a **EJS**
- Crear las **rutas** necesarias para:
    1. Mostrar una página principal (index.html)
    2. Mostrar el formulario de edición de una nota (detail.html)
    3. Guardar una nueva nota
    4. Editar una nota existente
    5. Eliminar una nota existente
- Crear un **controlador** con los métodos necesarios para hacer las acciones previamente detalladas
- Crear una base de datos con una tabla "notas" con las siguientes columnas:
    - id
    - titulo
    - texto
    - created_at
    - updated_at
    - deleted_at (paranoid)
- Utilizar **Sequelize** para conectar la base de datos con el proyecto
- Crear el modelo correspondiente para utilizar la tabla "notas"
