import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'fa fa-github',
    title: 'Commits',
    subtitle: 'Desafio 2 CRUD'
}

const baseUrl = 'http://localhost:3004/commits'
const branchsUrl = 'http://localhost:3004/branchs'
const initialState = {
    commit: {branch: '', name: '', description: '' },
    list: [],
    branchList: []
}

export default class CommitCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data.reverse() })
        })
        axios(branchsUrl).then(resp => {
            this.setState({ branchList: resp.data })
        })
    }

    clear() {
        this.setState({ commit: initialState.commit })
    }

    // Serve para salvar e editar
    save() {
        const commit = this.state.commit
        const method = commit.id ? 'put' : 'post'
        const url = commit.id ? `${baseUrl}/${commit.id}` : baseUrl
        axios[method](url, commit)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ commit: initialState.commit, list })
            })
    }

    getUpdatedList(commit, add = true) {
        const list = this.state.list.filter(c => c.id !== commit.id)
        if(add) list.unshift(commit)
        return list; 
    }

    updateField(event) {
        const commit = { ...this.state.commit }
        commit[event.target.name] = event.target.value
        this.setState({ commit })
    }

    renderDropDown() {
        return (
            <div className="col-12 col-md-2">
                <div className="form-group">
                    <label>Branch</label>
                    <select className="form-control"
                        name="branch"
                        value={this.state.commit.branch}
                        onChange={e => this.updateField(e)}
                        placeholder="">
                    {this.renderOption()}
                    </select>
                </div>
            </div>
        )
    }

    renderOption() {
        return this.state.branchList.map( branch => {
            return (
            <option value={branch.name}>{branch.name}</option>
            )
        })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.commit.name}
                                onChange={e => this.updateField(e)}
                                placeholder="" />
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="form-group">
                            <label>Descrição</label>
                            <textarea type="text" className="form-control"
                                name="description"
                                value={this.state.commit.description}
                                onChange={e => this.updateField(e)}
                                placeholder="" />
                        </div>
                    </div>

                    {this.renderDropDown()}

                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(commit) {
        this.setState({ commit })
    }

    remove(commit) {
        axios.delete(`${baseUrl}/${commit.id}`).then(resp => {
            const list = this.getUpdatedList(commit, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Branch</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(commit => {
            return (
                <tr key={commit.id}>
                    <td>{commit.id}</td>
                    <td>{commit.branch}</td>
                    <td>{commit.name}</td>
                    <td>{commit.description}</td>
                    <td>
                        <button className="btn btn-secondary"
                            onClick={() => this.load(commit)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(commit)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}