import { getAuth, signOut, deleteUser } from "firebase/auth";
import { useTaskData } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskList from "../components/TaskList";

const Home = () => {
  const { register, handleSubmit, onSubmit, errors } = useTaskData();
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
      <Header handleDelete={handleDelete} handleLogout={handleLogout} />
      <main className="flex justify-evenly flex-col md:flex-row lg:flex-row">
        <section className="flex flex-col items-center py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-[700] text-xl">
                Task Title
              </label>
              <input
                {...register("title")}
                type="text"
                name="title"
                id="title"
                className="w-72 rounded-md shadow-md border focus:border-blue-500"
              />
              {errors.title && (
                <p className="text-[12px] text-red-500 font-medium">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-[700] text-xl">
                Description
              </label>
              <textarea
                // name="description"
                id="description"
                {...register("description")}
                className="rounded-md shadow-md border focus:border-blue-500"
              ></textarea>
              {errors.description && (
                <p className="text-[12px] text-red-500 font-medium">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="font-[700] text-xl">
                Date
              </label>
              <input
                {...register("date")}
                type="date"
                name="date"
                id="date"
                className="rounded-md shadow-md border focus:border-blue-500"
              />
              {errors.date && (
                <p className="text-[12px] text-red-500 font-medium">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="time" className="font-[700] text-xl">
                Time
              </label>
              <input
                type="time"
                {...register("time")}
                name="time"
                id="time"
                className="rounded-md shadow-md border focus:border-blue-500"
              />
              {errors.time && (
                <p className="text-[12px] text-red-500 font-medium">
                  {errors.time.message}
                </p>
              )}
            </div>
            <button className="bg-blue-500 font-medium text-lg text-gray-100 p-3 rounded-lg">
              Add Task
            </button>
          </form>
        </section>
        <TaskList />
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
