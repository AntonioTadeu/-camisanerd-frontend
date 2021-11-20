import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Header from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Produtos from "../../components/produtos/produtos";

export default class Home extends Component {

    render() {
        return (
            <article className="corpo">
                <Header />
                <section className="conteudo">
                    <Produtos />
                </section>
                <Footer />
            </article>
        )
    }
}