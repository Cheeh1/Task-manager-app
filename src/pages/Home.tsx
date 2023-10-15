import { getAuth, signOut, deleteUser } from "firebase/auth";
import { useTaskData } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const { register, handleSubmit, onSubmit } = useTaskData();
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const auth = getAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged Out Successfully");
      toast.success("Logged Out Successfully");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error logging out:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };

  const handleDelete = async () => {
    // Show the delete confirmation modal
    setModal(true);
  };

  const confirmDelete = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await deleteUser(auth.currentUser);
        console.log("Account deleted successfully");
        toast.success("Account Deleted Successfully");

        setTimeout(() => {
          navigate("/register");
        }, 2000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error deleting account:", error.message);
        // Close the modal
        setModal(false);
      } else {
        console.log("unknown error:", error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Header handleDelete={handleDelete} handleLogout={handleLogout} />
      <main>
        <section className="flex flex-col items-center py-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Task Title</label>
              <input
                {...register("title")}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Description</label>
              <input
                {...register("description")}
                type="text"
                name="description"
                id="description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Date</label>
              <input {...register("date")} type="date" name="date" id="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Time</label>
              <input type="time" {...register("time")} name="time" id="time" />
            </div>
            <button className="bg-blue-500 font-medium text-gray-100 p-3 rounded-lg">
              Add Task
            </button>
          </form>
        </section>
      </main>
      <Footer />

      <Modal
        visible={modal}
        onClose={() => setModal(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};
export default Home;
