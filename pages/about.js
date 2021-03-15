import React from 'react';
import ClientsLogo from '../components/aboutpage/ClientsLogo';
import InfoBox from '../components/aboutpage/InfoBox';
import OnlineEducation from '../components/aboutpage/OnlineEducation';
import Students from '../components/aboutpage/Students';
import Testimonial from '../components/aboutpage/Testimonial';

const about = () => {
    return (
        <>
            <section class="inner-header bg-holder bg-overlay-black-90" style={{backgroundImage: `url('images/bg/03.jpg')`}}>
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-left mb-2 mb-md-0">
                        <h1 class="breadcrumb-title mb-0 text-white">About Us</h1>
                    </div>
                    <div class="col-md-6">
                        <ol class="breadcrumb d-flex justify-content-center justify-content-md-end ml-auto">
                        <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home mr-1"></i>Home</a></li>
                        <li class="breadcrumb-item active"><span>About Us</span></li>
                        </ol>
                    </div>
                    </div>
                </div>
            </section>
            <OnlineEducation />
            <InfoBox />
            <Students />
            <Testimonial />
            <ClientsLogo />
        </>
    );
};

export default about;