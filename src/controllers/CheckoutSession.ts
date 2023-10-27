import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface CheckoutProps {}

export type CheckoutCallback = (
  error: Error | null,
  session: stripe.Checkout.Session | null,
) => void

export default class CheckoutSession {
  static create(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
        const {
          line_items,
          payment_method_types,
          mode,
          success_url,
          cancel_url,
        } = req.body
        const session = await Stripe.checkout.sessions.create({
          payment_method_types: payment_method_types,
          line_items: line_items,
          mode: mode,
          success_url: success_url,
          cancel_url: cancel_url,
        })

        if (cb) {
          cb(null, session)
        }

        res
          .status(200)
          .json({ message: 'Checkout session created successfully', session })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { sessionId } = req.params
        const session = await Stripe.checkout.sessions.retrieve(sessionId)
        if (cb) {
          cb(null, session)
        }
        res.status(200).json({ session })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static expired(cb?: CheckoutCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { sessionId } = req.params
        const deletedSession = await Stripe.checkout.sessions.expire(sessionId)
        if (cb) {
          cb(null, deletedSession)
        }
        res.status(200).json({
          message: 'Checkout session expired successfully',
          deletedSession,
        })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
