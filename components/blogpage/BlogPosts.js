const BlogPosts = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts ? posts.map(post => 
                <div key={post.id} class="blog-post mb-4 mb-sm-5">
                    <div class="blog-post-image">
                        <img class="img-fluid rounded-sm" src="images/blog/02.jpg" alt="" />
                    </div>
                    <div class="blog-post-content">
                    <div class="blog-post-info">
                        <div class="blog-post-author">
                        <a href="#" class="btn btn-link"><i class="far fa-folder-open"></i>Marketing</a>
                        </div>
                        <div class="blog-post-date"><a href="#"><i class="far fa-calendar"></i>Jan 4, 2020 </a></div>
                    </div>
                    <div class="blog-post-details">
                        <h5 class="blog-post-title">
                        <a href="blog-single.html">You can expand students access to learning</a>
                        </h5>
                        <p>Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here.</p>
                    </div>
                    <div class="blog-post-footer d-flex align-items-center">
                        <a href="#" class="btn btn-primary">Read more</a>
                        <div class="social-share ml-auto">
                        <a href="#"><i class="fas fa-share-alt mr-2 text-primary"></i></a>
                        <ul class="social-share">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            ) : 'Nothing found'}

            <div class="blog-post mb-4 mb-sm-5">
                <div class="blog-post-image">
                    <img class="img-fluid rounded-sm" src="images/blog/01.jpg" alt="" />
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-info">
                        <div class="blog-post-author">
                        <a href="#" class="btn btn-link"><i class="far fa-folder-open"></i>Strategy</a>
                        </div>
                        <div class="blog-post-date"><a href="#"><i class="far fa-calendar"></i>May 13, 2020 </a></div>
                    </div>
                    <div class="blog-post-details">
                        <h5 class="blog-post-title">
                        <a href="blog-single.html">The greatest choice of courses</a>
                        </h5>
                        <p>If you look back, you will notice that your past is there; everything you have ever done or experienced is behind you. Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life.</p>
                    </div>
                    <div class="blog-post-footer d-flex align-items-center">
                        <a href="#" class="btn btn-primary">Read more</a>
                        <div class="social-share ml-auto">
                        <a href="#"><i class="fas fa-share-alt mr-2 text-primary"></i></a>
                        <ul class="social-share">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-post mb-4 mb-sm-5">
                <div class="blog-post-image">
                    <img class="img-fluid rounded-sm" src="images/blog/03.jpg" alt="" />
                </div>
                <div class="blog-post-content">
                <div class="blog-post-info">
                    <div class="blog-post-author">
                    <a href="#" class="btn btn-link"><i class="far fa-folder-open"></i>Finance</a>
                    </div>
                    <div class="blog-post-date"><a href="#"><i class="far fa-calendar"></i>April 18, 2020 </a></div>
                </div>
                <div class="blog-post-details">
                    <h5 class="blog-post-title">
                    <a href="blog-single.html">12 great free online courses</a>
                    </h5>
                    <p>Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make. Engage with the idea of really being there.</p>
                </div>
                <div class="blog-post-footer d-flex align-items-center">
                    <a href="#" class="btn btn-primary">Read more</a>
                    <div class="social-share ml-auto">
                    <a href="#"><i class="fas fa-share-alt mr-2 text-primary"></i></a>
                    <ul class="social-share">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div class="blog-post">
                <div class="blog-post-image">
                    <iframe style={{width: '100%', height: '465px'}}
                        src="https://www.youtube.com/embed/rGtcmKIZi5c" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div class="blog-post-content">
                <div class="blog-post-info">
                    <div class="blog-post-author">
                    <a href="#" class="btn btn-link"><i class="far fa-folder-open"></i>Operations </a>
                    </div>
                    <div class="blog-post-date"><a href="#"><i class="far fa-calendar"></i>May 27, 2020 </a></div>
                </div>
                <div class="blog-post-details">
                    <h5 class="blog-post-title">
                    <a href="blog-single.html">Most people believe that success is difficult.</a>
                    </h5>
                    <p>Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think.</p>
                </div>
                <div class="blog-post-footer d-flex align-items-center">
                    <a href="#" class="btn btn-primary">Read more</a>
                    <div class="social-share ml-auto">
                    <a href="#"><i class="fas fa-share-alt mr-2 text-primary"></i></a>
                    <ul class="social-share">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;