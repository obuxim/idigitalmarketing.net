const ClientsLogo = () => {
    return (
        <section class="space-ptb">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-12 mb-4">
                        <div class="section-title">
                            <h2>Trusted by companies</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="owl-carousel our-clients" data-nav-arrow="false" data-items="6" data-md-items="5" data-sm-items="4" data-xs-items="3" data-xx-items="1" data-space="30" data-autoheight="true" data-autospeed="4000">
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/01.svg" alt="" /></a>
                        </div>
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/02.svg" alt="" /></a>
                        </div>
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/03.svg" alt="" /></a>
                        </div>
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/04.svg" alt="" /></a>
                        </div>
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/05.svg" alt="" /></a>
                        </div>
                        <div class="item">
                            <a href="#"><img class="img-fluid" src="images/client/06.svg" alt="" /></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsLogo;