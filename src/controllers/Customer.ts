import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface CustomerProps {
  address?: AddressProps
  description?: string
  email?: string
  name?: string
  payment_method?: string
  shipping?: ShippingProps
}

export type CustomerCallback = (
  error: Error | null,
  customer: stripe.Customer | null | stripe.DeletedCustomer,
) => void
export type CustomerListCallback = (
  error: Error | null,
  customer: stripe.ApiList<stripe.Customer | stripe.DeletedCustomer> | null,
) => void

export interface ShippingProps {
  address: AddressProps
  name: string
  phone?: string
}

export interface AddressProps {}

export default class Customer {
  static create(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { email, name, description, metadata } = req.body
        const customer = await Stripe.customers.create({
          email: email,
          name: name,
          description: description,
          metadata: metadata,
        })
        if (cb) {
          cb(null, customer)
        }
        res
          .status(200)
          .json({ message: 'Customer created successfully', customer })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId } = req.params
        const customer = await Stripe.customers.retrieve(customerId)
        if (cb) {
          cb(null, customer)
        }
        res.status(200).json({ customer })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static update(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId, metadata } = req.body
        const customer = await Stripe.customers.update(customerId, {
          metadata: metadata,
        })
        if (cb) {
          cb(null, customer)
        }
        res
          .status(200)
          .json({ message: 'Customer updated successfully', customer })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static list(cb?: CustomerListCallback) {
    return async (req: Request, res: Response) => {
      try {
        const customers = await Stripe.customers.list()
        if (cb) {
          cb(null, customers)
        }
        res.status(200).json({ customers })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static delete(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { customerId } = req.params
        await Stripe.customers.del(customerId)
        if (cb) {
          cb(null, null)
        }
        res.status(200).json({ message: 'Customer deleted successfully' })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static getAll(cb?: CustomerListCallback) {
    return async (req: Request, res: Response) => {
      try {
        const customers = await Stripe.customers.list({})
        cb(null, customers)
        res.status(200).json(customers)
      } catch (error) {}
    }
  }
}
