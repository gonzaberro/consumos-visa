import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { readVisaFile } from "../utils/utils";
import svgDragDrop from "../svg/svgDragDrop.svg";
export default function DragDrop({ setData }) {
	const [fileName, setFileName] = useState(null);

	const onDrop = useCallback(
		acceptedFiles => {
			const file = acceptedFiles[0];
			if (file.type === "text/csv") {
				setFileName(file.name);
				readVisaFile(file, content => setData(content));
			}
		},
		[setData]
	);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<>
			<div {...getRootProps()} className="drag-drop">
				<div className="drag-drop-circle-1"></div>
				<div className="drag-drop-circle-2"></div>
				<div className="drag-drop-circle-3"></div>
				<div className="drag-drop-outline"></div>
				<input {...getInputProps()} />
				<img src={svgDragDrop} />
				{(fileName && <p>{fileName}</p>) || (
					<p>Arrastrá y soltá el archivo o hacé click para importarlo</p>
				)}
			</div>
			<div>
				<p className="selected-file">
					{fileName && `Archivo seleccionado: ${fileName}`}
				</p>
			</div>
		</>
	);
}
