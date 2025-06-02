function Error404() {
  return (
    <>
      <img
        className="h-full w-full z-[-1] blur-sm sm:blur-md fixed top-0 left-0 right-0 bottom-0 bg-cover"
        src="/404.webp"
        alt=""
      />
      <main className="min-h-full flex flex-col items-center justify-center p-6 overflow-hidden">
        <h1 className="text-3xl sm:text-5xl text-white font-bold text-center my-12 text-wrap">
          If you want it,
        </h1>
        <h1 className="text-3xl sm:text-5xl text-white font-bold text-center my-6 text-wrap">
          then you'll have to take it.
        </h1>
        <h1 className="text-3xl sm:text-5xl text-white font-bold text-center my-6 text-wrap">
          But you already knew that.
        </h1>
        <h3 className="text-base shadow-md bg-red-700 p-2 px-4 rounded-md text-white fixed bottom-25">
          Error 404
        </h3>
      </main>
    </>
  );
}

export default Error404;
