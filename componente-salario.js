class MiSalario extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <form id="formSalario">
                <input type="number" id="salarioBase" placeholder="Salario por hora ($)">
                <input type="number" id="horasTrabajadas" placeholder="Horas trabajadas">

                <label>Tipo de jornada:</label>
                <select id="tipoJornada">
                    <option value="">Seleccione una opción</option>
                    <option value="diurna">Diurna (25% extra)</option>
                    <option value="nocturna">Nocturna (50% extra)</option>
                </select>

                <button type="submit">Calcular Salario</button>

                <div class="resultado" id="resultado"></div>
            </form>
        `;
    }
}

customElements.define('mi-salario', MiSalario);