import "./App.css"
import React from "react";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Aluno from './components/basicos/Aluno';
import Card from "./components/layout/Card";

export default () => (
    <div className="App">
        <h1>Fundamentos React - Cursando</h1>

        <div className="Cards">
            <Card titulo="06 | Par ou Ímpar" color="#556B2F">
                <ParOuImpar numero={21}> </ParOuImpar>
                <UsuarioInfo usuario={{}}/>
            </Card>
            <Card titulo="05 | Desafio Produtos" color="#5F9EA0">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="04 | Lista Alunos" color="#9932CC">
                <ListaAlunos> </ListaAlunos>
            </Card>
            <Card titulo="03 | Componente com Filhos" color="#4F4F4F">
                <Familia sobrenome='Tiburcio'>
                    <FamiliaMembro nome='Heloisa' />
                    <FamiliaMembro nome='Vinicius' />
                    <FamiliaMembro nome='Guilherme' />
                </Familia>
            </Card>
            <Card titulo="02 | Desafio Aleatório" color="#4B0082">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="01 | Nota Aluno" color="#6082B6">
                <Aluno n1={6} n2={5.59} aluno="Vinicius" />
            </Card>
        </div>

    </div >
);