import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface PriceProps {}

export type PriceCallback = (
  error: Error | null,
  price: stripe.Price | null,
) => void

export type PriceListCallback = (
  error: Error | null,
  price: stripe.ApiList<stripe.Price> | null,
) => void

export default class Price {
  static create(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { product, unit_amount, currency, recurring } = req.body
        const price = await Stripe.prices.create({
          product: product,
          unit_amount: unit_amount,
          currency: currency,
          recurring: recurring,
        })
        if (cb) {
          cb(null, price)
        }
        res.status(200).json({ message: 'Price created successfully', price })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { priceId } = req.params
        const price = await Stripe.prices.retrieve(priceId)
        if (cb) {
          cb(null, price)
        }
        res.status(200).json({ price })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static update(cb?: PriceCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { priceId, metadata } = req.body
        const price = await Stripe.prices.update(priceId, {
          metadata: metadata,
        })
        if (cb) {
          cb(null, price)
        }
        res.status(200).json({ message: 'Price updated successfully', price })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static list(cb?: PriceListCallback) {
    return async (req: Request, res: Response) => {
      try {
        const prices = await Stripe.prices.list()
        if (cb) {
          cb(null, prices)
        }
        res.status(200).json({ prices })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
