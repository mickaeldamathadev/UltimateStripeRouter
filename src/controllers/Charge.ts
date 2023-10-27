import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface ChargeProps {}

export type ChargeCallback = (charge: ChargeProps) => any

export default class Charge {
  static create(cb?: ChargeCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: ChargeCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }
}
