import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Para resetear el formulario
  } = useForm();

  // Función que maneja el submit del formulario
  const infoform = (data) => {
    console.log(data);

    // Resetea el formulario después de submit
    reset();
  };

  return (
    <>
      <div className="bg-customGreen flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit(infoform)}>
          <div className="max-w-[720px] p-6 bg-white grid grid-cols-1 gap-4 items-center rounded-lg">
            <h2 className="text-[1.5rem] font-bold">Contact US</h2>

            {/* Campos First Name y Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName">
                  First Name <span className="text-botonColor">*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`border-2 p-2 rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && (
                  <p className="text-red-500 flex items-center">
                    <ExclamationCircleIcon className="w-5 h-5 mr-2" /> {/* Ícono */}
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">
                  Last Name <span className="text-botonColor">*</span>
                </label>
                <input
                  type="text"
                  {...register("lastname", { required: "Last name is required" })}
                  className={`border-2 p-2 rounded ${errors.lastname ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.lastname && (
                  <p className="text-red-500 flex items-center">
                    <ExclamationCircleIcon className="w-5 h-5 mr-2" /> {/* Ícono */}
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            {/* Campo Email */}
            <div className="flex flex-col">
              <label htmlFor="emailAdress">
                Email Address <span className="text-botonColor">*</span>
              </label>
              <input
                type="email"
                {...register("mail", { required: "Email is required" })}
                className={`border-2 p-2 rounded ${errors.mail ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.mail && (
                <p className="text-red-500 flex items-center">
                  <ExclamationCircleIcon className="w-5 h-5 mr-2" /> {/* Ícono */}
                  {errors.mail.message}
                </p>
              )}
            </div>

            {/* Campo Message */}
            <div className="flex flex-col">
              <label htmlFor="message">
                Message <span className="text-botonColor">*</span>
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="3"
                className={`border-2 p-2 rounded ${errors.message ? "border-red-500" : "border-gray-300"}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 flex items-center">
                  <ExclamationCircleIcon className="w-5 h-5 mr-2" /> {/* Ícono */}
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Consent */}
            <div className="flex items-start flex-col sm:flex-row sm:space-x-4">
              <input
                type="checkbox"
                {...register("checkbox", { required: "Consent is required" })}
              />
              <label htmlFor="consent" className="sm:pl-2">
                I consent to being contacted by the team{" "}
                <span className="text-botonColor">*</span>
              </label>
            </div>
            {errors.checkbox && (
              <p className="text-red-500 flex items-center">
                <ExclamationCircleIcon className="w-5 h-5 mr-2" /> {/* Ícono */}
                {errors.checkbox.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-botonColor rounded-md p-2 w-full text-white max-w-full"
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