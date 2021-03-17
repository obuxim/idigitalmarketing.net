import BlogPosts from "./BlogPosts";
import BlogSidebar from "./BlogSidebar";

const Blog = ({posts}) => {
    return (
        <section class="space-ptb">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mt-lg-0 mt-5 order-2 order-lg-1">
                <BlogSidebar />
            </div>
            <div class="col-lg-8 order-1 order-lg-1">   
                |<BlogPosts posts={posts} />
                <div class="row">
                    <div class="col-12 text-center mt-4 mt-md-5">
                        <nav>
                            <ul class="pagination justify-content-center mb-0">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active">
                                    <span class="page-link">
                                    1
                                    <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item"><a class="page-link" href="#">6</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;