import React, { useMemo } from "react";
import { groupData } from "../utils/utils";
import {
	CAccordion,
	CAccordionItem,
	CAccordionBody,
	CAccordionHeader,
} from "@coreui/react";
import DataRow from "./DataRow";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function DataDisplay({ fileContent }) {
	const groupedData = useMemo(() => {
		return fileContent.length > 0 ? groupData(fileContent) : [];
	}, [fileContent]);

	const keys = fileContent.length > 0 ? Object.keys(groupedData) : [];

	const monthTotal = expenses => {
		if (expenses.length === 0) {
			return "";
		}

		const dolarExpenses = expenses
			.filter(expense => expense.currency === "Dolares")
			.reduce((a, b) => a + b.price, 0);
		const pesosExpenses = expenses
			.filter(expense => expense.currency === "Pesos")
			.reduce((a, b) => a + b.price, 0);

		if (dolarExpenses > 0) {
			return (
				"USD $" +
				dolarExpenses.toFixed(2) +
				" | ARS $" +
				pesosExpenses.toFixed(2)
			);
		}
		return "ARS $" + pesosExpenses.toFixed(2);
	};

	return (
		<div className="data-display">
			<CAccordion className="accordion-container" flush>
				{keys.map((key, index) => {
					return (
						<CAccordionItem itemKey={key} className="accordion-item">
							<CAccordionHeader className="accordion-background">
								<div className="header-accordion">
									<span>
										<b>{key}</b>
									</span>
									<span className="price-label">
										<b>{monthTotal(groupedData[key])}</b>
									</span>
								</div>
							</CAccordionHeader>
							<CAccordionBody className="accordion-body">
								<DataRow expenses={groupedData[key]} />
							</CAccordionBody>
						</CAccordionItem>
					);
				})}
			</CAccordion>
		</div>
	);
}
