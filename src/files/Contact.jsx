import React, {useState,useEffect} from "react";
import { useDispatch } from 'react-redux';
import { showData } from "../actions/index";


const Contact = ()  => {
    const[data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
    const dispatch = useDispatch();

   
    useEffect(() => {
        localStorage.setItem('myData',JSON.stringify(data));
    },[data])
  
    const InputEvent = (e) =>{
       const {name, value} = e.target;
       setData((preVal) => {
           return{
               ...preVal,
               [name] : value,
               
           }
       })
    }
    const formSubmit= (e) =>{
     e.preventDefault();
    //  localStorage.setItem('myData');
     alert(`My name is ${data.fullname}. My mobile number is ${data.phone}
     my email is ${data.email} Here is what T want to say ${data.msg}`)
    }
    return(
<>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} onClick={() => dispatch(showData(data))}>
            <div className="mb-3">
  <label  className="form-label">FullName</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter you name" required />
</div>

<div className="mb-3">
  <label  className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="Mobile number" required />
</div>
<div className="mb-3">
  <label  className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="seacode@example.com"  required/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="msg"
  value={data.msg}
  onChange={InputEvent}  required></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
        </div>
    </div>

</div>
</>
    );
}
export default Contact;