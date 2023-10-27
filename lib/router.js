"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Card_1 = __importDefault(require("./controllers/Card"));
var Charge_1 = __importDefault(require("./controllers/Charge"));
var CheckoutSession_1 = __importDefault(require("./controllers/CheckoutSession"));
var Customer_1 = __importDefault(require("./controllers/Customer"));
var Price_1 = __importDefault(require("./controllers/Price"));
var Product_1 = __importDefault(require("./controllers/Product"));
function router(_a) {
    var createCallback = _a.createCallback, deleteCallback = _a.deleteCallback, retrieveCallback = _a.retrieveCallback, updateCallback = _a.updateCallback, listCallback = _a.listCallback, createCardCallback = _a.createCardCallback, retrieveCardCallback = _a.retrieveCardCallback, updateCardCallback = _a.updateCardCallback, deleteCardCallback = _a.deleteCardCallback, createChargeCallback = _a.createChargeCallback, retrieveChargeCallback = _a.retrieveChargeCallback, createPriceCallback = _a.createPriceCallback, retrievePriceCallback = _a.retrievePriceCallback, updatePriceCallback = _a.updatePriceCallback, createProductCallback = _a.createProductCallback, retrieveProductCallback = _a.retrieveProductCallback, updateProductCallback = _a.updateProductCallback, deleteProductCallback = _a.deleteProductCallback, createCheckoutSessionCallback = _a.createCheckoutSessionCallback, retrieveCheckoutSessionCallback = _a.retrieveCheckoutSessionCallback, expiredCheckoutSessionCallback = _a.expiredCheckoutSessionCallback;
    var router = (0, express_1.Router)()
        .post('/customers', Customer_1.default.create(createCallback))
        .get('/customers', Customer_1.default.getAll(listCallback))
        .get('/customers/:id', Customer_1.default.retrieve(retrieveCallback))
        .put('/customers/:id', Customer_1.default.update(updateCallback))
        .delete('/customers/:id', Customer_1.default.delete(deleteCallback))
        .post('/cards', Card_1.default.create(createCardCallback))
        .get('/cards/:id', Card_1.default.retrieve(retrieveCardCallback))
        .put('/cards/:id', Card_1.default.update(updateCardCallback))
        .delete('/cards/:id', Card_1.default.delete(deleteCardCallback))
        .post('/charges', Charge_1.default.create(createChargeCallback))
        .get('/charges/:id', Charge_1.default.retrieve(retrieveChargeCallback))
        .post('/prices', Price_1.default.create(createPriceCallback))
        .get('/prices/:id', Price_1.default.retrieve(retrievePriceCallback))
        .put('/prices/:id', Price_1.default.update(updatePriceCallback))
        .post('/products', Product_1.default.create(createProductCallback))
        .get('/products/:id', Product_1.default.retrieve(retrieveProductCallback))
        .put('/products/:id', Product_1.default.update(updateProductCallback))
        .delete('/products/:id', Product_1.default.delete(deleteProductCallback))
        .post('/checkout-session', CheckoutSession_1.default.create(createCheckoutSessionCallback))
        .get('/checkout-session/:id', CheckoutSession_1.default.retrieve(retrieveCheckoutSessionCallback))
        .delete('/checkout-session/:id', CheckoutSession_1.default.expired(expiredCheckoutSessionCallback));
    return router;
}
exports.default = router;
