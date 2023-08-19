const Shimmer = () => {
  return (
    <div className="flexContainer">
      <div className="search-container">
        <div className="skinInput"></div>
        <div className="skinBtn"></div>
      </div>
      <div className="repeatedDivs">
        {Array(10)
          .fill("")
          .map((e, index) => (
              <div key={index} className="card skin">
                <div className="skinImg"></div>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h3></h3>
                <h3></h3>
                <h4></h4>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
