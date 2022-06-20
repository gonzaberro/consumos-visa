import React from "react";
import DragDrop from "./DragDrop";

export default function Header({ setData }) {
	return (
		<>
			<DragDrop setData={setData} />
		</>
	);
}
