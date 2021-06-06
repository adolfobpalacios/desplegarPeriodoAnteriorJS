$(document).ready(function () {
    function desplegarPeriodos() {
        let fechaActual = new Date(),
			fechaPeriodo,
			año,
			mes,
			arregloPeriodo = Array();
		for (let i = -1; i >= -12; i--) {
			fechaPeriodo = new Date(fechaActual.getFullYear(),fechaActual.getMonth() + i,1);
            año = fechaPeriodo.getFullYear();
            mes = ("0" + (fechaPeriodo.getMonth() + 1)).slice(-2)
            arregloPeriodo.push({
                periodo: año + '/' + mes
            });
        }
        arregloPeriodo.forEach(iterarPeriodos);

        arregloPeriodo.forEach(function(valor, indice) {
            let select = document.getElementById("listaPeriodos2");
            let opcion = document.createElement("option");
            opcion.value = indice;
            opcion.text = valor.periodo;
            select.appendChild(opcion);
        });
        
    }
    desplegarPeriodos();

    function iterarPeriodos(item, index) {
        var select = document.getElementById("listaPeriodos");
        var opcion = document.createElement("option");
        opcion.value= index;
        opcion.text = item.periodo;
        select.appendChild(opcion)
    }

});