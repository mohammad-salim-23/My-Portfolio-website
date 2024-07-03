import linkedIn from "../assets/images/linkedin.jpg";
import facebook from "../assets/images/facebook.jpg";
const Footer = () => {
    return (
      <div>
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              &copy; {new Date().getFullYear()} - All rights reserved by Mohammad Salim
            </p>
            <p>
              Built with ♥ by Mohammad Salim
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/mohammad-salim-bb09ba264/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} className="w-6 h-6" />
              </a>
              <a href="https://github.com/mohammad-salim-23" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100081152050675" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="GitHub" className="w-6 h-6" />
              </a>
            </div>
          </aside>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  