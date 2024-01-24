const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require('../../models/order');

module.exports = {
    createCheckoutSession,
};

async function createPrices(lineItems) {
    const prices = await Promise.all(lineItems.map(async item => {
        const price = await stripe.prices.create({
            currency: 'usd',
            product_data: {
                name: item.item.name
            },
            unit_amount: item.item.price,
        });
        return {
            price: price.id,
            quantity: item.qty,
        };
    }));
    return prices;
}

async function createCheckoutSession(req, res) {
    const cart = await Order.getCart(req.user._id);
    try {
        const lineItems = await createPrices(cart.lineItems);
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.SERVER_URL}/order/new`,
            cancel_url: `${process.env.SERVER_URL}/order`
        })
        res.redirect(303, session.url);
    } catch (err) {
        console.log('ERROR OBJECT', err)
        res.status(500).json({ error: err.message})
    }
}

