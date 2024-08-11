import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCurd = ({ coffe,coffes,setCoffes }) => {
    const { _id,name, quantity, supplier, taste,photo } = coffe;
   
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`https://coffe-server-imafdwxmj-lucky-s-projects.vercel.app /coffe/${_id}`,{
                method:'DELETE',

              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                      const remaining = coffes.filter(cof=> cof._id !== _id)
                      setCoffes(remaining);
                    }
              })
            }
          });
    }
   
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between  w-full pr-4">
                <div>
                    <h2 className="card-title">Name:{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">view</button>
                        <Link to={`updateCoffe/${_id}`}>
                             <button className="btn btn-active">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)}
                         className="btn bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCurd;