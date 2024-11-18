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

setFormadate('')
  }
  return (
    <>
  <div className="bg-customGreen flex items-center justify-center h-screen">
  <form onSubmit={infoform}>
    <div className="max-w-[720px] p-6 bg-white grid grid-cols-1 gap-4 items-center rounded-lg h-128">
      <h2 className="text-lg font-bold">Contact US</h2>
      
      {/* Campos First Name y Last Name en paralelo */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name <span className="text-botonColor">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdate.name}
            onChange={handleChange}
            className="border-2 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name <span className="text-botonColor">*</span></label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formdate.lastname}
            onChange={handleChange}
            className="border-2 rounded p-2"
          />
        </div>
      </div>
      
      {/* Campo Email */}
      <div className="flex flex-col">
        <label htmlFor="emailAdress">Email Address <span className="text-botonColor">*</span></label>
        <input 
          type="email"
          id="mail"
          name="mail"
          value={formdate.mail}
          onChange={handleChange}
          className="border-2 rounded p-2"
        />
      </div>
      
      {/* Campo Query Type */}
      <label htmlFor="queryType">Query Type <span className="text-botonColor">*</span></label>
      <div className="flex space-x-4">
        <div className="" >
        <input
          type="radio"
          onChange={handleChange}
          value="General Enquiry"
          name="option"
          id="option2"
         className="border-custom"
        />
        </div>
        <div>
        <label htmlFor="generalEnquiry">General Enquiry</label>
        
        <input
          type="radio"
          onChange={handleChange}
          value="Support Request"
          name="option"
          id="option1"
        />
        <label htmlFor="supportRequest">Support Request</label>
        </div>
      </div>
      
      {/* Campo Message */}
      <div className="flex flex-col">
        <label htmlFor="message">Message <span className="text-botonColor">*</span></label>
        <textarea
          id="message"
          name="message"
          rows="3"
          cols="10"
          value={formdate.message}
          onChange={handleChange}
          className="border-2 rounded p-2"
        ></textarea>
      </div>
      
      {/* Consent */}
      <div className="flex space-x-4 items-center">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="Checked"
          onChange={handleChange}
        />
        <label htmlFor="consent">I consent to being contacted by the team <span className="text-botonColor">*</span></label>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-botonColor rounded-md p-2 w-full text-white"
      >
        Submit
      </button>
    </div>
  </form>
</div>


    </>
  );
}

export default App;
