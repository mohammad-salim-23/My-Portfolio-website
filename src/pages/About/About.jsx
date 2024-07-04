import { useRef } from "react";
import emailjs from "emailjs-com";
import salimImg from "../../assets/images/salim1.jpg";
import Project from "../../component/Project";
import linkedinIcon from "../../assets/images/linkedin.jpg";
import Footer from "../../component/Footer";

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uww6saq",
        "template_lcaxfia",
        form.current,
        "Lo1P_XpzWDBttraNB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={salimImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Mohammad Salim"
          />

          <div>
            <h1 className="text-3xl font-bold mt-9">About Me</h1>
            <h3 className="text-4xl font-medium mb-5">
              I am available for{" "}
              <span className="text-blue-600">web development</span> related
              jobs
            </h3>
            <h3 className="font-semibold">Name: Mohammad Salim</h3>
            <h3 className="font-semibold">Age: 22</h3>
            <h3 className="font-semibold">
              Education: Studying honours, 2nd year in CSE
            </h3>
            <h3 className="font-semibold">Location: Sylhet, Bangladesh</h3>
            <div>
              <h3 className="text-3xl">Technologies that I know</h3>

             <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
             <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
              <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
              <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
              <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify" />
              <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
              <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
              <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="Nodemon" />
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
              <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
              <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" />
              <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
              <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
              <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
              <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase" />
              <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
             </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mt-12 border-r-2">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <h3 className="font-semibold">Phone: +880 1581891023</h3>
                <h3 className="font-semibold">
                  Email: mohammadsalim017427@gmail.com
                </h3>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-salim-bb09ba264/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://github.com/mohammad-salim-23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>

              <div className="mt-8   mx-4">
                <h3 className="text-2xl font-bold">Send me a message</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-control">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">Message</label>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl">MY WORK</h2>
        <h3 className="text-3xl font-medium">RECENT PROJECT</h3>
        <Project />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
