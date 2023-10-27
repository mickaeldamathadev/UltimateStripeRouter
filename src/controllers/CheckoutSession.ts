import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface CheckoutProps {}

export type CheckoutCallback = (checkout: CheckoutProps) => any

export default class CheckouSession {
  static create(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static update(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static delete(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }
}
