import { Request, Response } from 'express'
import stripe from 'stripe'

let Stripe = new stripe(process.env.STRIPE_APIKEY)

export interface ProductProps {}

export type ProductCallback = (
  error: Error | null,
  product: stripe.Product | null,
) => void

export type ProductListCallback = (
  error: Error | null,
  product: stripe.ApiList<Product> | null,
) => void

export default class Product {
  static create(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { name, description, metadata, currency, unit_amount } = req.body
        const product = await Stripe.products.create({
          name: name,
          description: description,
          default_price_data: { currency, unit_amount },
          metadata: metadata,
        })
        if (cb) {
          cb(null, product)
        }
        res
          .status(200)
          .json({ message: 'Product created successfully', product })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static retrieve(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { productId } = req.params
        const product = await Stripe.products.retrieve(productId)
        if (cb) {
          cb(null, product)
        }
        res.status(200).json({ product })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static update(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { productId, metadata } = req.body
        const product = await Stripe.products.update(productId, {
          metadata: metadata,
        })
        if (cb) {
          cb(null, product)
        }
        res
          .status(200)
          .json({ message: 'Product updated successfully', product })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static list(cb?: ProductListCallback) {
    return async (req: Request, res: Response) => {
      try {
        const products = await Stripe.products.list()
        if (cb) {
          cb(null, products)
        }
        res.status(200).json({ products })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }

  static delete(cb?: ProductCallback) {
    return async (req: Request, res: Response) => {
      try {
        const { productId } = req.params
        await Stripe.products.del(productId)
        if (cb) {
          cb(null, null)
        }
        res.status(200).json({ message: 'Product deleted successfully' })
      } catch (error) {
        if (cb) {
          cb(error, null)
        }
        res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}
