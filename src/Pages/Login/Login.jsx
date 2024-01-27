/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setLoading, signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // form functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Handle Submit
  const onSubmit = (data) => {
    // Sign In User
    signIn(data.email, data.password)
      .then((result) => {
        console.log('Navigating to:', location?.state ? location.state : '/');
        navigate(location?.state ? location.state : '/');
        swal('Good job!', 'User logged Successfully', 'success');
      })
      .catch((error) => {
        const errorMSg = error.message;
        toast.error(errorMSg);
        setLoading(false);
        e.target.reset();
      });
  };

  // Google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          phone: result.user?.phoneNumber ? result.user.phoneNumber : 'N/A',
          email: result.user?.email,
          photoURL: result.user?.photoURL,
          role: 'user',
        };
        axiosPublic.post('/api/v1/users', userInfo).then((res) => {
          console.log(res.data);
          navigate(location?.state ? location.state : '/');
          swal('Good job!', 'User logged Successfully', 'success');
        });
      })
      .catch((error) => {
        const errormsg = error.message;
        toast.error(errormsg);
      });
  };

  // Github sign in
  const handleGithubSignIn = () => {
    signInWithGithub().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        phone: result.user?.phoneNumber ? result.user.phoneNumber : 'N/A',
        email: result.user?.email,
        photoURL: result.user?.photoURL,
        role: 'user',
      };
      axiosPublic.post('/api/v1/users', userInfo).then((res) => {
        console.log(res.data);
        navigate(location?.state ? location.state : '/');
        swal('Good job!', 'User logged Successfully', 'success');
      });
    });
  };

  return (
    <div>
      <div
        className="flex justify-center items-center font-lora text-[#333] h-full min-h-screen p-4"
        style={{
          backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold ">Sign in</h3>
            </div>
            {/* email  */}
            <div>
              <div className="relative flex items-center">
                <MdOutlineEmail className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="bg-transparent w-full text-sm border-b border-[#333] px-1 lg:px-2 py-3 outline-none placeholder:text-[#333]"
                  placeholder="Enter Email"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 font-medium">This field is required</span>
              )}
            </div>
            {/* password */}
            <div className="mt-8">
              <div className="relative flex items-center">
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye className="text-2xl"></AiOutlineEye>
                  )}
                </span>
                <input
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/,
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="bg-transparent w-full text-sm border-b border-[#333] px-1 lg:px-2 py-3 outline-none placeholder:text-[#333]"
                  placeholder="Enter Password"
                />
              </div>
              {errors.password?.type === 'required' && (
                <span className="text-red-500 font-medium">This field is required</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-500 font-medium">
                  Password Must be at least 6 character
                </span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span className="text-red-500 font-medium">
                  Password can`t be more than 20 character
                </span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-500 font-medium">
                  Password have at least one lowercase,uppercase,special character and number
                </span>
              )}
            </div>
            {/* remember and forget password */}
            <div className="flex items-center justify-between gap-2 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a className="text-sm font-semibold hover:underline">Forgot Password?</a>
              </div>
            </div>
            {/* Button And Linked to Register Page */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-sm text-center mt-6">
                Don`t have an account{' '}
                <Link
                  to="/register"
                  className="font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register Here
                </Link>
              </p>
            </div>
            <hr className="my-6 border-gray-500" />

            {/* social button */}
            <div className="space-x-8 flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="border-none outline-none"
              >
                <FcGoogle className="text-4xl"></FcGoogle>
              </button>
              <button
                onClick={handleGithubSignIn}
                type="button"
                className="border-none outline-none"
              >
                <ImGithub className="text-4xl"></ImGithub>
              </button>
              <button type="button" className="border-none outline-none">
                <BsFacebook className="text-4xl  text-sky-700 font-bold"></BsFacebook>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
