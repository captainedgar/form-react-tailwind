import { useState } from "react";



function App() {

const [formdate, setFormadate] = useState({
  name: '',
  lastname: '',
  mail:'',
  message: '',
  checkbox: '',
  option: ''
 
})
const handleChange = (e)=>{
  const {name, value} = e.target;

  setFormadate({
   ...formdate, [name]: value
   })
}
  const infoform=(e)=>{
   
e.preventDefault()
console.log(formdate);
  }
  return (
    <>
    <form onSubmit={infoform}>
    
    <div className="max-w-[720px] p-6 my-9 bg-slate-300  grid grid-cols-1 gap-2 items-center justify-center h-screen rounded-lg  ">
    <h2 className="text-lg font-bold ">Contact US</h2>
    <div className="flex space-x-4">
    <label htmlFor="firstName">First Name <span>*</span></label>
      <input type='text' id="name" name="name" value={formdate.name} onChange={handleChange}  className="border-4"/>
    <label htmlFor="lastName" >Last Name <span>*</span></label>
    
      <input type="text" id="lastname" name="lastname" onChange={handleChange} value={formdate.lastname}/>
      </div>
      <label htmlFor="emailAdress">Email Adress <span>*</span></label>
      <input type="email"id="mail" name="mail" onChange={handleChange}  value={formdate.mail}/>
      <label htmlFor="queryType">Query Type <span>*</span></label>
      <div className="flex space-x-4">
      
      
      <input type="radio"  onChange={handleChange}  value="General Enquiry" name="option" id="option2"/>
      <label htmlFor="generalEnquiry">General Enquiry</label>
     
      
     
      <input type="radio" onChange={handleChange} value="Support Requeest" name="option" id="option1" />
      <label htmlFor="suportRequest">Suport Request</label>
     
      </div>
    
      <label htmlFor="message">Message <span>*</span></label>
      <textarea onChange={handleChange} id="message" value={formdate.message} name="message" rows='3' clols="10"></textarea>
      <div  className="flex space-x-4" >
      <input type="checkbox" id="checkbox"   onChange={handleChange} value='Checked' name="checkbox"/>

      <label htmlFor="consent">I consent to being contacted by the team *</label>
      </div>
      <button type="submit">Submit</button>
      </div>
      </form>
    </>
  );
}

export default App;
