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
                <h3>Submit Your Assignment</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="row">

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="ordercertificate">Did you order your certificate? </label>
                        <select name="ordercertificate" className="basic-select form-control" id="ordercertificate" ref={register}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="endorsedcertificate">Endorsed Certificate: </label>
                        <select name="endorsedcertificate" className="basic-select form-control" id="endorsedcertificate" ref={register}>
                            <option value="Endorsed Level 7 Certificate1">Endorsed Level 7 Certificate</option>
                            <option value="Endorsed Level 6 Certificate">Endorsed Level 6 Certificate</option>
                            <option value="Endorsed Level 5 Certificate">Endorsed Level 5 Certificate</option>
                            <option value="Endorsed Level 4 Certificate">Endorsed Level 4 Certificate</option>
                            <option value="Endorsed Level 3 Certificate">Endorsed Level 3 Certificate</option>
                            <option value="Endorsed Level 2 Certificate">Endorsed Level 2 Certificate</option>
                            <option value="Endorsed Level 1 Certificate">Endorsed Level 1 Certificate</option>
                            <option value="none">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="cpdcertificate">CPD Certificate: </label>
                        <select name="cpdcertificate" className="basic-select form-control" id="cpdcertificate" ref={register}>
                            <option value="CPD PDF Certificate">CPD PDF Certificate</option>
                            <option value="CPD Hardcopy Certificate">CPD Hardcopy Certificate</option>
                            <option value="Both CPD (PDF + Hardcopy) Certificates">Both CPD (PDF + Hardcopy) Certificates</option>
                            <option value="None">None</option>
                        </select>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="transcripttype">Transcript type: </label>
                        <select name="transcripttype" className="basic-select form-control" id="transcripttype" ref={register}>
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
                        <label htmlFor="shipping">Shipping: </label>
                        <select name="shipping" className="basic-select form-control" id="shipping" ref={register}>
                            <option value="Free UK Delivery">Free UK Delivery</option>
                            <option value="International Delivery">International Delivery</option>
                            <option value="International DHL Express">International DHL Express</option>
                            <option value="None">None</option>
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
                        <p>Certification Fee: £ 39.99</p>
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
                        <label htmlFor="assignment:">Upload Your Assignment:</label>
                        <input className="form-control" id="assignment" name="assignment" placeholder="upload your assignment" type="file" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="additionali">Course Name:</label>
                        <textarea className="form-control" id="additionali" name="additionali"  ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <h3>Payment:</h3>
                        <label htmlFor="address">Address:(Street Address, City, ZIP Code, County, Country)</label>
                        <textarea className="form-control" id="address" name="address" placeholder="Street Address, City, ZIP Code, County, Country" ref={register}></textarea>
                        <span className="alert-error" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label htmlFor="dcard">Payment Method : </label>
                        <select id="dcard" name="payment" className="basic-select form-control" ref={register}>
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
      
                    </div>
                   
                    <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" class="btn btn-primary" id="submit" onClick={handleSubmit(onSubmit)}>
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

