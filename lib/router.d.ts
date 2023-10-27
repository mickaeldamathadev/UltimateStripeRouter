import { CardCallback } from './controllers/Card';
import { ChargeCallback } from './controllers/Charge';
import { CheckoutCallback } from './controllers/CheckoutSession';
import { CustomerCallback, CustomerListCallback } from './controllers/Customer';
import { PriceCallback } from './controllers/Price';
import { ProductCallback } from './controllers/Product';
interface RouterProps {
    createCallback?: CustomerCallback;
    retrieveCallback?: CustomerCallback;
    updateCallback?: CustomerCallback;
    listCallback?: CustomerListCallback;
    deleteCallback?: CustomerCallback;
    createCardCallback?: CardCallback;
    retrieveCardCallback?: CardCallback;
    updateCardCallback?: CardCallback;
    deleteCardCallback?: CardCallback;
    createChargeCallback?: ChargeCallback;
    retrieveChargeCallback?: ChargeCallback;
    createPriceCallback?: PriceCallback;
    retrievePriceCallback?: PriceCallback;
    updatePriceCallback?: PriceCallback;
    deletePriceCallback?: PriceCallback;
    createProductCallback?: ProductCallback;
    retrieveProductCallback?: ProductCallback;
    updateProductCallback?: ProductCallback;
    deleteProductCallback?: ProductCallback;
    createCheckoutSessionCallback?: CheckoutCallback;
    retrieveCheckoutSessionCallback?: CheckoutCallback;
    expiredCheckoutSessionCallback?: CheckoutCallback;
}
export default function router({ createCallback, deleteCallback, retrieveCallback, updateCallback, listCallback, createCardCallback, retrieveCardCallback, updateCardCallback, deleteCardCallback, createChargeCallback, retrieveChargeCallback, createPriceCallback, retrievePriceCallback, updatePriceCallback, createProductCallback, retrieveProductCallback, updateProductCallback, deleteProductCallback, createCheckoutSessionCallback, retrieveCheckoutSessionCallback, expiredCheckoutSessionCallback, }: RouterProps): import("express-serve-static-core").Router;
export {};
