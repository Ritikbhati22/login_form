import React, { useState } from "react";

function Form() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [entry, setEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newentry = { uname, email, password, number };
    setEntry([...entry, newentry]);
    console.log(entry);
  };
  return (
    <>
      <form action=" " onSubmit={submitForm} className="pt-20 text-center">
        <div className="pt-3 pl-3">
          <label htmlFor="uname" className="text-white font-serif pr-4">
            Name :
          </label>
          <input
            type="text"
            name="uname"
            id="uname"
            className="rounded-md font-serif pl-1"
            autoComplete="off"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          ></input>
        </div>
        <div className="pt-3 pl-3">
          {" "}
          <label htmlFor="email" className="text-white font-serif pr-4">
            Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md font-serif pl-1"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="pt-3 pl-2">
          {" "}
          <label htmlFor="number" className="text-white font-serif pr-4">
            Mobile :
          </label>
          <input
            type="text"
            name="number"
            id="number"
            className="rounded-md font-serif pl-1"
            autoComplete="off"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <div className="pt-3 ">
          {" "}
          <label htmlFor="password" className="text-white font-serif pr-2">
            Password :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-md font-serif pl-1"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="p-6 text-white">
          <a className="bg-slate-500 font-serif rounded-2xl p-2 pl-4 pr-4">
            <button type="submit">Submit</button>
          </a>
        </div>
      </form>
      <div className="text-center bg-gray-700 text-white p-10">
        <h1 className="text-xl text-white pb-5"><a className="bg-slate-500 p-1 rounded-md font-serif">User Data</a></h1>
        {entry.map((element) => {
          return (
            <div className="text-green-300 font-serif">
              <p className="pb-2">Name : {element.uname}</p>
              <p className="pb-2 pl-14">Email : {element.email}</p>
              <p className="pb-2">Number : {element.number}</p>
              <p className="pb-2">Password : {element.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Form;
