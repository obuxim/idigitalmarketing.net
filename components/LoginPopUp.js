import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext/AuthState';

const LoginPopUp = () => {
    const router = useRouter()
    const { userLogin, error, user, loading, userRegistration, successMessage } = useContext(AuthContext)
    console.log(userLogin);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')

    const submitLoginHandler = (e) => {
        e.preventDefault();
        userLogin(username, password);
    };

    const submitRegisterHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            userRegistration(username, email, password);
        }
    };

    // useEffect(() => {
    //     if (user) {
    //         router.push('/')
    //     }
    // }, [user])
    

    
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };

    return (
        <div className="modal login fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="loginModalLabel">Log in & Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="nav nav-tabs nav-tabs-02 justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false"> <span> Log in</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="true"><span>Register</span></a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <form className="form-row my-4 align-items-center" onSubmit={submitLoginHandler}>
                            {error && <p style={{color: '#e52d2d', textAlign: 'left'}}>
                                    <div
                                        dangerouslySetInnerHTML={createHTML(
                                        error
                                        )}
                                    ></div>
                                </p>}
                            <div className="form-group col-sm-12">
                                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="form-group col-sm-12">
                                <input type="Password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="col-sm-6">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                                <li className="mr-1"><a className="text-dark" href="#"><b>Already Registered User? Click here to login</b></a></li>
                                </ul>
                            </div>
                            </form>
                            <div className="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded-sm">
                            <div className="mb-4 d-block text-center"><b className="bg-white pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
                                <form className="row">
                                    <div className="col-sm-6">
                                        <a className="btn facebook-bg social-bg-hover d-block mb-3" href="#"><span><i className="fab fa-facebook-f mr-2"></i>Login with Facebook</span></a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a className="btn twitter-bg social-bg-hover d-block mb-3" href="#"><span><i className="fab fa-twitter mr-2"></i>Login with Twitter</span></a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a className="btn instagram-bg social-bg-hover d-block mb-3 mb-sm-0" href="#"><span><i className="fab fa-instagram mr-2"></i>Login with Instagram</span></a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a className="btn linkedin-bg social-bg-hover d-block" href="#"><span><i className="fab fa-linkedin-in mr-2"></i>Login with Linkedin</span></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                            <form className="form-row my-4 align-items-center" onSubmit={submitRegisterHandler}>
                                    {error && <p style={{ color: '#e52d2d', textAlign: 'left' }}>
                                        <div
                                            dangerouslySetInnerHTML={createHTML(
                                                error
                                            )}
                                        ></div>
                                    </p>}
                                    {successMessage && <p style={{ color: '#5cb85c', textAlign: 'left' }}> {`${successMessage} please login`} Login </p>}
                                    {message && <p style={{ color: '#e52d2d', textAlign: 'left' }}> {message} </p>}
                                <div className="form-group col-sm-12">
                                        <input type="text" className="form-control" placeholder="Username" value={username}
                                            onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="form-group col-sm-12">
                                        <input type="email" className="form-control" placeholder="Email Address" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group col-sm-12">
                                        <input type="Password" className="form-control" placeholder="Password" value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group col-sm-12">
                                        <input type="Password" className="form-control" placeholder="Confirm Password" value={confirmPassword}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="col-sm-6">
                                    <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                                    <li className="mr-1"><a className="text-dark" href="#"><b>Already Registered User? Click here to login</b></a></li>
                                    </ul>
                                </div>
                            </form>
                            <div className="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded-sm">
                                <div className="mb-4 d-block text-center"><b className="bg-white pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
                                    <form className="row">
                                        <div className="col-sm-6">
                                            <a className="btn facebook-bg social-bg-hover d-block mb-3" href="#"><span><i className="fab fa-facebook-f mr-2"></i>Login with Facebook</span></a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a className="btn twitter-bg social-bg-hover d-block mb-3" href="#"><span><i className="fab fa-twitter mr-2"></i>Login with Twitter</span></a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a className="btn instagram-bg social-bg-hover d-block mb-3 mb-sm-0" href="#"><span><i className="fab fa-instagram mr-2"></i>Login with Instagram</span></a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a className="btn linkedin-bg social-bg-hover d-block" href="#"><span><i className="fab fa-linkedin-in mr-2"></i>Login with Linkedin</span></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopUp;