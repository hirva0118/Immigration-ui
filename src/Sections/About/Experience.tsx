import { useState } from "react";
import { Images } from "../../assets/pngs";
import { ReactComponent as OnlyArrow } from "../../assets/svgs//onlyArrow.svg";


type Country = {
  name: string;
  image: string;
};

type ContinentData = {
  [key: string]: Country[];
};

const continentData: ContinentData = {
  Asia: [
    { name: "India", image: Images.memory6 },
    { name: "China", image: Images.memory1 },
    { name: "Japan", image: Images.memory6 },
    { name: "Thailand", image: Images.memory5 },
    { name: "Indonesia", image: Images.memory6 },
    { name: "Vietnam", image: Images.memory6 },
  ],
  Europe: [
    { name: "Germany", image: Images.memory6 },
    { name: "France", image: Images.memory7 },
    { name: "Italy", image: Images.memory6 },
    { name: "Spain", image: Images.memory6 },
    { name: "Cyprus", image: Images.memory9 },
    { name: "Sweden", image: Images.memory6 },
  ],
  "North America": [
    { name: "USA", image: Images.memory5 },
    { name: "Canada", image: Images.memory6 },
    { name: "Mexico", image: Images.memory1 },
    { name: "Cuba", image: Images.memory6 },
    { name: "Panama", image: Images.memory6 },
    { name: "Jamaica", image: Images.memory7 },
  ],
  Australia: [
    { name: "Australia", image: Images.memory8 },
    { name: "Kiribati", image: Images.memory6 },
    { name: "Fiji", image: Images.memory9 },
    { name: "Palau", image: Images.memory6 },
    { name: "Samoa", image: Images.memory6 },
    { name: "Tonga", image: Images.memory1 },
  ],
  "Latin America": [
    { name: "Brazil", image: Images.memory5 },
    { name: "Argentina", image: Images.memory6 },
    { name: "Chile", image: Images.memory6 },
    { name: "Colombia", image: Images.memory1 },
    { name: "Peru", image: Images.memory6 },
    { name: "Ecuador", image: Images.memory8 },
  ],
  Africa: [
    { name: "Nigeria", image: Images.memory3 },
    { name: "Benin", image: Images.memory9 },
    { name: "Kenya", image: Images.memory6 },
    { name: "Egypt", image: Images.memory4 },
    { name: "Morocco", image: Images.memory6 },
    { name: "Ghana", image: Images.memory6 },
  ],
};

const Experience = () => {

    const [selectedContinent, setSelectedContinent] = useState<string>("North America");
  return (
    <div className="contain max-w-full pb-28 px-2 sm:px-8 xl:px-0">
      <div className="max-w-full w-full">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-darkGReen text-sm font-jakarta font-semibold">
            COUNTRIES CATEGORY
          </p>
          <p className="text-diffBlack text-5xl font-bold max-w-xl text-center leading-[3.5rem] pb-12">
            Experience the World Anew Unveil Hidden{" "}
          </p>
          <div className="flex lg:gap-7 w-full ">
            <div className="max-w-36 sm:max-w-64 lg:max-w-sm xl:max-w-[410px] w-full">
              <ul className="space-y-2">
                {Object.keys(continentData).map((continent) => (
                  <>
                    <div
                      onClick={() => setSelectedContinent(continent)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <li
                        key={continent}
                        className={`cursor-pointer px-3 sm:px-5 py-4 rounded-md ${
                          selectedContinent === continent
                            ? " text-darkGReen text-base xs:text-2xl font-jakarta font-bold"
                            : "text-darkGReen text-base xs:text-2xl font-jakarta font-bold opacity-30"
                        }`}
                        onClick={() => setSelectedContinent(continent)}
                      >
                        {continent}
                      </li>
                      <div className="mr-16">
                        <OnlyArrow
                          
                        />
                      </div>
                    </div>
                    <hr className="border border-borderGray mr-10" />
                  </>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl w-full h-96 lg:h-[420px] ">
              {continentData[selectedContinent].map((country) => (
                <div
                  key={country.name}
                  className="border py-2 lg:py-5 px-3 lg:px-7 border-borderGray rounded-2xl flex gap-3 xl:gap-8 items-center"
                >
                  <div className="w-14 lg:w-20 h-14 lg:h-20 rounded-full overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-base sm:text-2xl font-jakarta text-darkGReen">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience
