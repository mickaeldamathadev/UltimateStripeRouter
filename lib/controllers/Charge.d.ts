import { Request, Response } from 'express';
import stripe from 'stripe';
export interface ChargeProps {
}
export type ChargeCallback = (error: Error | null, card: stripe.Charge | null) => void;
export type RefundCallback = (error: Error | null, card: stripe.Refund | null) => void;
export default class Charge {
    static create(cb?: ChargeCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: ChargeCallback): (req: Request, res: Response) => Promise<void>;
    static update(cb?: ChargeCallback): (req: Request, res: Response) => Promise<void>;
    static refund(cb?: RefundCallback): (req: Request, res: Response) => Promise<void>;
}
