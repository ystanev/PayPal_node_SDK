const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ASozFj0kcXqjYSHGvge7VYmlXTmfinXlYIcV4ApdSB7f9C7d4CvPYPjIspMDHdl00NZ11dv03Obj2t7H',
    'client_secret': 'EJmstRvMD9aPv9F1yIMxKnmxcEvB5SCiHCUwkvIyyQJ9kufsXs7A6PeVk_ykrKBD1n4TBowAzeirSf4Z'
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Server Started...'))