const models = require('../../models');
const { render } = require('../../app');
const { response, request } = require('express');

exports.get_products = (async (request, response)=> {
    // response.render('admin/products.html')
    const productList = await models.Products.findAll();
    return response.json({productList});
});

exports.get_products_write = ((request, response)=> {
    response.render('write/write.html')
});
exports.post_products_write = (async (request, response)=> {
    // response.send(request.body);
    await models.Products.create(request.body)
    response.redirect('write');
});