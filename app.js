document.getElementById("formSalario").addEventListener("submit", function(event) {

    event.preventDefault();

    const salarioBase = parseFloat(document.getElementById("salarioBase").value);
    const horasNormales = parseFloat(document.getElementById("horasNormales").value);
    const horasExtra = parseFloat(document.getElementById("horasExtra").value);
    const tipoJornada = document.getElementById("tipoJornada").value;
    const resultado = document.getElementById("resultado");

    // Validaciones
    if (isNaN(salarioBase) || isNaN(horasNormales) || isNaN(horasExtra)) {
        resultado.innerHTML = "<span style='color:red;'>Complete todos los campos correctamente.</span>";
        return;
    }

    if (salarioBase <= 0 || horasNormales < 0 || horasExtra < 0) {
        resultado.innerHTML = "<span style='color:red;'>Los valores no pueden ser negativos.</span>";
        return;
    }

    if (horasExtra > 0 && tipoJornada === "") {
        resultado.innerHTML = "<span style='color:red;'>Seleccione el tipo de jornada para las horas extra.</span>";
        return;
    }

    // Cálculo pago normal
    const pagoNormal = salarioBase * horasNormales;

    // Cálculo pago extra
    let pagoExtra = 0;

    if (horasExtra > 0) {
        const multiplicador = tipoJornada === "diurna" ? 1.25 : 1.50;
        pagoExtra = horasExtra * (salarioBase * multiplicador);
    }

    const salarioTotal = pagoNormal + pagoExtra;

    resultado.innerHTML = `
        <strong>Resumen del Pago Semanal:</strong><br><br>
        Salario por hora: $${salarioBase.toFixed(2)}<br><br>
        Horas normales trabajadas: ${horasNormales} hrs<br>
        Pago por horas normales: $${pagoNormal.toFixed(2)}<br><br>
        Horas extra trabajadas: ${horasExtra} hrs<br>
        Pago por horas extra: $${pagoExtra.toFixed(2)}<br><br>
        <strong>Total semanal a recibir: $${salarioTotal.toFixed(2)}</strong>
    `;
});