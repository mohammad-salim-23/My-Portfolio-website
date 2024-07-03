import { useParams } from "react-router-dom";
import YummyImage from '../assets/images/Yummy.jpg';
import MountainImage from '../assets/images/mountain1.jpg';

const ProjectDetails = () => {
    const { id } = useParams();

    const projectData = {
        1: {
            title: 'Educational',
            description: 'Welcome to 3 Idiots Academy, an online educational platform that connects learners with courses and instructors worldwide.',
            clientSideCode: 'https://github.com/mohammad-salim-23/Edumanage-client-side',
            serverSideCode: 'https://github.com/mohammad-salim-23/Edumanage-server-side',
            liveLink: 'https://edumanage-client-side.web.app',
            image: 'https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?t=st=1720010106~exp=1720013706~hmac=376cc74766a6906415641847103f463b95b4db5600540f573e30e1aa80308026&w=900',
        },
        2: {
            title: 'Restaurant Management',
            description: 'This project is an online platform that serves both buyers and sellers in the restaurant industry. Buyers can make purchases, while sellers can list their items for sale. Additionally, anyone interested in selling something can also advertise their products on this platform.',
            image: YummyImage,
            clientSideCode: 'https://github.com/mohammad-salim-23/Assignment-11-private-to-public',
            serverSideCode: 'https://github.com/mohammad-salim-23/Assignment-11-private-to-public-server',
            liveLink: 'https://assignment-11-client-1d064.web.app'
        },
        3: {
            title: 'Art & Crafts',
            description: 'Real Estate platform showcasing handcrafted art and crafts. Features include property listings, handmade paper sculptures, embroidered textiles, watercolor illustrations, and user authentication with MongoDB.',
            image: MountainImage,
            clientSideCode: 'https://github.com/mohammad-salim-23/Assignment-10-client-side',
            serverSideCode: 'https://github.com/mohammad-salim-23/Assignment-10-server-side',
            liveLink: 'https://assignment-10-400fe.web.app'
        }
    };

    const project = projectData[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={project.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt={project.title}
                />
                <div>
                    <h1 className="text-5xl font-bold">{project.title}</h1>
                    <p className="py-6">{project.description}</p>
                    <div className="py-6">
                        <p>
                            <strong>Client-side code: </strong>
                            <a href={project.clientSideCode} target="_blank" rel="noopener noreferrer">
                                {project.clientSideCode}
                            </a>
                        </p>
                        <p>
                            <strong>Server-side code: </strong>
                            <a href={project.serverSideCode} target="_blank" rel="noopener noreferrer">
                                {project.serverSideCode}
                            </a>
                        </p>
                        <p>
                            <strong>Live link: </strong>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                {project.liveLink}
                            </a>
                        </p>
                    </div>
                    <button className="btn bg-orange-400" onClick={() => window.open(project.liveLink, "_blank")}>
                        View Live Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
