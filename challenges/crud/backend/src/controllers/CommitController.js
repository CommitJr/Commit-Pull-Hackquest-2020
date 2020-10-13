const connection = require("../database/Connection");

module.exports = {

  async index(req, res) {
    connection('commits').select()
      .then((rows) => {
        res.status(200).json(rows);
      })
      .catch(err => { console.log(err); throw err; });
  },

  async indexById(req, res) {
    connection('commits').select().where({ id: req.params.id })
      .then((rows) => {
        res.status(200).json(rows);
      })
      .catch(err => { console.log(err); throw err; });

  },

  async create(req, res) {
    connection.table('commits').insert({
      nome: req.body['name'],
      descricao: req.body['description'],
      branch_id: req.body['branch']
    }).then(() => {
      res.status(200).json({
        status: 'success'
      });
    }).catch(err => { console.log(err); throw err; });
  },

  async edit(req, res) {
    if (req.body['id'] == undefined) {
      res.status(404).json();

    } else {
      connection.table('commits')
        .where({ id: req.body['id'] })
        .update({
          nome: req.body['name'],
          descricao: req.body['description'],
          branch_id: req.body['branch']
        }).then(() => {
          res.status(200).json({
            status: 'success'
          });
        }).catch(err => { console.log(err); throw err; });
    }
  },

  async delete(req, res) {
    connection.table('commits').delete().where({ id: req.params.id })
      .then(() => {
        return res.status(204).send();
      }).catch(err => { console.log(err); throw err; });
  },

}