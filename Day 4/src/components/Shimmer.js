const Shimmer = () => {
  const numberOfRepetitions = 6;

  const GenerateRepeatedDivs = () => {
    const repeatedDivs = [];
    for (let i = 0; i < numberOfRepetitions; i++) {
      repeatedDivs.push(
        <div key={i} className="card skin">
          <div className="skinImg"></div>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h3></h3>
          <h3></h3>
          <h4></h4>
        </div>
      );
    }
    return repeatedDivs;
  };

  return (
    <div className="flexContainer">
      <div className="search-container">
        <div className="skinInput"></div>
        <div className="skinBtn"></div>
      </div>
      <div className="repeatedDivs">
        <GenerateRepeatedDivs />
      </div>
    </div>
  );
};

export default Shimmer;
