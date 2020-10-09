import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'fa fa-github',
    title: 'Branchs',
    subtitle: 'Desafio 2 CRUD'
}

const baseUrl = 'http://localhost:3004/branchs'
const initialState = {
    branch: { name: '' },
    list: []
}

export default class BranchCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ branch: initialState.branch })
    }

    save() {
        const branch = this.state.branch
        const method = branch.id ? 'put' : 'post'
        const url = branch.id ? `${baseUrl}/${branch.id}` : baseUrl
        axios[method](url, branch)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ branch: initialState.branch, list })
            })
    }

    getUpdatedList(branch, add = true) {
        const list = this.state.list.filter(b => b.id !== branch.id)
        if(add) list.unshift(branch)
        return list
    }

    updateField(event) {
        const branch = { ...this.state.branch }
        branch[event.target.name] = event.target.value
        this.setState({ branch })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Branch</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.branch.name}
                                onChange={e => this.updateField(e)}
                                placeholder="" />
                        </div>
                    </div>

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

    load(branch) {
        this.setState({ branch })
    }

    remove(branch) {
        axios.delete(`${baseUrl}/${branch.id}`).then(resp => {
            const list = this.getUpdatedList(branch, false)
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
        return this.state.list.map(branch => {
            return (
                <tr key={branch.id}>
                    <td>{branch.id}</td>
                    <td>{branch.name}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(branch)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(branch)}>
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