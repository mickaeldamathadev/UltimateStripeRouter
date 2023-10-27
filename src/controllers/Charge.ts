import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface ChargeProps {}

export type ChargeCallback = (
  error: Error | null,
  card: stripe.Charge | null,
) => void
export type RefundCallback = (
  error: Error | null,
  card: stripe.Refund | null,
) => void

export default class Charge {
  static create(cb?: ChargeCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { amount, currency, source, description } = req.body
        const charge = await Stripe.charges.create({
          amount: amount,
          currency: currency,
          source: source,
          description: description,
        })
        if (cb) {
          cb(null, charge)
        }
        res.status(200).json({ message: 'Charge created successfully', charge })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: ChargeCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { chargeId } = req.params
        const charge = await Stripe.charges.retrieve(chargeId)
        if (cb) {
          cb(null, charge)
        }
        res.status(200).json({ charge })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static update(cb?: ChargeCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { chargeId, metadata } = req.body
        const charge = await Stripe.charges.update(chargeId, {
          metadata: metadata,
        })
        if (cb) {
          cb(null, charge)
        }
        res.status(200).json({ message: 'Charge updated successfully', charge })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static refund(cb?: RefundCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { chargeId } = req.params
        const refund = await Stripe.refunds.create({
          charge: chargeId,
        })
        if (cb) {
          cb(null, refund)
        }
        res
          .status(200)
          .json({ message: 'Charge refunded successfully', refund })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
