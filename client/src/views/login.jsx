import React from 'react'

export default function Login() {
    return (
        <div className="container par_div" >
             <div className = "child_div p-4 border" >

            <form>
                <div className="form-group pt-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group pt-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check pt-2">
                    <input type="checkbox" className="form-check-input" id="keepsignedin"/>
                    <label className="form-check-label" for="keepsignedin">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            </div>
        </div>
    )
}
