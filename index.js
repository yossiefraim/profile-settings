const express    = require('express'),
      bodyParser = require('body-parser'),
      data       = require('./data/profiles.json'),
      app        = express(),
      port       = process.env.PORT || 3000,
      operator   = require('./profile_mdl.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/getAllSettingOptions/',
    (req,res) =>{
        res.status(200).json(operator.getAllSettingOptions());
    });

app.post('/getUserProfileSetting',
  (req,res) => {
    res.status(200).json(operator.getUserProfileSetting(req.body.profile_id));
  });

app.post('/getUserProfileByParams',
  (req,res) => {
      res.status(200).json(operator.getUserProfileByParams(req.body.age,req.body.gender));
  });

app.all('*',
    (req,res) => {
        res.sendFile(`${__dirname}/index.html`);
    });
app.listen(port,
    ()=>{
        console.log(`listen to port ${port}`);
    });