import { FC } from "react";

interface Props {
    handleLogout: () => void;
    handleDelete: () => void;
}

const Header: FC<Props> = ({ handleLogout, handleDelete}) => {
    return (
      <>
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
      </>
    );
}
export default Header;