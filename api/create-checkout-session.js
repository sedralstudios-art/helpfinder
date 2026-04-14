import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const amount = Number(req.body.amount) || 1000;
    const isRecurring = req.body.recurring === true;

    // Clamp to safe bounds — $1 min, $10,000 max per transaction.
    const safeAmount = Math.max(100, Math.min(1000000, Math.round(amount)));

    const sessionConfig = {
      payment_method_types: ['card'],
      success_url: `${req.headers.origin}/thank-you`,
      cancel_url: `${req.headers.origin}/support`,
    };

    if (isRecurring) {
      sessionConfig.mode = 'subscription';
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'HelpFinder Monthly Supporter',
              description: 'Monthly donation. Not tax-deductible. Supports hosting, research, and expansion.',
            },
            unit_amount: safeAmount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ];
    } else {
      sessionConfig.mode = 'payment';
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Support HelpFinder',
              description: 'Voluntary donation. Not tax-deductible. All contributions support site operations.',
            },
            unit_amount: safeAmount,
          },
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
