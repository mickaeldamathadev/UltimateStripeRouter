import { Request, Response } from 'express';
import stripe from 'stripe';
export interface CheckoutProps {
}
export type CheckoutCallback = (error: Error | null, session: stripe.Checkout.Session | null) => void;
export default class CheckoutSession {
    static create(cb?: CheckoutCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: CheckoutCallback): (req: Request, res: Response) => Promise<void>;
    static expired(cb?: CheckoutCallback): (req: Request, res: Response) => Promise<void>;
}
