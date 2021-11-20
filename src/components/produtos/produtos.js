import React, { useState } from 'react';
import { Component } from 'react';
import ProductCard from '../cards/cards';
import "./produtos.css";

export default class Produtos extends Component { 

    constructor(props) {
        super(props);
        this.state = {produtoLista: []};
    }

    onFalhaCarregamentoProdutos(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/produto")
        .then(response => response.json(), this.onFalhaCarregamentoProdutos)
        .then(json => this.setState({ produtoLista: json }), this.onFalhaCarregamentoProdutos);
    }

    render() {
        return (
            <section id="produtos">
                {
                    this.state.produtoLista.map(
                        function (produto) {
                            return <ProductCard produto={produto} />
                        },
                    )
                }
            </section>
        )
    }
}