import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
}
const Forgotten = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleForgotPassword = async (email: string) => {
    const auth = getAuth();

    try {
      if (!email) {
        toast.error("Please provide a valid email address");
        return;
      }

      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully");
      console.log("Password reset email sent successfully");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("User Not Found");
        console.log("Error sending password reset email:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };
  return (
    <>
      <section className="flex flex-col items-center my-56 gap-4">
        <h1 className="text-3xl font-medium">Enter your email</h1>
        <input
          type="email"
          id="Email"
          name="email"
          placeholder="youremail@gmail.com"
          className="mt-1 w-72 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md placeholder:text-sm placeholder:text-gray-400 border-text-gray-900"
          defaultValue={formData.email}
          onChange={handleChange}
        />
        <button
          className="inline-block shadow-sm shadow-black shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          onClick={() => handleForgotPassword(formData.email)}
        >
          Reset Password
        </button>
      </section>
    </>
  );
};
export default Forgotten;
