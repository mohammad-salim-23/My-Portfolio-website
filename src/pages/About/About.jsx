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

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });

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
                            I am available for <span className="text-blue-600">web development</span> related jobs
                        </h3>
                        <h3 className="font-semibold">Name: Mohammad Salim</h3>
                        <h3 className="font-semibold">Age: 22</h3>
                        <h3 className="font-semibold">Education: Studying honours, 2nd year in CSE</h3>
                        <h3 className="font-semibold">Location: Sylhet, Bangladesh</h3>
                    <div>
                        <h3 className="text-3xl">Technologies that I know</h3>
                        
<img src="https://github.com/mir-hussain/mir-hussain/blob/main/images/icons/HTML.png"/>
<img src="https://github.com/mir-hussain/mir-hussain/blob/main/images/icons/css.png"/>
<img src="https://github.com/mir-hussain/mir-hussain/blob/main/images/icons/JavaScript.png"/>
<img src="https://github.com/mir-hussain/mir-hussain/blob/main/images/icons/react.png"/>


<img src="https://github.com/mir-hussain/mir-hussain/blob/main/images/icons/tailwind.png"/>



                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mt-12 border-r-2">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <h3 className="font-semibold">Phone: +880 1581891023</h3>
                            <h3 className="font-semibold">Email: mohammadsalim017427@gmail.com</h3>
                            <div className="mt-4 flex space-x-4">
                                <a href="https://www.linkedin.com/in/mohammad-salim-bb09ba264/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                                <a href="https://github.com/mohammad-salim-23" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" className="w-8 h-8" />
                                </a>
                           
                            </div>
                        </div>

                        <div className="mt-8   mx-4">
                            <h3 className="text-2xl font-bold">Send me a message</h3>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-control">
                                    <label className="label">Name</label>
                                    <input type="text" name="user_name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">Email</label>
                                    <input type="email" name="user_email" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">Message</label>
                                    <textarea name="message" className="textarea textarea-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <button type="submit" className="btn btn-primary">Send</button>
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
