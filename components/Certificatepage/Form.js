import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };

    return (
         
    <div className="contact-area " style={{paddingBottom:"200px", paddingTop:"80px"}}>
        <div className="container">
            <div className="contact-items">
            <div className="row align-center">
                <div className="col-lg-9 right-item">
                <h3>Order New Certificate</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="row">

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="certificatetype">Certificate Type : </label>
                        <select name="certificatetype" className="basic-select form-control" id="certificatetype" ref={register}>
                            <option value="PDF Certificate">PDF Certificate</option>
                            <option value="Hard Copy Certificate">Hard Copy Certificate</option>
                            <option value="Both (PDF + Hardcopy)">Both (PDF + Hardcopy)</option>
                            <option value="none">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="cnumber">How many certificate(s): </label>
                        <select className="basic-select form-control" name="cnumber" id="cnumber" ref={register}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="none">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="ttype">Transcript type: </label>
                        <select name="ttype" id="ttype" className="basic-select form-control" ref={register}>
                            <option value="Hardcopy Transcript">Hardcopy Transcript</option>
                            <option value="PDF Transcript">PDF Transcript</option>
                            <option value="Both (PDF + Hardcopy)">Both (PDF + Hardcopy)</option>
                            <option value="None">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="tnumber">How many Transcript(s): </label>
                        <select name="tnumber" className="basic-select form-control" id="tnumber" ref={register}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="None">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <textarea className="form-control" id="additionali" name="coursename" placeholder="Course name" ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <h3>Enter Personal Details</h3>
                        <div className="form-group">
                        <input className="form-control" id="name" name="name" placeholder="Please enter your full Name" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                        <input className="form-control" id="email" name="email" placeholder="Email Address" type="email" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <input className="form-control" id="email" name="phone" placeholder="Phone" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="birthday">Date of birth:</label>
                        <input className="form-control" id="birthday" name="dateofbirth" placeholder="Date of birth" type="date" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="pphoto">Add Profile Photo:</label>
                        <input className="form-control" id="pphoto" name="profilephoto" placeholder="Profile Photo" type="file" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="additionali">Any Additional Info:</label>
                        <textarea className="form-control" id="additionali" name="additionali"  ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <h3>Shipping and Handling:</h3>
                        <p>ID Card Price: £ 9.99</p>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="shipping">Shipping : </label>
                        <select name="shipping" className="basic-select form-control" id="shipping" ref={register}>
                            <option value="uk delivery">UK Delivery</option>
                            <option value="international standard">International Standard +£ 10.01</option>
                            <option value="international dhl express">International DHL Express +£ 38.01</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <p>VAT: £ 9.99</p>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <p>Total Fee: £ 39.99</p>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <h3>Payment:</h3>
                        <label htmlFor="address">Delivery Address:(Street Address, City, ZIP Code, County, Country)</label>
                        <textarea className="form-control" id="address" name="address" placeholder="Street Address, City, ZIP Code, County, Country" ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="dcard">Payment Method : </label>
                        <select id="dcard" className="basic-select form-control" name="payment" ref={register}>
                            <option value="uk delivery">Debit or Credit Card</option>
                            <option value="international standard">PayPal</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="ccard">Credit or Debit Card:</label>
                        <input className="form-control" id="ccard" name="cardnumber" placeholder="Card Number" type="text" ref={register} />
                        <label htmlFor="pphoto">Expiration Date:</label>
                        <input className="form-control" id="pphoto" name="expirationdate" placeholder="Expiration Date" type="date" ref={register} />
                        <input className="form-control" id="pphoto" name="securitycode" placeholder="Security Code" type="text" ref={register} />
                        <input className="form-control" id="pphoto" name="cardholdername" placeholder="Cardholder Name" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <textarea className="form-control" id="additionali" name="notes" placeholder="Order notes" ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                   
      
                    </div>
                   
                    <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" class="btn btn-primary" name="submit" id="submit" onClick={handleSubmit(onSubmit)}>
                        Submit <i className="fa fa-paper-plane" />
                        </button>
                    </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                    </div>
                </form>

                </div>
            </div>
            </div>
        </div>
    </div>

    )
}

export default Form

