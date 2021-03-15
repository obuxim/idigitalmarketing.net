const ContactForm = () => {
    return (
        <section class="space-ptb">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                <div class="section-title">
                    <h2>Get In Touch</h2>
                    <p>If success is a process with a number of defined steps, then it is just like any other process. So, what is the first step in any process?</p>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                <form class="row fill-form mb-4 mb-md-0 form-flat-style">
                    <div class="form-group col-sm-6">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="form-group col-sm-6">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="" />
                    </div>
                    <div class="form-group col-sm-6">
                    <label>Subject</label>
                    <input type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="form-group col-sm-6">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="form-group col-sm-12">
                    <label>Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                    <button type="submit" class="btn btn-primary">Send us</button>
                    </div>
                </form>
                </div>
                <div class="col-md-3">
                <h4 class="mb-4">Contact Detail</h4>
                <p class="mb-2">6580 Allison Turnpike Creminfort, AL 32808-4509</p>
                <p class="mb-2"><b class="text-dark">Call us:</b>  +123 4567 8910</p>
                <p class="mb-4"><b class="text-dark">Mail us:</b>  support@online-courses.com</p>
                <div class="social-icon-round icon-sm">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ContactForm;