const HeroArea = ({ dictionary }: { dictionary: Content }) => {
  return (
    <div className="bg-white mx-10 text-gray-900 h-screen">
      <div className="max-w-4xl mx-auto p-8 border-2 border-double rounded-sm shadow-md shadow-gray-100">
        <div className="flex flex-col items-center mt-8 ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {dictionary?.home.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl my-16">
            {dictionary?.home.description.part1}
          </p>
        </div>
        <div className="flex justify-center items-end mb-8">
          <img
            src="https://img.goodfon.com/original/1920x1080/2/ac/lorenzo-lanfranconi-artist-sailing-ship-ship-storm-waves-sai.jpg"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export { HeroArea };
