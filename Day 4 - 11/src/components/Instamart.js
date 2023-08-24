import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-2xl">{title}</h1>
      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");

  const toggleSectionVisibility = (section) => {
    if(isVisibleSection === section) {
        setIsVisibleSection("");
    } else {
        setIsVisibleSection(section);
    }
  }
  return (
    <div>
      <h1 className="font-bold text-xl p-2 m-2">Instamart</h1>
      <Section
        title={"About"}
        description={
          "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commod"
        }
        isVisible={isVisibleSection === "about"}
        setIsVisible={() => toggleSectionVisibility("about")}
      />
      <Section
        title={"Products"}
        description={
          "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commod"
        }
        isVisible={isVisibleSection === "products"}
        setIsVisible={() => toggleSectionVisibility("products")}
      />
      <Section
        title={"Careers"}
        description={
          "lorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commodlorem ipsum dolor sit amet, consectetur adip nonum soc tempor inv sapient and non pro id est   laborum nisi ut aliquip ex ea commod iuismod nisi ut aliquip ex ea commod iuismod id est laborum nisi ut aliquip ex ea commod"
        }
        isVisible={isVisibleSection === "careers"}
        setIsVisible={() => toggleSectionVisibility("careers")}
      />
    </div>
  );
};

export default Instamart;
