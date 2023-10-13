import { getAuth, signOut, deleteUser } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import errorImg from '../assets/error.png'

const Home = () => {
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
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, Barry!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's add a new Task 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border hover:bg-blue-500 hover:text-gray-100 bg-white px-5 py-3 text-blue-500 transition border-blue-500 focus:outline-none focus:ring"
                type="button"
                onClick={handleLogout}
              >
                <span className="text-sm font-medium"> Logout </span>
              </button>

              <button
                className="block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:border-blue-500 hover:border hover:text-blue-500 focus:outline-none focus:ring"
                type="button"
                onClick={handleDelete}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col items-center py-5">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Task Title</label>
              <input type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Description</label>
              <input type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Start Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Due Date</label>
              <input type="date" name="" id="" />
            </div>
            <button className="bg-blue-500 font-medium text-gray-100 p-3 rounded-lg">
              Add Task
            </button>
          </form>
        </section>
      </main>

      <footer>
        <footer className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-blue-500 sm:justify-start">
                <h1 className="font-bold text-4xl">Task Manager</h1>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2023. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </footer>

      <Rodal
        visible={modal}
        onClose={() => setModal(false)}
        animation="rotate"
        width={400}
      >
        <div className="flex flex-col gap-10">
          <div className="flex gap-5 items-start">
            <img className="w-5 mt-1" src={errorImg} alt="error" />
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-lg">Delete account</h1>
              <p className="font-normal text-gray-600">
                Are you sure you want to delete your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
          <div className=" flex justify-end gap-5">
            <button
              className="font-semibold border-2 border-gray-300 rounded-lg py-1 px-3"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              className="font-semibold bg-blue-500 text-white border rounded-lg py-1 px-3"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </Rodal>
    </>
  );
};
export default Home;
