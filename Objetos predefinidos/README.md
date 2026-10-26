# Exposición: Objetos predefinidos de JavaScript

## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se usa principalmente para agregar interactividad a las páginas web. Por ejemplo, permite mostrar mensajes, realizar cálculos, consultar la fecha y modificar el contenido de una página.

En esta exposición veremos 11 herramientas: `Number`, `Math`, `Boolean`, `Date`, intervalos de tiempo, `String`, `Location`, `Navigator`, `Document`, `Window` y `Frame`.

## 2. JavaScript puro y HTML

**JavaScript puro**, también llamado *Vanilla JavaScript*, significa usar JavaScript sin instalar librerías o frameworks adicionales.

- **HTML** organiza el contenido de la página.
- **JavaScript** realiza operaciones y puede cambiar el contenido.
- Algunas herramientas, como `Location`, `Navigator`, `Document`, `Window` y los `Frame`, pertenecen al entorno del navegador, no al núcleo del lenguaje ECMAScript.

## 3. Ejemplos de cada tema

### 1. Number

Sirve para convertir valores a números y trabajar con cantidades.

```javascript
let numero = Number("10");
console.log(numero + 5); // Muestra 15
```

### 2. Math

Incluye funciones matemáticas, como calcular una raíz cuadrada.

```javascript
let raiz = Math.sqrt(25);
console.log(raiz); // Muestra 5
```

### 3. Boolean

Representa un valor verdadero (`true`) o falso (`false`).

```javascript
let esMayor = Boolean(10 > 5);
console.log(esMayor); // Muestra true
```

### 4. Date

Permite consultar la fecha y la hora.

```javascript
let fecha = new Date();
console.log(fecha); // Muestra la fecha y hora actuales
```

### 5. Intervalos de tiempo

`setInterval()` repite una función cada cierto tiempo. El tiempo se indica en milisegundos; 2000 milisegundos equivalen a 2 segundos.