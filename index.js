const express = require('express')
const app = express()

app.use(express);
app.get('/endpointName', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("hello")
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Example app listening on port 4000!')
})