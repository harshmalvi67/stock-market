import React from 'react';

export default function Registeration() {

    const Register = () => {
        
        console.log("I am in register button");
    }

    return (
        <div className="container par_div" >
             <div className = "child_div p-4 border" >

            <form>
                <div className="form-group pt-2">
                    <label for="Name">Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Enter Name"/>
                </div>
                <div className="form-group pt-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group pt-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check pt-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick = {Register}>Register</button>
            </form>
            </div>
        </div>
    )
}
