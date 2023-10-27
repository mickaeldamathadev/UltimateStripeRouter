import { Request, Response } from 'express';
import stripe from 'stripe';
export interface ProductProps {
}
export type ProductCallback = (error: Error | null, product: stripe.Product | null) => void;
export type ProductListCallback = (error: Error | null, product: stripe.ApiList<Product> | null) => void;
export default class Product {
    static create(cb?: ProductCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: ProductCallback): (req: Request, res: Response) => Promise<void>;
    static update(cb?: ProductCallback): (req: Request, res: Response) => Promise<void>;
    static list(cb?: ProductListCallback): (req: Request, res: Response) => Promise<void>;
    static delete(cb?: ProductCallback): (req: Request, res: Response) => Promise<void>;
}
