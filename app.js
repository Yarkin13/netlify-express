const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.text())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/analytics', (req, res) => {
    console.log('--------------------')
    console.log(new Date())
    console.log('Request received at:',JSON.parse(req.body).productionStats[0].type_action);
  
 
    res.status(200).send({ message: 'ok' });
    console.log('--------------------')
  });
