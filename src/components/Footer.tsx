const Footer = () => {
    return (
      <>
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
      </>
    );
}
export default Footer