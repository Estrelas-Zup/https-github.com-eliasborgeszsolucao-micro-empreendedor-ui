import React from 'react'
import TokenPost from './endpoints/TokenPost'
import ProdutoPost from './endpoints/ProdutoPost'
import UserPost from './endpoints/UserPost'
import ProdutoGet from './endpoints/ProdutoGet'


const Api = () => {
    return (
        <div>
            <h>USER POST</h>
            <UserPost />
            <h2>Token Post</h2>
            <TokenPost />
            <h2>Produto</h2>
            <ProdutoPost />
            <h2>Buscar Produto</h2>
            <ProdutoGet />
        </div>
    )
}

export default Api
