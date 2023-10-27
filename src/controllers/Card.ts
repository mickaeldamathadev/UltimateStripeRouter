import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface CardProps {}

export type CardCallback = (card: CardProps) => any

export default class Card {
  static create(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static update(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static delete(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }
}
