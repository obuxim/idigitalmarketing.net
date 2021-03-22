import Paymentresponse from "../components/paymentresponse/Paymentresponse";
const paymentresponse = () => {
    return (
        <>
            <section className="inner-header bg-holder bg-overlay-black-90" style={{backgroundImage: `url('images/bg/03.jpg')`}}>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
                        <h1 className="breadcrumb-title mb-0 text-white">Payment Confirmation</h1>
                    </div>
                    <div className="col-md-6">
                        <ol className="breadcrumb d-flex justify-content-center justify-content-md-end ml-auto">
                            <li className="breadcrumb-item"><a href="index.html"><i className="fas fa-home mr-1"></i>home</a></li>
                            <li className="breadcrumb-item"><span>cart</span></li>
                            <li className="breadcrumb-item active"><span>payment response</span></li>
                        </ol>
                    </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5 mb-5">
                <Paymentresponse />
            </div>
        </>
    )
}

export default paymentresponse;
