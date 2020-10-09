import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Desafio 2 CRUD">
        <div className='display-4'>
            <i class="fa fa-github" aria-hidden="true"></i>
            Desafio 2
        </div>
        <hr />
        <p className="mb-0 ">Bem Vindo ao desafio 2!</p>
        <p className="mb-0 ">O backend dessa aplicação esta quebrado, para mais informação: <a href="https://github.com/CommitJr/Commit-Pull-Hackquest-2020/tree/main/challenges/crud">clique aqui</a></p>
    </Main>