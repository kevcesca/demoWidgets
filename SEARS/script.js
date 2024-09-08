// OPpciones para cada grupo
const servicios = {
    "ACLARACIÓN": ["Bonificación de CXF", "Fraudes", "Cheques Devueltos", "Traspaso de Pago", "Pagos Internet"],
    "CAJEROS SEARS": ["DUDAS Y/O COMENTARIOS", "EFECTIVO RETENIDO", "RECHAZO DE RETIRO", "TARJETA RETENIDA"],
    "LINEA DE CRÉDITO": ["Consulta de Saldo", "Traspaso CR a Reserva"],
    "SERVICIO": [
        "Transferencia a Aprobaciones", "Activación de NIP", "Cambios Demográficos", "Cancelación de Adicional",
        "Cancelación de Cuenta", "Carta Referencia", "Cliente RIP", "Directorio de tiendas",
        "Envío de Estados de Cuenta", "Envío de Placa", "Problemas Internet", "Queja de Servicio Tienda",
        "Registro de Adicional", "Reporte de Estados de Cuenta", "Status de Solicitud", "Tarjeta Robada",
        "Transferencia a Cobranza", "Transferencia a Promociones", "Transferencias a Seguros"
    ]
};

// Referencias a los elementos del DOM
const grupoSelect = document.getElementById("grupo");
const servicioSelect = document.getElementById("servicio");

// Función para actualizar las opciones del segundo dropdown
function updateServicios() {
    const selectedGrupo = grupoSelect.value;

    // Limpiar las opciones actuales del servicio
    servicioSelect.innerHTML = "";

    // Agregar las nuevas opciones
    servicios[selectedGrupo].forEach(function(servicio) {
        const option = document.createElement("option");
        option.text = servicio;
        option.value = servicio;
        servicioSelect.add(option);
    });
}

// Evento para cambiar el grupo
grupoSelect.addEventListener("change", updateServicios);

// Inicializa la lista de servicios la primera vez
window.onload = updateServicios;
