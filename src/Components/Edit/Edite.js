// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";

// const Edite = () => {
//   const storeuser = useLoaderData();
//   const [user, setuser] = useState({ storeuser });

//   const handleupdate = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const names = form.name.value;
//     const rating = form.rating.value;
//     const message = form.message.value;

//     // console.log(names, rating, message);

//     fetch(`http://localhost:5000/reviews/${storeuser._id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };
//   return (
//     <div>
//       <h1>Edit:{storeuser.customer}</h1>

//       <div className="hero  ">
//         <div className="hero-content flex-col ">
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
//             {/* <img src={user?.photoURL} alt=""></img> */}
//             <form onSubmit={handleupdate} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   defaultValue={storeuser.customer}
//                   className="input input-bordered"
//                 />
//               </div>
//               {/* <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">img</span>
//                 </label>
//                 <input
//                   type="img"
//                   placeholder="img"
//                   //   defaultValue={user?.photoURL}
//                   className="input input-bordered"
//                 />
//               </div> */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">rating</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="rating"
//                   name="rating"
//                   defaultValue={storeuser.rating}
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Your Complement</span>
//                 </label>
//                 <textarea
//                   className="textarea textarea-black"
//                   placeholder="..."
//                   name="message"
//                   defaultValue={storeuser.message}
//                 ></textarea>
//               </div>
//               <button className="btn btn-primary">submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edite;
