import React from 'react';

const CoursePageHeader = () => {
    return (
        <section class="space-ptb bg-holder bg-overlay-black-90" style={{backgroundImage: 'url(images/bg/03.jpg)'}}>
            <div class="container">
                <div class="find-Course">
                <div class="row">
                    <div class="col-md-12 text-center">
                    <h3 class="text-white mb-4">1000+ Popular Courses</h3>
                    </div>
                </div>
                <div class="row">
                    <form class="col-md-10 offset-md-1">
                    <div class="form-row align-items-center">
                        <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
                        <input type="text" class="form-control rounded-sm" placeholder="Search Course" />
                        </div>
                        <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
                        <input type="text" class="form-control rounded-sm" placeholder="Location" />
                        </div>
                        <div class="col-md-4 col-lg-3">
                        <select class="basic-select form-control">
                            <option selected="selected">Choose Instructor</option>
                            <option>Design</option>
                            <option>Development</option>
                            <option>Marketing</option>
                            <option>IT & software</option>
                            <option>Photography</option>
                            <option>Music</option>
                            <option>Personal Development</option>
                            <option>Business</option>
                        </select>
                        </div>
                        <div class="col-12 col-lg-3 text-left mt-3 mt-lg-0">
                        <a class="btn btn-primary d-lg-block rounded-sm" href="#">Search course</a>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageHeader;