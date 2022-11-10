import React, { useContext, useState } from "react";
import { Authcontext } from "../Context/Authprovide";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/usetitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviewcard = ({ review }) => {
  const { user } = useContext(Authcontext);
  const notify = () => toast("Your item is Deleted");

  useTitle("Review");
  const [displareview, setdisplayreview] = useState(review);

  const handledelte = (_id) => {
    const agree = window.confirm("Are you sure you want delete it?");
    if (agree) {
      fetch(
        `https://assignment11-server-one.vercel.app/reviews/${review._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // <div>
            //   <button onClick={notify}>Notify!</button>
            //   <ToastContainer />
            // </div>;
            toast.success("added success");
          }
          console.log(data);
          const remaining = displareview.filter(
            (usr) => usr._id !== review._id
          );
          setdisplayreview(remaining);
        });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card w-80 gap-4 shadow-xl shadow-pink-300">
        <div className="card-body">
          <h2 className="card-title">{displareview.customer}</h2>
          <p>rating :{displareview.rating}</p>
          <p>message :{displareview.message}</p>

          <div className="card-actions justify-end">
            <Link to={`/edit/${displareview._id}`}>
              <button className="btn btn-outline">edit</button>
            </Link>
            <button
              onClick={() => handledelte(displareview._id)}
              className="btn btn-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
