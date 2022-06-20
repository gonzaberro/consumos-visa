import React from "react";

export default function DataRow({expenses}){


    return <div className="month-content">
        <div className="data-row">
                    <span><b><h5>Local</h5></b></span>
                    <span><b><h4>Moneda</h4></b></span>
                    <span><b><h4>Precio</h4></b></span>
                    <span><b><h4>Nro Tarjeta</h4></b></span>
                    <span><b><h4>Fecha</h4></b></span>
                    <span><b><h4>Nro de Cuota</h4></b></span>
                </div>
        {expenses.map((expense)=> {

            return <div className="data-row">
                    <span>{expense.shop}</span>
                    <span> {expense.currency}</span>
                    <span> ${expense.price}</span>
                    <span>{expense.cardEnding}</span>
                    <span>{expense.date}</span>
                    <span>{expense.cuota}</span>
                </div>

        })}
    </div>

}