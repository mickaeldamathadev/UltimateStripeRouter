import { Request, Response } from 'express';
import stripe from 'stripe';
export type CardCallback = (card: stripe.Card) => void;
export type DeleteCardCallback = (card: stripe.CustomerSource | stripe.DeletedCustomerSource) => any;
export default class Card {
    static create(cb?: CardCallback): (req: Request, res: Response) => Promise<void>;
    static retrieve(cb?: CardCallback): (req: Request, res: Response) => Promise<void>;
    static update(cb?: CardCallback): (req: Request, res: Response) => Promise<void>;
    static delete(cb?: DeleteCardCallback): (req: Request, res: Response) => Promise<void>;
}
