import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import UseAuth from '../../Hooks/UseAuth';

const SignUp = () => {
    const {createUser} = UseAuth();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, password};
        console.log(user);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            alert('user sign up successfully')
        })
        .catch(error => {
            console.error(error)
        })
    };
    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-success' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="divider">Or Sign In With</div>
                    <p className='text-center my-2'>All Ready Have an Account? <Link to='/login' className='text-[#ff3811] font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;