import Breadcumb from "../components/Certificatepage/Breadcumb"
import Form from "../components/Certificatepage/Form"


const certificate = () => {
    return (
        <>
            <section class="inner-header bg-holder bg-overlay-black-90" style={{backgroundImage: `url('images/bg/03.jpg')`}}>
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-left mb-2 mb-md-0">
                        <h1 class="breadcrumb-title mb-0 text-white">Certificate</h1>
                    </div>
                    <div class="col-md-6">
                        <ol class="breadcrumb d-flex justify-content-center justify-content-md-end ml-auto">
                        <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home mr-1"></i>Home</a></li>
                        <li class="breadcrumb-item active"><span>certificate</span></li>
                        </ol>
                    </div>
                    </div>
                </div>
            </section>
            <Form />
        </>
    )
}

export default certificate
