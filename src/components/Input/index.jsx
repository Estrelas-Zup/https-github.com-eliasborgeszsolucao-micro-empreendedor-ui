import React from 'react';
import './style.css';

function Input() {
    return (
        <div>
            <form action="" className="input-caixa">
                <div>
                    <input className="input" name="caixa" type="text" />
                </div>
                <div className="btn-caixa">
                    <button className="btn-adicionar">Adicionar</button>
                    <button className="btn-consultar">Consultar</button>
                </div>
            </form>
        </div>
    );
}

export default Input;

