import React from "react";

export default props => {
    const { min, max } = props;

    const desafio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>
                Valor Aleatório
            </h2>
            <p>N1: {min}</p>
            <p>N2: {max}</p>
            <p>O aleatório é: <strong>{desafio}</strong> </p>
        </div>
    )
}