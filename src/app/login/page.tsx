'use client'
import Link from 'next/link'
import React, { useState } from 'react'




function page() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



const handleSubmit =(e:any)=>{
// e.prevent.value();
console.log(`email:${email},password:${password}`);
}

  return (
    <div>
      <div className="w-full max-w-sm mx-auto overflow-hidden  mt-48 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

            <div className="w-full mt-4">
                <input onChange={(e)=>setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" id='email' value={email} name='email' aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input onChange={(e)=>setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" id='password' name='password' value={password} aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <Link href={"/forget_password"} className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>

                <button onClick={handleSubmit} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        {/* </form> */}
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <Link href={"/register"} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
    </div>
</div>
    </div>
  )
}

export default page
