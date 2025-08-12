import { Images } from "../../assets/pngs";
import { ReactComponent as Card } from "../../assets/svgs/card.svg";
import CardComponent from "../../Components/CardComponent";
import { ReactComponent as NewArrow } from "../../assets/svgs/newArrow.svg";
import { ReactComponent as Image2 } from "../../assets/svgs/image2.svg";

type CardData = {
  image: string;
  title: string;
  description: string;
  image1: React.ReactNode;
  image2: React.ReactNode;
};
  
const cardData: CardData[] = [
  {
    image: Images.landscape,
    title: "Business Visa",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image1: <NewArrow />,
    image2: <Image2 />,
  },
  {
    image: Images.landscape,
    title: "Working Visa",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image1: <NewArrow />,
    image2: <Image2 />,
  },
  {
    image: Images.landscape,
    title: "Student Visa",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu .",
    image1: <NewArrow />,
    image2: <Image2 />,
  },
  {
    image: Images.landscape,
    title: "Tourist Visa",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    image1: <NewArrow />,
    image2: <Image2 />,
  },
];
const Adenture = () => {
  return (
    <div className="contain pb-16 md:pb-[120px]">
      <div className="flex items-center justify-center flex-col mx-auto">
        <div className="flex gap-[10px]">
          <Card />
          <p className="text-darkGReen font-semibold text-sm pb-4 font-jakarta">
            Visa Category
          </p>
        </div>
        <p className="font-jakarta text-darkGReen max-w-[630px] text-3xl md:text-[50px] font-bold text-center pb-6 lg:pb-[60px] md:leading-[3.5rem]">
          Seeking Adventure Thrills and Excitement Await
        </p>
        <div className="grid m-3 lg:m-0 grid-cols-1 2xl:grid-cols-2 gap-[30px] ">
          {cardData.map((card, idx) => (
            <CardComponent
              key={idx}
              image={card.image}
              title={card.title}
              description={card.description}
              image1={card.image1}
              image2={card.image2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Adenture;
