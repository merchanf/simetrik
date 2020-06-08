Este proyecto fue creado con base en [Create React App](https://github.com/facebook/create-react-app). 

Para correr el proyecto solamente es necesario instalar las dependencias con `npm install` y luego se puede correr con `npm start`.

# Ejercicio 1

El archivo para este ejercicio se encuentra en la carpeta `src/script,js`, sin embargo, se muestra a continuación el código utilizado para resolver el problema.

``` Javascript
const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id']

const ul = document.querySelector('ul')

const setColumn = (column) => {
  return new Promise (resolve => setTimeout(() => {
    ul.innerHTML += `<li>${column}</li>`
    resolve();
  }, Math.random() * 5000))
}

async function showColumns() {
  for(let col = 0; col < columns.length; col++){
    await setColumn(columns[col]);
  }
}

showColumns();
```



# Ejercicio 2

Los componentes para este ejercicio son los siguientes:

  - **Board:** Componente padre encargado de la únión de los demás componentes.
    - **Select:** Componente que permite seleccionar uno o más Items.
    - **Draggable:** Contenedor del componente que permite que los items se puedan organizar a través del arrastre.
    - **Item:** Componente que puede ser arrastrado.

# Ejercicio 3

Para este ejercicio se usó la libreria [react-vis](https://uber.github.io/react-vis/) y los componentes creados son:

  - **BarChart:** Componente que grafica un diagrama de líneas.
  - **PieChart:** Componente que grafica un diagrama de torta.

# Ejercicio 4

### **1. ¿Porque no debería usar la libreria JQuery, si estoy usando ReactJS?**

El uso de Jquery se basa en la manipulación directa de componentes del DOM, mientras React lo hace a través del DOM virtual. Dado que la forma de manejo del DOM en ambas librerías es distina entrarían en conflicto si se usan al mismo tiempo, ya que no hay forma de que Jquery le comunique a react los cambios que hace en el dom y visceversa.

**2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?**

React hooks y en general los componentes funcionales de React hacen que el desarrollo de componentes sea más eficiente pues se desarrolla un componente en menos líneas de código, es más fácil de leer y mantener. Eso sin contar que react Hooks es la base de la nueva generación de funcionalidades de React lo que quiere decir que van a recibir mayor prioridad en cuanto a mejoras y desarrollos que los componentes de clase.

**3. ¿Que es un archivo JSX?**

Un archivo JSX, es un archivo de código javascript que a pesar de tener la misma estructura de un lenguaje de etiquetas le permite el uso de funcionalidades de Javascript, especialmente para uso conjunto con React.

**4. ¿Que diferencia hay entre una function y una arrow function de Javascript?**

Las funciones flecha son una sintaxis para creación de funciones disponible en ES6, lo que quiere decir que no está disponible para todos los navegadores a diferencia de la sintaxis tradicional. A pesar de varias diferencias que hay entre ambas sintaxis de declaración de funciones, la mayor diferencia sobre su par radica en el uso del contexto: una función flecha no tiene su propio contexto a diferencia de una función tradicional. Entre otras diferencias se puede destacar la no duplicación de argumentos en las funciones flecha y el acceso a los argumentos de la funcion a través de un arreglo que es posible en una función tradicional pero no en una función flecha.

**5. ¿Que es Redux y cómo nos ayuda en los proyectos?**

Redux es una liberia para la gestión de estados que a pesar que funciona con cualquier librería, tiene una alta sinergia con React. El uso de redux permite que el manejo de información en una aplicación se pueda manejar de forma sencilla, ya que en una aplicación con muchos componentes la transmisión de datos puede ser un dolor de cabeza si se realiza componente por componente. Redux minimiza este efecto creando un lugar central de datos accesible por cualquier componente sin comprometer la jerarquia o arquitectura de los componentes en la aplicación.

**6. ¿Que nos permite hacer la siguiente declaración?**

``` Javascript
const anyFunction = (param_1) => (param_2) => param_1 + param_2
```

Este tipo de funciones se llaman closures, son funciones que retornan funciones, y como en este ejemplo nos permiten almacenar el estado de la primera función. Es decir, para este ejemplo, si se llama a `anyFunction` con un valor constante por ejemplo, `let a = anyFunction(1)` y si se llama a la segunda función con valores como `a(1), a(2)` o ` a(3)` el resultado será 1 más lo que contenga el segundo argumento (o primer argumento de la segunda función). Esto quiere decir que la segunda función guardó el valor de 1 para si mismo durante todo el resto de su ejecución para la variable a, y así seguirá siendo a menos que se modifique ejecutando de nuevo a `anyFunction` con un argumento de diferente valor.
