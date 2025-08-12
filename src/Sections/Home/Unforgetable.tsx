import { ReactComponent as CardGreen } from "../../assets/svgs//card.svg";
import { ReactComponent as ZeroOne } from "../../assets/svgs//01.svg";
import { ReactComponent as ZeroTwo } from "../../assets/svgs//02.svg";
import { ReactComponent as ZeroThree } from "../../assets/svgs//03.svg";
// import { ReactComponent as Wave } from "../../assets/svgs//wave.svg";
// import wave from "../../assets/svgs//wave.svg"

const Unforgetable = () => {
  return (
    <div className="container relative pb-8 md:pb-[120px] overflow-hidden">
      <div className=" rounded-3xl bg-white max-w-full overflow-hidden bg-[url('/waveImage.png')] bg-blend-overlay bg-white/80">
        <div className="flex items-center flex-col z-10">
          <div className="flex gap-[10px] pt-14 lg:pt-[120px] ">
            <CardGreen />
            <p className="text-darkGReen font-jakarta">PROCESS OVERVIEW</p>
          </div>
          <p className="max-w-[630px] text-3xl md:text-[50px] font-bold text-center text-darkGReen md:leading-[3.5rem] px-4 md:px-0 font-jakarta">
            Unforgettable Getaways Escaping Routine{" "}
          </p>
          <div className="contain w-full flex flex-col md:flex-row xl:gap-[30px] ">
            <div className="flex flex-col w-full py-[30px] pl-10 max-w-[410px] mt-[60px] bg-white z-10">
              <div className=" pb-[10px]">
                <ZeroOne />
              </div>
              <p className="pb-5 text-darkGReen text-[22px] font-bold font-jakarta">
                Visa Voyage Agency
              </p>
              <p className="max-w-[330px] font-jakarta">
                Lorem Ipsum is simply dummy text the printing and typeser
              </p>
            </div>

            <div className="flex flex-col w-full py-[30px] pl-10 max-w-[410px] md:mt-[100px] md:mb-[120px] bg-white z-10">
              <div className=" pb-[10px]">
                <ZeroTwo />
              </div>
              <p className="pb-5 text-darkGReen text-[22px] font-bold font-jakarta">
                International Access Visas
              </p>
              <p className="max-w-[330px] font-jakarta">
                Lorem Ipsum is simply dummy text the printing and typeser
              </p>
            </div>

            <div className="flex flex-col w-full py-[30px] pl-10 max-w-[410px] md:mt-[60px] bg-white z-10 pr-8 xl:pr-0">
              <div className=" pb-[10px]">
                <ZeroThree />
              </div>
              <p className="pb-5 text-darkGReen text-[22px] font-bold font-jakarta">
                Visa Voyage Agency
              </p>
              <p className="max-w-[330px] font-jakarta">
                Lorem Ipsum is simply dummy text the printing and typeser
              </p>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:block absolute top-0 left-[52px] right-0 opacity-20 z-0">
          <img className="" alt="wave" src="/waveImage.png" />
        </div> */}
      </div>
    </div>
  );
};

export default Unforgetable;
