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

export type CustomerCallback = (customer: CustomerProps) => any

export interface ShippingProps {
  address: AddressProps
  name: string
  phone?: string
}

export interface AddressProps {}

export default class Customer {
  static create(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      const data: CustomerProps = req.body

      const customer = await Stripe.customers.create(data)

      res.status(201).json({ customer: customer.id })
      try {
      } catch (error) {}
    }
  }

  static retrieve(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      const customer = await Stripe.customers.retrieve(req.params.id)
      res.status(200).json({ customer })
      try {
      } catch (error) {}
    }
  }

  static update(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      const data: CustomerProps = req.body

      const customer = await Stripe.customers.update(req.params.id, data)

      res.status(200).json({ customer: customer.id })
      try {
      } catch (error) {}
    }
  }

  static delete(cb?: CustomerCallback) {
    return async (req: Request, res: Response) => {
      try {
        const customer = await Stripe.customers.update(req.params.id)
        cb(customer as CustomerProps)
        res.status(200).json({ customer: customer.id })
      } catch (error) {}
    }
  }
}
