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
                <div className="col-lg-8 right-item">

                <form  onSubmit={handleSubmit(onSubmit)}  className="contact-form form-flat-style">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                        <input className="form-control" id="name" name="name" placeholder="Student Name" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input className="form-control" id="email" name="email" placeholder="Student Email Address" type="email" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input className="form-control" id="phone" name="phone" placeholder="Phone Number" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                        <input className="form-control" id="name" name="vcode" placeholder="Voucher Code" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                        <input className="form-control" id="name" name="coursename" placeholder="Purchased Course Name" type="text" ref={register} />
                        <span className="alert-error" />
                        </div>
                    </div>
                    </div>
                   
                    <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" className="btn btn-sm btn-primary" onClick={handleSubmit(onSubmit)}>
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
