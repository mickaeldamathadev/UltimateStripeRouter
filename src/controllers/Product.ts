import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface ProductProps {}

export type ProductCallback = (product: ProductProps) => any

export default class Product {
  static create(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static update(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }

  static delete(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
      } catch (error) {}
    }
  }
}
