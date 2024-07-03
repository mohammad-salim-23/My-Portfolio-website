
import bannerImg from "../assets/images/salim.jpg"
import resume from "../assets/images/Resume .pdf"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen max-w-7xl container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
    src={bannerImg}
      className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
    <div>
        <p className="text-xl">Hi , I am <span className="text-green-400 font-bold">Salim</span></p>
      <h1 className="text-5xl font-bold">Web Developer</h1>
      <p className="py-6 ">
      As a CSE student and web developer with a passion for exploring technology, I thrive on creating innovative web solutions. My strong academic background and enthusiasm for staying updated with the latest advancements drive me to build user-friendly and impactful digital applications.
      </p>
      <div>
        <Link to="/about"><button className="btn bg-green-400">More Info About Me</button></Link>
      </div>
      <p className="mt-4 mb-3 font-medium">Interested in my work? Feel free to download my resume:</p>
      <a href={resume} download="Salim-Resume.pdf" className="btn bg-green-500 ml-4">Download Resume</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;