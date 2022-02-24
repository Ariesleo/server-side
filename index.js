const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('listening to you')
})

app.use(express.static('public'))

app.use(express.json({ limit: '1mb' }))

app.post('/api', (request, response) => {
    console.log('I got request')
    console.log(request.body)
    response.json({
        status: 'success',
        latitude: request.body.latitude,
        longitude: request.body.longitude,
    })
})
