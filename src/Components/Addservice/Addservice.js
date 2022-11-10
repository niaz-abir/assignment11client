import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import useTitle from "../../hooks/usetitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addservice = () => {
  const [service, setservice] = useState([]);
  const [loading, setloaing] = useState(false);
  //   const notify = () => toast("Wow so easy!");
  useTitle("Service");
  useEffect(() => {
    setloaing(true);
    setTimeout(() => {
      setloaing(false);
    }, 1000);
  }, []);

  const handleadd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const details = form.details.value;
    // console.log(name, img, price, details);

    const newadd = {
      name,
      img,
      price,
      details,
    };
    fetch("https://assignment11-server-one.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newadd),
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.acknowledged > true) {
          toast.success("added success");
          form.reset();
        }
      });
  };
  return (
    <div>
      {loading ? (
        <FadeLoader
          color={"#f4acb7"}
          loading={loading}
          className="flex  mx-auto"
          size={60}
        ></FadeLoader>
      ) : (
        <div className="flex mx-auto justify-center w-1/2 lg:w-1/2">
          <div className="w-3/4">
            <form onSubmit={handleadd} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">img</span>
                </label>
                <input
                  type="img"
                  placeholder="img"
                  name="img"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="details"
                  placeholder="details"
                  name="details"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6 w-2/4 gap-4 flex mx-auto">
                <button className="btn bg-purple-500 hover:bg-pink-500 border-0">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addservice;
