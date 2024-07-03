
import salimImg from "../../assets/images/salim1.jpg"
import Project from "../../component/Project";
const About = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={salimImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">About Me</h1>
      <h3 className="text-4xl font-medium mb-5">I am available for <span className="text-blue-600 ">web development</span> related jobs</h3>
      <h3 className="font-semibold">Name:Mohammad Salim</h3>
      <h3 className="font-semibold">Age:22</h3>
      <h3 className="font-semibold">Education: Studying honours, 2nd year in CSE</h3>
      <h3 className="font-semibold">Location: Sylhet, Bangladesh</h3>

      <div className="mt-6">
      <h3 className="text-2xl font-bold">Contact Information</h3>
  <h3 className="font-semibold">Phone: +880 1581891023</h3>
  <h3 className="font-semibold">Email: mohammadsalim017427@gmail.com</h3>

      </div>
    
    </div>
  </div>
</div>
      <div>
        <h2 className="text-xl">MY WORK</h2>
        <h3 className="text-3xl font-medium">RECENT PROJECT</h3>
        <Project></Project>
      </div>
        </div>
    );
};

export default About;