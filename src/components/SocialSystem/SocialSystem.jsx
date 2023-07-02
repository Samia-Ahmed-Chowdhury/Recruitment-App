'use client'
import React from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

function SocialSystem() {
    // const { setUserName, setUserEmail, setPhotoUrl, googleHandler } = useContext(AuthContext)
     const googleBtnClicked = () => {
    //     googleHandler()
    //       .then((result) => {
    //         // The signed-in user info.
    //         const user = result.user.displayName;
    //         setPhotoUrl(result.user?.photoURL)
    //         setUserEmail(result.user?.email)
    //         setUserName(user)
    //         navigate(from);
    
    //       }).catch((error) => {
    //         // Handle Errors here.
    //         const errorMessage = error.message;
    //         console.log(errorMessage)
    //       });
     }
    
     const githubBtnClicked = () => {
    //     githubHandler()
    //     .then((result) => {
    //         // The signed-in user info.
    //         const user = result.user.displayName;
    //         setPhotoUrl(result.user?.photoURL)
    //         setUserEmail(result.user?.email)
    //         setUserName(user)
    //         navigate(from);
    
    //       }).catch((error) => {
    //         // Handle Errors here.
    //         const errorMessage = error.message;
    //         console.log(errorMessage)
    //       });
     }
    return (
        <>
            <div className='my-8 flex flex-col lg:flex-row gap-3 justify-center mx-5'>
                <button onClick={googleBtnClicked} className='btn btn-outline btn-success hover:bg-success'><FaGoogle className='text-lg me-1' />Login With Google</button>
                <button onClick={githubBtnClicked} className='btn btn-outline hover:btn'><FaGithub className='text-lg me-1' />Login With Github</button>

            </div>
        </>
    )
}

export default SocialSystem