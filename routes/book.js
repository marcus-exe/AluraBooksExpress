const { Router } = require("express")

const { getBooks, getBook } = require("../controllers/book")

const router = Router() 

router.get('/', getBooks)

router.get('/:id', getBook)


router.post('/', (req, res)=>{
    res.send( "You did a post request")
})

router.patch('/', (req, res)=>{
    res.send( "You did a patch request")
})

router.delete('/', (req, res)=>{
    res.send( "You did a delete request")
})

module.exports = router 