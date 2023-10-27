import { Request, Response } from 'express';
import stripe from 'stripe';
export interface CustomerProps {
    address?: AddressProps;
    description?: string;
    email?: string;
    name?: string;
    payment_method?: string;
    shipping?: ShippingProps;
}
export type CustomerCallback = (error: Error | null, customer: stripe.Customer | null | stripe.DeletedCustomer) => void;
export type CustomerListCallback = (error: Error | null, customer: stripe.ApiList<stripe.Customer | stripe.DeletedCustomer> | null) => void;
export interface ShippingProps {
    address: AddressProps;
    name: string;
    phone?: string;
}
export interface AddressProps {
}
export default class Customer {
    static create(cb?: CustomerCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: CustomerCallback): (req: Request, res: Response) => Promise<void>;
    static update(cb?: CustomerCallback): (req: Request, res: Response) => Promise<void>;
    static list(cb?: CustomerListCallback): (req: Request, res: Response) => Promise<void>;
    static delete(cb?: CustomerCallback): (req: Request, res: Response) => Promise<void>;
    static getAll(cb?: CustomerListCallback): (req: Request, res: Response) => Promise<void>;
}
