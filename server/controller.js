module.exports = {

    getInventory: (req, res) => {
        
        let db = req.app.get('db');

        db.get_inventory()
        .then( inventory => res.status(200).send(inventory))
        .catch (err => {res.status(500)
        .send('Not working')
            console.log(err)
    }) 
    },

    create: (req, res) => {

        let db = req.app.get('db')
        let {name, price, image} = req.body;

        db.create_product([name, price, image])
        .then( () => res.sendStatus(200))
        .catch(err => {res.status(500)
        .send('Not Working')
            console.log(err)
        })
    }
}