import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
// import useAxios from "../../Hooks/useAxios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CreateAProduct = () => {
  const { user } = useAuth();
//   const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const minPrice = e.target.min_price.value;
    const maxPrice = e.target.max_price.value;
    console.log(title, image, minPrice, maxPrice);
    const newProduct = {
      title,
      image,
      minPrice,
      maxPrice,
      email: user.email,
      seller_name: user.displayName,
    };

    // axios.post("https://smart-deals-server-jwt-three.vercel.app/products", newProduct).then((data) => {
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your Product has been created",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });



    axiosSecure.post('/products', newProduct)
    .then(data => {
        console.log(data.data);
    })




  };

  return (
    <div className="w-3/5 mx-auto">
      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input type="text" name="title" className="input" />
          {/* image url */}
          <label className="label">Image URL</label>
          <input type="text" className="input" name="image" />
          {/* min amount */}
          <label className="label">Min Amount</label>
          <input
            type="number"
            name="min_price"
            className="input"
            placeholder="min amount"
          />
          {/* max ammount */}
          <label className="label">Max Amount</label>
          <input
            type="number"
            name="max_price"
            className="input"
            placeholder="max amount"
          />
          <button className="btn btn-neutral mt-4">Please your bid</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
