const express = require('express');

const app = express()


app.get('/', (req, res) =>{
    res.json({
        result: 'success',
        status: 200,
        message: 'Hello From Node-aws-lambda'
    })
})

app.listen(8080, () =>{
    console.log('server listening on port 8080');
})


