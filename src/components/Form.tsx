'use client';
export const Form = () => {
  return (
    <form
      action=""
      className="relative -mb-16 bg-dark-violet rounded-md p-8 md:px-14 md:py-10 bg-shorten grid md:grid-flow-col md:grid-cols-[1fr_auto] gap-10 md:gap-4"
    >
      <div className="grid relative">
        <input
          className="bg-white placeholder:text-grayish-violet tracking-wide px-8 py-3 rounded-md"
          placeholder="Shorten a link here..."
        />
        {/* <small className="absolute text-red italic top-full mt-1.5">Please add a link</small> */}
      </div>
      <button
        className="rounded-md md:w-fit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Shorten It!
      </button>
    </form>
  );
};
