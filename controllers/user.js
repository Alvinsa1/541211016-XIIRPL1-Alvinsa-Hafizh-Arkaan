const user = require("../models/user")
const User = require("../models/user")

  module.exports ={
    // get all users
    index: async(req, res) => {
      try {
        const users = await User.find()
        if(users.length > 0){
          res.status(200).json({
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
      } catch (error) {
        res.status(400).json({sucess: false})
      }
        
    },  
    // get a user
    show: async(req, res) => {
      try {
        const user = await User.findById(req.params.id,)
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data berhasil didapat"
        })
      } catch{
        res.status(400).json({sucess: false})
      }
    },
    // create user
    store: async (req, res) => {
      try {
        const user = await User.create(req.body)
        res.status(200).json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data berhasil ditambah"
        })
        
      } catch (error) {
          res.status(400).json({sucess: false})
      }
    },
    // update user
    update: async(req, res) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        }
        )
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditamabah"
        })
      } catch{
        res.status(400).json({sucess: false})
      }
    },
    // delete user
      delete: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapuss"
          })
        } catch (error) {
          res.status(400).json({sucess: false})
        }
      }
  }