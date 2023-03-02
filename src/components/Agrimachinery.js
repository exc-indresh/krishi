import React, {useState} from 'react'

export const Agrimachinery = ({addAgri}) => {
    const [fstName, setfstName] = useState("");
    const [lstName, setlstName] = useState("");
    const [emailId, setemailId] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [address, setaddress] = useState("");
    const [District, setDistrict] = useState("");
    const [state, setstate] = useState("");
    const [machine, setmachine] = useState("");
    const [NumberofMachine, setNumberofMachine] = useState(0);
  
    const submit=(e)=>{
      e.preventDefault();
      if(!fstName|| !lstName|| !emailId|| !contactNo|| !address|| !District|| !state|| !NumberofMachine|| !machine){
        alert("Enter valid details");
      }
      else{
        addAgri(fstName,lstName,emailId,contactNo,address,District,state,NumberofMachine,machine);
        setfstName("");
        setlstName("");
        setcontactNo("");
        setaddress("");setDistrict("");setstate("");
        setNumberofMachine("");setmachine("");
      }
    }
  return (
    <>
     <div className='container my-5'>
     <h2>Apply for Agri AgriMachinery</h2>
    <form onSubmit ={submit} className="row g-3">
      
    <div className="col-md-6">
   <label htmlFor="fstName" className="form-label"></label>
    <input type="text" value={fstName} onChange={(e)=> setfstName(e.target.value)} className="form-control" placeholder="First Name"  id="fstName"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="lstName" className="form-label"></label>
    <input type="text" value={lstName} onChange={(e)=>setlstName(e.target.value)} className="form-control" placeholder="Last name"  id="lstName"/>
  </div>
   <div className="col-md-6">
   <label htmlFor="emailId" className="form-label"></label>
    <input type="email" value={emailId} onChange={(e)=>setemailId(e.target.value)} className="form-control" placeholder="Email"  id="emailId"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="contactNo" className="form-label"></label>
    <input type="Number" value={contactNo} onChange={(e)=>setcontactNo(e.target.value)}  className="form-control" placeholder="Contact Number" id="contactNo"/>
  </div>
  <div className="col-12">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control" id="address" placeholder="Residential address"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="District" className="form-label">District</label>
    <input type="text" value={District} onChange={(e)=>setDistrict(e.target.value)} className="form-control" placeholder="Your District" id="District"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="state" className="form-label">State</label>
    <select id="state"  value={state} onChange={(e)=>setstate(e.target.value)} className="form-select">
      <option selected>Choose...</option>
      <option>UttarPradesh</option>
      <option>MadhyaPradesh</option>
      <option>AndhraPradesh</option>
      <option>ArunachalPradesh</option>
      <option>Gujrat</option>
      <option>Maharashtra</option>
      <option>Rajasthan</option>
      <option>Bihar</option>
      <option>Punjab</option>
      <option>HimachalPradesh</option>
      <option>Haryana</option>
      <option>Delhi</option>
      <option>Uttarakhand</option>
      <option>Jammu&Kashmir</option>
      <option>WestBengal</option>
      <option>Goa</option>
      <option>Kerela</option>
      <option>Orrisa</option>
      <option>Jharkhand</option>
      <option>Telengana</option>
      <option>Karnataka</option>
      <option>Tamilnadu</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputZip" className="form-label">Pincode</label>
    <input type="text" className="form-control" placeholder="Enter Valid Six-Digit code" id="inputZip"/>
  </div>
  
  <div className="col-md-4">
    <label htmlFor="NumberofMachine" className="form-label">Number of Machines</label>
    <input type="text" value={NumberofMachine} onChange={(e)=>setNumberofMachine(e.target.value)} className="form-control" placeholder={NumberofMachine} id="NumberofMachine"/>
    
   </div>
   <div className="col-md-4">
    <label htmlFor="machine" className="form-label">Machines you Required</label>
    <select id="machine" value={machine} onChange={(e)=>setmachine(e.target.value)}  className="form-select">
      <option selected>Choose...</option>
      <option>Soil/land preparation</option>
      <option>Sowing</option>
      <option>Manuring</option>
      <option>Irrigation</option>
      <option>Protecting the weeds/Crops</option>
      <option>Harvesting</option>
      <option>Weeding</option>
      <option>Crop Storage</option>
      </select>
    
   </div>
  
  <div className="col-12">
    <button type="submit"  className="btn btn-primary">Apply</button>
  </div>
</form>
    </div>
    </>
  )
  
}

export default Agrimachinery
