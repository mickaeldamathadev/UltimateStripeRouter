import { Request, Response } from 'express';
import stripe from 'stripe';
export interface PriceProps {
}
export type PriceCallback = (error: Error | null, price: stripe.Price | null) => void;
export type PriceListCallback = (error: Error | null, price: stripe.ApiList<stripe.Price> | null) => void;
export default class Price {
    static create(cb?: PriceCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: PriceCallback): (req: Request, res: Response) => Promise<void>;
    static update(cb?: PriceCallback): (req: Request, res: Response) => Promise<void>;
    static list(cb?: PriceListCallback): (req: Request, res: Response) => Promise<void>;
}
