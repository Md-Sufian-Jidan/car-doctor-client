import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import UseAuth from '../../Hooks/UseAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    // const { signIn } = useContext(AuthContext)
    const { signIn } = UseAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);
        signIn(email, password)
            .then(result => {
                alert('user login successfully');
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-purple-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="divider">Or Sign In With</div>
                    <p className='text-center my-2'>New To Cars Doctor? <Link to='/signUP' className='text-[#ff3811] font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;