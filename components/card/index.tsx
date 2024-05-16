import { ReactNode } from "react";
import { Logo } from "../icons";
type Props = {
  children?: ReactNode;
};
const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="border border-[3px] rounded-xl bg-primary py-[50px] relative">
      <div className="absolute border border-[3px] rounded-full bg-white py-[10px] px-5 top-[-30px] mx-auto left-0 right-0 w-[max-content] text-center">
        <span className="text-[32px] font-bold leading-[normal] text-black">
          What is the WB?
        </span>
      </div>
      <div className="px-5 pb-[30px] mb-[30px] row grid-cols-3 gap-3 justify-items-center border-b-[3px] border-black">
        <div className="w-full flex flex-col gap-[10px] justify-center">
          <span className="w-full h-[3px] rounded-full bg-black"></span>
          <span className="w-full h-[3px] rounded-full bg-black"></span>
          <span className="w-full h-[3px] rounded-full bg-black"></span>
        </div>
        <Logo className="w-24 h-auto" />
        <div className="w-full flex flex-col gap-[10px] justify-center">
          <span className="w-full h-[3px] rounded-full bg-black"></span>
          <span className="w-full h-[3px] rounded-full bg-black"></span>
          <span className="w-full h-[3px] rounded-full bg-black"></span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
