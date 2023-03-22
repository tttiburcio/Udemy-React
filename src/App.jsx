import "./App.css"
import React from "react";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Aluno from './components/basicos/Aluno';
import Card from "./components/layout/Card";

export default () => (
    <div className="App">
        <h1>Fundamentos React - Cursando</h1>

        <div className="Cards">
            <Card titulo="03 | Componente com Filhos" color="#088F8F">
                <Familia sobrenome='Tiburcio'>
                    <FamiliaMembro nome='Heloisa'/>
                    <FamiliaMembro nome='Vinicius'/>
                    <FamiliaMembro nome='Guilherme'/>
                </Familia>
        </Card>
        <Card titulo="02 | Desafio Aleatório" color="#00A36C">
            <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="01 | Nota Aluno" color="#6082B6">
            <Aluno n1={6} n2={5.59} aluno="Vinicius" />
        </Card>
    </div>

    </div >
);