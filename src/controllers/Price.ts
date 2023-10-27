import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface PriceProps {}

export type PriceCallback = (price: PriceProps) => any

export default class Price {
  static create(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static update(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static delete(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }
}
