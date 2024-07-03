import { useNavigate } from "react-router-dom";
import Yummy from "../assets/images/Yummy.jpg"
import mountain from "../assets/images/mountain1.jpg"
const Project = () => {
    const navigate = useNavigate();
    const handleViewDetails = (id)=>{
        navigate(`/project-details/${id}`);
    };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?t=st=1720010106~exp=1720013706~hmac=376cc74766a6906415641847103f463b95b4db5600540f573e30e1aa80308026&w=900"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Educational</h2>
            <p>
              Welcome to 3 Idiots Academy, an online educational platform that
              connects learners with courses and instructors worldwide.
            </p>
            <div className="card-actions">
              <button onClick={()=>handleViewDetails(1)} className="btn bg-green-500">View Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={Yummy}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Restaurant Management</h2>
            <p>
            This project is an online platform that serves both buyers and sellers in the restaurant industry. Buyers can make purchases, while sellers can list their items for sale. Additionally, anyone interested in selling something can also advertise their products on this platform.
            </p>
            <div className="card-actions">
            <button onClick={()=>handleViewDetails(2)} className="btn bg-green-500">View Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={mountain}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Art & Crafts</h2>
            <p>
            A Real Estate platform showcasing handcrafted art and crafts. Features include property listings, handmade paper sculptures, embroidered textiles, watercolor illustrations, and user authentication with MongoDB.
            </p>
            <div className="card-actions">
            <button onClick={()=>handleViewDetails(3)} className="btn bg-green-500">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
