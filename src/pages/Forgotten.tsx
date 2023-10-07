const Forgotten = () => {
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
          //   defaultValue={FormData.email}
          //   onChange={handleChange}
        />
        {/* {resetEmailSent ? (
          <p className="forgot-error-1">
            Password reset email sent successfully! Check your email.
          </p>
        ) : (
          <>
            <button
          className="inline-block shadow-sm shadow-black shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            onClick={() => handleForgotPassword(formData.email)}
        >
          Reset Password
        </button>
            {resetEmailError && (
              <p className="forgot-error-2">{resetEmailError}</p>
            )}
          </>
        )} */}
      </section>
    </>
  );
};
export default Forgotten;
