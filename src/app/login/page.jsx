'use client'
import React, { useContext, useState } from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Image from 'next/image';
import SocialSystem from '@/components/SocialSystem/SocialSystem';
import Swal from 'sweetalert2';
import { AuthContext } from '@/provider/AuthProvider';

function page() {

    const { setUserName, setUserEmail, setPhotoUrl, googleHandler, githubHandler, logInUser, updateUserProfile, updateUserPassWord } = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        const email = data.email
        const password = data.password
        logInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                updateUserProfile(user.displayName)
                    .then(() => {
                        setUserName(user.displayName);
                        setUserEmail(user.email)
                        setPhotoUrl(user.photoURL)
                        Swal.fire(
                            'Login successful (^_^)',
                            'But This project is under construction !!.. ',
                            'success'
                          )
                    }).catch((error) => {
                        const errorMessage = error.message;
                        setError(errorMessage)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    return (
        <div className='grid md:grid-cols-[.9fr,1fr] gap-10 my-16 lg:mx-16 mx-5'>
            <div>
                <p className='text-lg font-bold text-center text-primaryColor'>Login With Social : </p>
                <SocialSystem />
                <div className='w-full'>
                    <Image src="/login.svg" alt='logo' width={400} height={400} className='mx-auto' priority />
                </div>
            </div>
            <div className='text-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='md:w-3/4 px-10 mb-6 mt-2 shadow-xl pt-16 py-12  mx-auto rounded-lg'>
                    <h2 className='text-3xl font-semibold'>Please Login </h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="bg-[#E8F0FE] input w-full  " />
                        {errors.email?.type === 'required' && <p role="alert" className='text-red-700'>email is required</p>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type={showPass ? 'text' : 'password'} name="password"
                            {...register("password", { required: true })}
                            placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full " />
                        {
                            showPass ?
                                <FaEye onClick={() => setShowPass(!showPass)} className="absolute  top-[60%] right-1/4" />
                                : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-[60%] right-1/4" />
                        }
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    </div>

                    <div className='my-6'>
                        <button className='my_button' type="submit" variant="dark">Login</button>
                    </div>
                    <p className='text-lg font-medium my-5'>Dont’t Have An Account ? <Link className='font-medium text-[#9774FF]' href='/signup'>Register</Link></p>
                </form>
            </div>

        </div>
    )
}

export default page