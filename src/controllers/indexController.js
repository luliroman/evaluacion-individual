const db = require('../database/models')


module.exports = {
    home: function (req, res){
            db.Nota.findAll(
                {
                    order: [
                        ['updated_at', 'DESC']
                    ]
                }

            ).then(function(notas){
                res.render("index", {notas: notas});
            })
    },
    
    create: function (req, res){
            db.Nota.create({
                titulo: req.body.title,
                texto: req.body.description
            })
            .then(function(resultado){res.redirect("/");
            })
            .catch(function(error) {
                return res.send(error)
            })

    },


    edit: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(function(nota) {
            res.render('detail', { nota:nota })
        })
    },



    update: function (req, res){
        db.Nota.update({
            titulo: req.body.title,
            texto: req.body.description
        },{
            where:{
            id: req.params.id
        } 
        })
        .then(function(nota) {
            res.redirect('/')
        })

        .catch(function(error) {
            return res.send(error)
        })
    },         
  

    delete: function (req, res){
      
        db.Nota.destroy({ 
            where: {
                 id: req.params.id
                 }
            })
         .then(function(resultado) {
            return res.redirect('/')
         })
         .catch(function(error) {
             return res.send(error)
         })
    }
 

}