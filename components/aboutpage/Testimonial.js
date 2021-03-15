import React from 'react';

const Testimonial = () => {
    return (
        <section class="space-ptb">
            <div class="container">
                <div class="row">
                <div class="col-md-8 offset-md-2 text-center">
                    <div class="owl-carousel testimonial-style-02" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
                    <div class="item">
                        <div class="testimonial-item">
                        <div class="author-img">
                            <img src="images/avatar/01.jpg" alt="" />
                        </div>
                        <div class="testimonial-content">
                            <p>We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.</p>
                        </div>
                        <div class="testimonial-author">
                            <div class="testimonial-name">
                            <p class="mb-1 text-dark font-weight-bold">Michael Bean</p>
                            <small>Web Developer</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-item">
                        <div class="author-img">
                            <img src="images/avatar/02.jpg" alt="" />
                        </div>
                        <div class="testimonial-content">
                            <p>I have gotten at least 50 times the value from Guruma. I will let my mum know about this, she could really make use of Guruma! Wow what great service, I love it! Guruma is the real deal!</p>
                        </div>
                        <div class="testimonial-author">
                            <div class="testimonial-name">
                            <p class="mb-1 text-dark font-weight-bold">Mariquilla V.</p>
                            <small>Production Manager</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-item">
                        <div class="author-img">
                            <img src="images/avatar/03.jpg" alt="" />
                        </div>
                        <div class="testimonial-content">
                            <p>We've seen amazing results already. Since I invested in Guruma I made over 100,000 dollars profits. It's the perfect solution for our business. I was amazed at the quality of Guruma.</p>
                        </div>
                        <div class="testimonial-author">
                            <div class="testimonial-name">
                            <p class="mb-1 text-dark font-weight-bold">Fern W.</p>
                            <small>Vetrov Systems Development</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
};

export default Testimonial;