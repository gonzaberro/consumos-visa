import React, { useState } from "react";
import Header from "./Header";
import DataDisplay from "./DataDisplay";
import Information from "./Information";
import "./styles.css";

export default function Home() {
	const [fileContent, setFileContent] = useState([]);

	return (
		<>
			<div className="header-app">
				<Header setData={data => setFileContent(data)} />
			</div>

			<div className="data-content">
				{fileContent.length > 0 && <DataDisplay fileContent={fileContent} />}
				{fileContent.length === 0 && <Information />}
			</div>
		</>
	);
}
