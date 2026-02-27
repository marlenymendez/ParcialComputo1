# Parcial Primer Cómputo

---

## 👩‍💻 Integrantes

- Mayerlin Yisel Aguilar Cruz - SMSS067424
- Marleny Jamilet Martinez Mendez - SMSS018924

---

## Situación Problemática

En muchas empresas pequeñas el cálculo del salario semanal de los trabajadores se realiza de forma manual, lo que puede generar errores al momento de sumar las horas normales y las horas extra. Además, en algunos casos los empleados no tienen claridad sobre cómo se calcula el pago adicional cuando realizan horas extra, especialmente cuando estas tienen diferentes recargos según el tipo de jornada.

Por esta razón se desarrolló una aplicación web que permite calcular el salario semanal de un trabajador de forma automática, diferenciando claramente las horas normales y las horas extra. El sistema muestra un desglose detallado del pago y realiza validaciones para evitar errores en el ingreso de datos, todo sin necesidad de recargar la página.

## Sector al que va dirigido

- Empresas pequeñas y medianas
- Departamento de Recursos Humanos
- Trabajadores que desean verificar su salario semanal

---

## ¿Qué valor agregado tiene el uso de WebComponents a su proyecto?

El uso de WebComponents agrega valor al proyecto porque permite organizar mejor el código mediante componentes reutilizables. Esto facilita el mantenimiento del sistema y hace que la estructura del formulario pueda reutilizarse en otros proyectos si fuera necesario. Además, contribuye a una mejor separación entre la estructura visual y la lógica del programa, lo que mejora la claridad y el orden del código.

---

## ¿De qué forma manipularon los datos sin recargar la página?

Los datos se manipularon utilizando JavaScript mediante el evento "submit" del formulario. Se utilizó el método preventDefault() para evitar que la página se recargue al enviar el formulario. Posteriormente se capturaron los valores ingresados por el usuario, se realizaron los cálculos correspondientes y se actualizó dinámicamente el contenido del DOM utilizando innerHTML para mostrar el resultado en pantalla.

---

## ¿De qué forma validaron las entradas de datos? Expliquen brevemente

Las validaciones se realizaron mediante estructuras condicionales en JavaScript. Primero se verificó que los campos numéricos no estuvieran vacíos utilizando isNaN(). Luego se comprobó que los valores ingresados no fueran negativos y que el salario por hora fuera mayor que cero. Además, se implementó una validación que obliga al usuario a seleccionar el tipo de jornada cuando se ingresan horas extra. Si alguna condición no se cumple, el sistema muestra un mensaje de error y no realiza el cálculo.

---

## ¿Cómo manejaría la escalabilidad futura en su página?

Para mejorar la escalabilidad futura del sistema, se podrían dividir aún más las funcionalidades en componentes independientes. También se podría implementar una base de datos para almacenar los registros de salarios calculados y permitir la generación de reportes. En caso de que el sistema creciera en complejidad, se podría migrar a un framework moderno como React o Vue para mejorar la gestión del estado y la organización del proyecto.
