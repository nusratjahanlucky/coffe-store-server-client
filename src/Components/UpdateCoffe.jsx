import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {
    const coffe = useLoaderData();

   
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffe;
    
    const handleUpdateCoffe = e =>{
        e.preventDefault ();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffe = {name,quantity,supplier,taste,category,details,photo};
        console.log(updatedCoffe);

        fetch(`https://coffe-server-imafdwxmj-lucky-s-projects.vercel.app /coffe/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffe)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffe Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update Coffe:{name}</h2>
        <form onSubmit={handleUpdateCoffe}>
            {/**form name and Quantity row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name"defaultValue={name} placeholder="Coffe name"className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text"name="quantity"defaultValue={quantity} placeholder="Quantity"className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/**form row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier"defaultValue={supplier} placeholder="Supplier"className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2  ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text"name="taste"defaultValue={taste} placeholder="Taste"className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/**form row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category"defaultValue={category} placeholder="Category name"className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2  ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text"name="details"defaultValue={details} placeholder="Details"className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/**form photo url row */}
            <div className="mb-4">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo"defaultValue={photo} placeholder="Photo URL name"className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Coffe"  className="btn btn-block"/>
        </form>
    </div>
    );
};

export default UpdateCoffe;