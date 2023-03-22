import React from 'react';

export default props => {
    const { n1, n2, aluno } = props;
    const media = (n1 + n2) / 2;
    const final = (Math.ceil(media));
    return (
        <div>
            <h2>Média Aluno</h2>
            <p> Nota referente a p1: <strong>{n1}</strong></p>
            <p> Nota referente a p2: <strong>{n2}</strong></p>
            <p> A média do aluno <strong>{aluno}</strong>, é: <strong>{final}</strong></p>
        </div>
    )
}