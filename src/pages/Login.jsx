import React from "react";
import { TextField } from "@mui/material";
function Login() {
  return (
    <div className=" flex items-center justify-center mt-5">
      <main className="flex flex-col items-center justify-center w-9/12 border bg-blue-100 ">
        <div className="">
            <h1>Welcome to Travelecious</h1>
        </div>
        <form action="#" className="mt-8 ">
          <div className="col-span-6 sm:col-span-3">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </div>

          <div className="col-span-6">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="
                  border bg-black text-white rounded-md p-2
                  "
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <button className="text-gray-700 underline">Log in</button>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
