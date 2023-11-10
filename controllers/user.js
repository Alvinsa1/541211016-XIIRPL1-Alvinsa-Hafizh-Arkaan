let users = [
    {id: 1, nama: "Alvin", email: "alvinarkaan5555@gmail.com"},
    {id: 2, nama: "pulu", email: "pulupulu@gmail.com"},
  ]

  module.exports ={
    index: (req, res) => {
        if(users.length > 0){
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
          })
        }else{
          res.json({
            status: false,
            message: "Data masih kosong"
          })
        }
    },  
    store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil ditambah"
        })
    },
    update:(req, res) => {
        const id = req.params.id
        users.filter(user => {
          if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditamabah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        users.filter(user => {
          if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditamabah"
        })
      }
  }