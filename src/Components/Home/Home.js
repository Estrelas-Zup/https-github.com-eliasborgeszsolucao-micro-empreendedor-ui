import React from 'react'
import ProdutoGet from '../../api/endpoints/ProdutoGet';
import ProdutoPut from '../AlterarProduto/ProdutoPut';
import '../Home/Home.style.css';


function Home() {
    return (
        <div className="main">
            <ProdutoPut />
            <ProdutoGet />
        <div className="text-main">
            <h1>Sisger <span>Universe</span></h1>
            <h6>Uma ideía inteligente</h6>
        </div>
        <div className="container-3">
            <div className="box-1">
                <h1 className="text-title">O que oferecemos <br /> a você?</h1>
                <p className="text-title-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
           voluptas unde. Veniam iusto nesciunt id adipisci fuga beatae. Sapiente, nemo!</p>
            </div>
            <div className="box-1">
                <h1 className="text-title-second">Conheça a Sisger Universe!</h1>
                <p className="text-title-p-second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
           voluptas unde. Veniam iusto nesciunt id adipisci fuga beatae. Sapiente, nemo!</p>
                <div className="img-fluid">
                
                </div>

            </div>
        </div>

        <div className="container-2">
            <div className="box2">
                <h1 className="text-box-2">Lorem</h1>
                <p className="text-box-2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box2">
                <h1 className="text-box-2">Lorem</h1>
                <p className="text-box-2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box2">
                <h1 className="text-box-2">Lorem</h1>
                <p className="text-box-2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box2">
                <h1 className="text-box-2">Lorem</h1>
                <p className="text-box-2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
    )
}

export default Home
