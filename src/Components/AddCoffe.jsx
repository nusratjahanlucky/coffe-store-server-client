 
import Swal from 'sweetalert2'
const AddCoffe = () => {
    const handleAddCoffe = e =>{
        e.preventDefault ();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = {name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffe);

        fetch('https://coffe-server-imafdwxmj-lucky-s-projects.vercel.app /coffe',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffe)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.inseredId){
                Swal.fire({
                    title: 'success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Coffe</h2>
            <form onSubmit={handleAddCoffe}>
                {/**form name and Quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffe name"className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text"name="quantity" placeholder="Quantity"className="input input-bordered w-full" />
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
                            <input type="text" name="supplier" placeholder="Supplier"className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text"name="taste" placeholder="Taste"className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category name"className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text"name="details" placeholder="Details"className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL name"className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffe"  className="btn btn-block"/>
            </form>
        </div>
    );
};

export default AddCoffe;