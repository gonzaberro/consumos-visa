import React from "react";
import DragDrop from "./DragDrop";

export default function Header({ setData }) {
	return (
		<div className="information">
			<h1>
				Está aplicación procesa el archivo generado desde la página{" "}
				<a
					target="_blank"
					href="https://visahome.prismamediosdepago.com/socios/login?windowId=eae"
				>
					Visa Home
				</a>{" "}
				para poder conocer los consumos del mes actual y de los meses próximos
			</h1>
			<h1>1. Debe ingresar a Visa Home</h1>
			<h1>2. Seleccionar la tarjeta</h1>
			<h1>3. Ingresar en "Últimos Movimientos"</h1>
			<h1>4. Apretar el botón "Descargar Información"</h1>
			<h1>5. Importar el archivo .csv dentro del sistema</h1>
		</div>
	);
}
