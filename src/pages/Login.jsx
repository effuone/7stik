import React, { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../context"
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email, setEmail] = useState("1")
    const [password, setPassword] = useState("1")
    const login = event => {
        console.log(email, password)
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
 return(
     <div className="d-flex justify-content-center">
         <form onSubmit={login}>
        <h3>Sign In</h3>
        <div className="mt-5">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onInput={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onInput={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
     </div>
 )
}
export default Login