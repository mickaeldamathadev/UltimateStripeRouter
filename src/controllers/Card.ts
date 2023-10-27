import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export type CardCallback = (card: stripe.Card) => void
export type DeleteCardCallback = (
  card: stripe.CustomerSource | stripe.DeletedCustomerSource,
) => any

export default class Card {
  static create(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId, source } = req.body
        const card = await Stripe.customers.createSource(customerId, {
          source: source,
        })
        if (cb) {
          cb(card as stripe.Card)
        }
        res.status(200).json({ message: 'Card created successfully', card })
      } catch (error) {
        if (cb) {
          cb(error)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId, cardId } = req.params
        const card = await Stripe.customers.retrieveSource(customerId, cardId)
        if (cb) {
          cb(card as stripe.Card)
        }
        res.status(200).json({ card })
      } catch (error) {
        if (cb) {
          cb(error)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static update(cb?: CardCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId, cardId, metadata } = req.body
        const card = await Stripe.customers.updateSource(customerId, cardId, {
          metadata: metadata,
        })
        if (cb) {
          cb(card as stripe.Card)
        }
        res.status(200).json({ message: 'Card updated successfully', card })
      } catch (error) {
        if (cb) {
          cb(error)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static delete(cb?: DeleteCardCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId, cardId } = req.params
        const del = await Stripe.customers.deleteSource(customerId, cardId)
        if (cb) {
          cb(del)
        }
        res.status(200).json({ message: 'Card deleted successfully' })
      } catch (error) {
        if (cb) {
          cb(error)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
