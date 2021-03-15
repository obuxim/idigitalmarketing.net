import React from 'react';

const CourseDetailsSidebar = () => {
    return (
<div class="widgets">
                    <div class="widget widget-price">
                        <h6 class="widget-title">Price</h6>
                        <div class="widget-content">
                            <a class="btn btn-primary" href="#">Get course</a>
                            <span class="font-weight-bold text-success lead ml-3">Free</span>
                        </div>
                    </div>
                    <div class="widget">
                        <h6 class="widget-title">Search Classes</h6>
                        <div class="widget-content">
                            <form class="form-flat-style">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search popular class" />
                            </div>
                            <div class="form-check pl-0">
                                <div class="form-group select-border">
                                <select class="form-control basic-select">
                                    <option value="1" selected="selected">Development</option>
                                    <option value="3">Design</option>
                                    <option value="4">Marketing</option>
                                    <option value="2">IT & software</option>
                                    <option value="2">Photography</option>
                                    <option value="2">Music</option>
                                    <option value="2">Personal Development</option>
                                    <option value="2">Business</option>
                                </select>
                                </div>
                            </div>
                            <button type="button" class="btn btn-dark">Search</button>
                            </form>
                        </div>
                    </div>
                    <div class="widget widget-course-instructor">
                        <h6 class="widget-title">Course Instructor</h6>
                        <div class="widget-content">
                            <div class="row">
                                <div class="col-sm-4">
                                    <img class="rounded-circle img-fluid mb-2" src="images/avatar/04.jpg" alt="" />
                                </div>
                            </div>
                            <span class="lead fw-6 text-dark">Felica Queen</span>
                            <p class="mb-0">Member Since May 2009</p>
                            <ul class="d-flex mb-0 list-unstyled mt-2">
                            <li><a class="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1" href="#">497 Views</a></li>
                            <li><a class="btn btn-outline-primary-hover btn-sm py-1 px-2 mx-1" href="#">795 Courses</a></li>
                            <li><a class="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1" href="#">See all course</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget widget-course-info">
                        <h6 class="widget-title">Course info</h6>
                        <div class="widget-content">
                            <ul class="list">
                            <li>
                                <b>Course Date :</b>
                                <span>17 Feb 2020 - 20 May 2020</span>
                            </li>
                            <li>
                                <b>Time :</b>
                                <span>09:00 - 01:00</span>
                            </li>
                            <li>
                                <b>Duration :</b>
                                <span>90 Hours</span>
                            </li>
                            <li>
                                <b>Lectures :</b>
                                <span>23</span>
                            </li>
                            <li>
                                <b>Levels :</b>
                                <span>Beginner</span>
                            </li>
                            <li>
                                <b>Enrolled :</b>
                                <span>1874 Students</span>
                            </li>
                            <li>
                                <b>Video :</b>
                                <span>12 Hours</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget">
                        <h6 class="widget-title">Social share</h6>
                        <div class="widget-content">
                            <div class="social-icon-round">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-google"></i></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget-tag">
                        <h6 class="widget-title">Popular Classes</h6>
                        <div class="widget-content">
                            <ul class="list">
                            <li><a href="#">MBA</a></li>
                            <li><a href="#">Bachelor</a></li>
                            <li><a href="#">BSc</a></li>
                            <li><a href="#">BA</a></li>
                            <li><a href="#">BBA</a></li>
                            <li><a href="#">Diploma</a></li>
                            <li><a href="#">Library</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget">
                        <h6 class="widget-title">Map location</h6>
                        <div class="widget-content">
                            <iframe 
                                class="w-100 border-0" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185456!2d144.95373631584474!3d-37.81720974201458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1598418458630!5m2!1sen!2sin"
                                style={{border: 0, width: '100%', height: '250px'}}
                                allowfullscreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
    );
};

export default CourseDetailsSidebar;