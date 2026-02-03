import { NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

// Stripe will be imported when keys are configured
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customer } = body;

    // Validate items
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    // Build line items for Stripe
    const lineItems = items.map((item: { id: string; quantity: number }) => {
      const product = getProductById(item.id);
      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }
      return {
        price_data: {
          currency: 'aud',
          product_data: {
            name: product.name,
            description: product.description,
            // images: [product.image], // Add when we have real images
          },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    });

    // Calculate if free shipping applies
    const subtotal = lineItems.reduce(
      (sum: number, item: { price_data: { unit_amount: number }; quantity: number }) => 
        sum + item.price_data.unit_amount * item.quantity,
      0
    );
    
    // Add shipping if under $75
    if (subtotal < 7500) {
      lineItems.push({
        price_data: {
          currency: 'aud',
          product_data: {
            name: 'Shipping',
            description: 'Standard shipping within Australia',
          },
          unit_amount: 1000, // $10 shipping
        },
        quantity: 1,
      });
    }

    // TODO: Create Stripe Checkout Session when keys are configured
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: lineItems,
    //   mode: 'payment',
    //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    //   customer_email: customer.email,
    //   shipping_address_collection: {
    //     allowed_countries: ['AU'],
    //   },
    //   metadata: {
    //     customer_name: `${customer.firstName} ${customer.lastName}`,
    //     customer_phone: customer.phone || '',
    //   },
    // });
    //
    // return NextResponse.json({ url: session.url });

    // Placeholder response until Stripe is configured
    return NextResponse.json({
      error: 'Stripe not configured. Add STRIPE_SECRET_KEY to enable checkout.',
      message: 'This is a demo. Stripe integration is ready but requires API keys.',
      lineItems: lineItems, // Return line items for debugging
    }, { status: 503 });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
