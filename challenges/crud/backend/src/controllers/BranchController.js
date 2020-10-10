const connection = require("../database/Connection");

module.exports = {

  async index(req, res) {
    //#Erorr002155
  },

  async indexById(req, res) {
    //#Erorr002155
  },

  async create(req, res) {
    connection.table('branchs').insert({ nome: req.body['name'] })
      .then(() => {
        res.status(200).json({
          status: 'success'
        });
      })
      .catch(err => { console.log(err); throw err; });
  },

  async edit(req, res) {
    //#Erorr002155
  },

  async delete(req, res) {
    //#Erorr002155

    return res.status(204).send();
  }

};