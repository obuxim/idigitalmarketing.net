import {
    CardCvcElement,
    CardExpiryElement, CardNumberElement, useElements, useStripe
} from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { PayPalButton } from "react-paypal-button-v2";
import { CartContext } from '../context/CartContext/CartState';

const CustomCart = () => {
    const { register, handleSubmit, watch, errors } = useForm(); 
    
    const[coupnCode, setCouponCode] = useState('coupoin46');
    const[cartData, setCartData] = ([]);

    // New Cart
    const {addToCart, cartItemInfo, removerCart} = useContext(CartContext)
    
    const onSubmit = async (data, event) => {
        console.log(data);
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
    };
    
    const[cardform, setCardForm] = useState(false);
    const[billingForm, setBillingForm] = useState(false);

    // paypal
    const [sdkReady, setSdkReady] = useState(false);
    const handlePaymentClick = () => {
        setCardForm(!cardform);
    }
    const handleBillingForm = () => {
        setBillingForm(!billingForm);
    }
    const subTotal = cartItemInfo.reduce((sum, cur) =>
        sum + (cur.product_price).toFixed(2) * cur.quantity, 0
    );
    const handleCartDelete = e => {
        const itemId = e.target.id;
        removerCart(itemId)
    };
    const handleCouponCode = () => {
        console.log(coupnCode)
    }
    const vatPrice = cartItemInfo.length > 0 ? 50.00 : 0.00;
    const totalAmount = subTotal + vatPrice;

    // paypal

    useEffect(() => {
        const addPayPalScript = async () => {
            // const { data: clientId } = await Axios.get('/api/config/paypal')
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = `https://www.paypal.com/sdk/js?client-id=ARnuILaZL7b-osDpufmbAit_JY2GAIkO9K_UwH3ZSoyeOlIiE4VZ8TqdFDv8i1k05UvOnhPPi72nAp5a`;
                script.async = true;
                script.onload = () => {
                    setSdkReady(true);
                };
                document.body.appendChild(script);
            };
            addPayPalScript()
        }, []);

        const successPaymentHandler = (paymentResult) => {
            console.log(paymentResult)
            // TODO:: need to pass order id and payment result to action
        }

        // stripe 
        const stripe = useStripe();
        const elements = useElements();

        const handleStripeSubmit = async (event) => {
            event.preventDefault();
            if (!stripe || !elements) {
              // Stripe.js has not loaded yet. Make sure to disable
              // form submission until Stripe.js has loaded.
              return;
            }
            const payload = await stripe.createPaymentMethod({
              type: "card",
              card: elements.getElement(CardNumberElement)
            });
            console.log("[PaymentMethod]", payload);
        };

    return (
        <>
        <div className="cartCheckout">
            <section className="checkoutHero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-body">
                                <div className="innerContent">
                                    <h4>New Year Special Offer</h4>
                                    <p>Yes, please add the Personal Development 10 courses 
                                    bundle to my order for only <b>₤19.99</b></p>
                                </div>
                                <div className="tvl-btn">
                                    <button type="submit" name="submit" id="submit" className="btn btn-primary"> + Add to Order </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <p className="slsupport">If you face any issues please contact support <b>+120 3890 6420</b></p>
            </div>
            <section className="cartBody">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                {/* <form onSubmit={handleStripeSubmit} className="contact-form"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="cartInfo">
                                        
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h4>Account Information</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">First Name</label>
                                                    <input className="form-control" id="fname" name="fname" placeholder="First Name" type="text" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Last Name</label>
                                                    <input className="form-control" id="lname" name="lname" placeholder="Last Name" type="text" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Email</label>
                                                    <input className="form-control" id="email" name="email" placeholder="Enter email" type="email" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Set Password</label>
                                                    <input className="form-control" id="password" name="password" placeholder="Enter Password" type="password" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h4>Payment Options</h4>
                                            </div>

                                                {cardform ? 
                                                <div className="col-sm-12">
                                                    <div className="payimg ct-border" onClick={handlePaymentClick}>
                                                        <h4>Bank Card</h4>
                                                        <p>Pay with Mastercard, Amex, Visa & Mastero</p>
                                                    </div> 
                                                </div> 
                                                : 
                                                <div className="col-sm-12">
                                                    <div className="payimg cscursor" onClick={handlePaymentClick}>
                                                        <h4>Bank Card</h4>
                                                        <p>Pay with Mastercard, Amex, Visa & Mastero</p>
                                                    </div>
                                                </div>
                                            }

                                            {cardform && <div className="col-lg-12  mt-3 mb-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="">Card Number</label>
                                                            {/* <input className="form-control" id="fname" name="fname" placeholder="Enter your card number" type="text" ref={register} />
                                                            <span className="alert-error" /> */}
                                                            <CardNumberElement
                                                                className="form-control"
                                                                onChange={(event) => {
                                                                    console.log("CardNumberElement [change]", event);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="">Expiration Date</label>
                                                            {/* <input className="form-control" id="expire" name="expire" placeholder="Expire date" type="text" ref={register} />
                                                            <span className="alert-error" /> */}
                                                            <CardExpiryElement
                                                                className="form-control"
                                                                onChange={(event) => {
                                                                    console.log("CardNumberElement [change]", event);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="">Security</label>
                                                            {/* <input className="form-control" id="security" name="security" placeholder="CVV" type="security" ref={register} />
                                                            <span className="alert-error" /> */}
                                                            <CardCvcElement
                                                                className="form-control"
                                                                onChange={(event) => {
                                                                    console.log("CardNumberElement [change]", event);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="">Card Name</label>
                                                            <input className="form-control" id="cname" name="cname" placeholder="Enter Card name" type="text" ref={register} />
                                                            <span className="alert-error" />
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>}

                                            <div className="col-sm-12 mb-3">
                                                <div className="payimg">
                                                    <h4>Paypal</h4>
                                                    <p>Simple & Secure to pay</p>
                                                    {/* {!sdkReady ? (
                                                        // TODO:: Loader/Spinner goes there
                                                        ''
                                                        ) : (
                                                        <PayPalButton
                                                            // amount will be depends on student's order. E => amount={order.totalPrice}
                                                            amount="100"
                                                            onSuccess={successPaymentHandler}
                                                        />
                                                    )} */}
                                                    <PayPalButton
                                                        // amount will be depends on student's order. E => amount={order.totalPrice}
                                                        amount="100"
                                                        onSuccess={successPaymentHandler}
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h4 className="billingAdds" onClick={handleBillingForm}> Additional Billing Details  (Optional) <i className="fas fa-chevron-down fa-xs"></i></h4>
                                            </div>
                                            { billingForm && <>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">First Name</label>
                                                        <input className="form-control" id="fname" name="fname" placeholder="First Name" type="text" ref={register} />
                                                        <span className="alert-error" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Last Name</label>
                                                        <input className="form-control" id="lname" name="lname" placeholder="Last Name" type="text" ref={register} />
                                                        <span className="alert-error" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">Email</label>
                                                        <input className="form-control" id="email" name="email" placeholder="Enter Email" type="email" ref={register} />
                                                        <span className="alert-error" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">Billing address</label>
                                                            <input className="form-control" id="billingAddresss" name="billingAddresss" placeholder="Billing Address" type="text" ref={register} />
                                                        <span className="alert-error" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">Additional Notes</label>
                                                        <textarea className="form-control" id="notes" name="notes" placeholder="additional Notes" ref={register} ></textarea>
                                                        <span className="alert-error" />
                                                    </div>
                                                </div>
                                            </>}
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* <button type="submit" name="submit" className="btn btn-block btn-primary" id="submit" onClick={handleSubmit(onSubmit)}>
                                                    Checkout and Pay 
                                                </button> */}
                                                <button type="submit" name="submit" className="btn btn-block btn-primary" id="submit">
                                                    Checkout and Pay 
                                                </button>
                                            </div>
                                        </div>

                                </div>
                            </div>
                                
                            <div className="col-md-5">
                                <div className="orderItems">
                                    <h4>Your Orders</h4>
                                    <ul className="items">
                                        {cartItemInfo.length > 0 ? cartItemInfo.map((item) => 
                                            <li key={item.product_id}>
                                                <div className="itemImg">
                                                    <img src={item.thumb} alt="" className="img-fluid img-responsive"/>
                                                </div>
                                                <div className="contents">
                                                    <h5>{item.product_title}</h5>
                                                    <p><span>{item.product_price}  x {item.quantity}</span> <b>£{(item.product_price * item.quantity).toFixed(2)}</b></p>
                                                </div>
                                                <i className="far fa-trash-alt" id={item.product_id} onClick={handleCartDelete}></i>
                                            </li>
                                        ) : <p>No Item Found</p>}
                                    </ul>
                                    <hr/>
                                    <ul className="totalAmount">
                                        <li><b>Subtotal</b> <b className="amounts">{subTotal.toFixed(2)}</b></li>
                                        <li><b>Vat</b> <b className="amounts">{vatPrice.toFixed(2)}</b></li>
                                        <li><b>Total</b> 
                                            <b className="amounts">
                                                <input className="form-control customdesiablleform" defaultValue={totalAmount.toFixed(2)} id="totalamount"  readOnly name="totalamount" type="text" ref={register} />
                                            </b>
                                        </li>
                                        <li className="couponCode">
                                            <div className="coupon col-sm-12">
                                                <div className="form-inline" _lpchecked="1">
                                                    <div className="form-group">
                                                        <input type="text" id="coupon_code" name="coupon_code" className="form-control" placeholder="Coupon code" />
                                                    </div>
                                                    <button onClick={handleCouponCode} className="btn btn-primary">Apply coupon</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        </>
    );
};

export default CustomCart;