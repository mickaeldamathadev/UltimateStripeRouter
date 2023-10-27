import { Router } from 'express'
import Card, { CardCallback } from './controllers/Card'
import Charge, { ChargeCallback } from './controllers/Charge'
import CheckoutSession, {
  CheckoutCallback,
} from './controllers/CheckoutSession'
import Customer, {
  CustomerCallback,
  CustomerListCallback,
} from './controllers/Customer'
import Price, { PriceCallback } from './controllers/Price'
import Product, { ProductCallback } from './controllers/Product'

interface RouterProps {
  createCallback?: CustomerCallback
  retrieveCallback?: CustomerCallback
  updateCallback?: CustomerCallback
  listCallback?: CustomerListCallback
  deleteCallback?: CustomerCallback
  createCardCallback?: CardCallback
  retrieveCardCallback?: CardCallback
  updateCardCallback?: CardCallback
  deleteCardCallback?: CardCallback
  createChargeCallback?: ChargeCallback
  retrieveChargeCallback?: ChargeCallback
  createPriceCallback?: PriceCallback
  retrievePriceCallback?: PriceCallback
  updatePriceCallback?: PriceCallback
  deletePriceCallback?: PriceCallback
  createProductCallback?: ProductCallback
  retrieveProductCallback?: ProductCallback
  updateProductCallback?: ProductCallback
  deleteProductCallback?: ProductCallback
  createCheckoutSessionCallback?: CheckoutCallback
  retrieveCheckoutSessionCallback?: CheckoutCallback
  expiredCheckoutSessionCallback?: CheckoutCallback
}

export default function router({
  createCallback,
  deleteCallback,
  retrieveCallback,
  updateCallback,
  listCallback,
  createCardCallback,
  retrieveCardCallback,
  updateCardCallback,
  deleteCardCallback,
  createChargeCallback,
  retrieveChargeCallback,
  createPriceCallback,
  retrievePriceCallback,
  updatePriceCallback,
  createProductCallback,
  retrieveProductCallback,
  updateProductCallback,
  deleteProductCallback,
  createCheckoutSessionCallback,
  retrieveCheckoutSessionCallback,
  expiredCheckoutSessionCallback,
}: RouterProps) {
  const router = Router()
    .post('/customers', Customer.create(createCallback))
    .get('/customers', Customer.getAll(listCallback))
    .get('/customers/:id', Customer.retrieve(retrieveCallback))
    .put('/customers/:id', Customer.update(updateCallback))
    .delete('/customers/:id', Customer.delete(deleteCallback))

    .post('/cards', Card.create(createCardCallback))
    .get('/cards/:id', Card.retrieve(retrieveCardCallback))
    .put('/cards/:id', Card.update(updateCardCallback))
    .delete('/cards/:id', Card.delete(deleteCardCallback))

    .post('/charges', Charge.create(createChargeCallback))
    .get('/charges/:id', Charge.retrieve(retrieveChargeCallback))

    .post('/prices', Price.create(createPriceCallback))
    .get('/prices/:id', Price.retrieve(retrievePriceCallback))
    .put('/prices/:id', Price.update(updatePriceCallback))

    .post('/products', Product.create(createProductCallback))
    .get('/products/:id', Product.retrieve(retrieveProductCallback))
    .put('/products/:id', Product.update(updateProductCallback))
    .delete('/products/:id', Product.delete(deleteProductCallback))

    .post(
      '/checkout-session',
      CheckoutSession.create(createCheckoutSessionCallback),
    )
    .get(
      '/checkout-session/:id',
      CheckoutSession.retrieve(retrieveCheckoutSessionCallback),
    )
    .delete(
      '/checkout-session/:id',
      CheckoutSession.expired(expiredCheckoutSessionCallback),
    )
  return router
}
