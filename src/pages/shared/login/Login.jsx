import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextProvier } from '../../../private/provider/Provider';

const Login = () => {
    const { emailLogIn, signInWithGoogle, setUser } = useContext(contextProvier)
    const userUpdate = (name, email, password, img) => {

    }
    let name, email, password, img;
    const loginWithEmail = (e) => {
        e.preventDefault()
        email = e.target.email.value;
        password = e.target.password.value;
        emailLogIn(email, password).then(res => {
            let user = res.user;
            setUser(user)
        })
    }
    const loginWithGoogle = () => {
        signInWithGoogle().then(res => {
            let user = res.user;
            setUser(user)
        })
    }
    return (
        <div className='md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-1">
                        <form onSubmit={loginWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link to={'/register'} className='text-sm underline'>Dont have an acount ? Register ?</Link>
                        </form>
                        <button className='btn btn-warning capitalize' onClick={loginWithGoogle}> Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;