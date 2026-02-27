document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("formSalario");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const salarioBase = parseFloat(document.getElementById("salarioBase").value);
        const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
        const tipoJornada = document.getElementById("tipoJornada").value;
        const resultado = document.getElementById("resultado");

        // Validaciones
        if (isNaN(salarioBase) || isNaN(horasTrabajadas) || tipoJornada === "") {
            resultado.textContent = "Por favor complete todos los campos correctamente.";
            resultado.style.color = "red";
            return;
        }

        if (salarioBase <= 0 || horasTrabajadas <= 0) {
            resultado.textContent = "Los valores deben ser mayores que cero.";
            resultado.style.color = "red";
            return;
        }

        let salarioNormal = salarioBase * 40;
        let horasExtra = 0;
        let pagoExtra = 0;

        if (horasTrabajadas > 40) {
            horasExtra = horasTrabajadas - 40;

            if (tipoJornada === "diurna") {
                pagoExtra = horasExtra * (salarioBase * 1.25);
            } else {
                pagoExtra = horasExtra * (salarioBase * 1.50);
            }
        }

        let salarioTotal = salarioNormal + pagoExtra;

        resultado.textContent = `El salario total es: $${salarioTotal.toFixed(2)}`;
        resultado.style.color = "green";
    });

});