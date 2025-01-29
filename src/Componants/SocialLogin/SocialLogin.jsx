import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                	console.log(res.data)
                    navigate("/");
            })
        })
        .catch(err=>{
            console.error(err);
        })
    }
    return (
        <div className='flex gap-6 justify-center items-center mt-2'>
            <button onClick={handleGoogleSignIn} className='text-lg border-2 rounded-full p-1 text-center cursor-pointer'><FaFacebookF></FaFacebookF></button>
            <button className='text-lg border-2 rounded-full p-1 text-center cursor-pointer'><FaGoogle></FaGoogle></button>
            <button className='text-lg border-2 rounded-full p-1 text-center cursor-pointer'><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLogin;