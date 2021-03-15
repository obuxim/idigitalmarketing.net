import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Blog from "../components/homepage/Blog";
import Course from "../components/homepage/Course";
import FeatureInfo from "../components/homepage/FeatureInfo";
import FeatureInfoProgress from "../components/homepage/FeatureInfoProgress";
import Testimonial from "../components/homepage/Testimonial";
import Video from "../components/homepage/Video";

const homepage = () => {
	return (
		<div>
			<Banner />
			<Course />
			<FeatureInfo />
			<FeatureInfoProgress />
			<Video />
			<Testimonial />
			<Blog />
		</div>
	);
};

export default homepage;
