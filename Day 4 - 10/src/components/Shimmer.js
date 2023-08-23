const Shimmer = () => {
  return (
    <div className="flex-col">
      <div className="flex p-2 m-3 gap-3">
        <div className="bg-gray-400 w-52 h-8 rounded"></div>
        <div className="bg-gray-500 w-20 h-8 rounded"></div>
      </div>
      <div className="flex flex-wrap">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="flex flex-col w-52 gap-4 m-2 p-2 border-2 border-gray-400 rounded">
              <div className="w-full h-20 bg-gray-500"></div>
              <h2 className="w-full h-6 bg-gray-400"></h2>
              <h2 className="w-full h-6 bg-gray-400"></h2>
              <h2 className="w-2/3 h-6 bg-gray-400"></h2>
              <h3 className="w-full h-4 bg-gray-300"></h3>
              <h3 className="w-1/2 h-4 bg-gray-300"></h3>
              <h4 className="w-1/4 h-3 bg-gray-300"></h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
