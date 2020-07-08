const {Router} = require('express');
const router = Router();

router.get('/', (request, response)=>{
    response.send('admin app');
});

router.use('/restApi', require('./restApi'));

module.exports = router;