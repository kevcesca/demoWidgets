// Función para actualizar el segundo dropdown según la selección del primero
function updateServicios() {
    const grupo = document.getElementById("grupo").value;
    const servicioDropdown = document.getElementById("servicio");

    // Limpiar el dropdown de servicios
    servicioDropdown.innerHTML = "";

    // Crear las opciones de acuerdo al grupo seleccionado
    let opciones = [];

    switch (grupo) {
        case "servicio":
            opciones = [
                "Transferencia a Aprobaciones",
                "Activación de NIP",
                "Cambios Demográficos",
                "Cancelación de Adicional",
                "Cancelación de Cuenta",
                "Carta Referencia",
                "Cliente RIP",
                "Directorio de tiendas",
                "Envío de Estados de Cuenta",
                "Envío de Placa",
                "Problemas Internet",
                "Queja de Servicio Tienda",
                "Registro de Adicional",
                "Reporte de Estados de Cuenta",
                "Status de Solicitud",
                "Tarjeta Robada",
                "Transferencia a Cobranza",
                "Transferencia a Promociones",
                "Transferencias a Seguros"
            ];
            break;
        case "aclaracion":
            opciones = [
                "Bonificación de CXF",
                "Fraudes",
                "Cheques Devueltos",
                "Traspaso de Pago",
                "Traspaso de Venta",
                "Pagos Internet"
            ];
            break;
        case "lineaCredito":
            opciones = [
                "Consulta de Saldo",
                "Traspaso CR a Reserva"
            ];
            break;
        case "cajerosSanborns":
            opciones = [
                "DUDAS Y/O COMENTARIOS",
                "EFECTIVO RETENIDO",
                "RECHAZO DE RETIRO",
                "TARJETA RETENIDA"
            ];
            break;
        default:
            opciones = ["Seleccione un grupo"];
    }

    // Agregar las opciones al dropdown de servicio
    opciones.forEach(opcion => {
        const optionElement = document.createElement("option");
        optionElement.value = opcion;
        optionElement.textContent = opcion;
        servicioDropdown.appendChild(optionElement);
    });
}
