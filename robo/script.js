document.addEventListener('DOMContentLoaded', function () {
    const grupoDropdown = document.getElementById('grupo');
    const servicioDropdown = document.getElementById('servicio');

    // Opciones para cada grupo
    const opcionesServicios = {
        'SERVICIO': [
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
        ],
        'ACLARACIÓN': [
            "Bonificación de CXF",
            "Fraudes",
            "Cheques Devueltos",
            "Traspaso de Pago",
            "Traspaso de Venta",
            "Pagos Internet"
        ],
        'LINEA DE CRÉDITO': [
            "Consulta de Saldo",
            "Traspaso CR a Reserva"
        ],
        'CAJEROS SANBORNS': [
            "DUDAS Y/O COMENTARIOS",
            "EFECTIVO RETENIDO",
            "RECHAZO DE RETIRO",
            "TARJETA RETENIDA"
        ]
    };

    // Evento para cuando el usuario selecciona un grupo
    grupoDropdown.addEventListener('change', function () {
        const grupoSeleccionado = grupoDropdown.value;
        // Limpiar opciones anteriores
        servicioDropdown.innerHTML = '';

        // Agregar nuevas opciones basadas en el grupo seleccionado
        opcionesServicios[grupoSeleccionado].forEach(function (servicio) {
            const option = document.createElement('option');
            option.textContent = servicio;
            servicioDropdown.appendChild(option);
        });
    });

    // Simular el cambio inicial para cargar las opciones predeterminadas
    grupoDropdown.dispatchEvent(new Event('change'));
});
