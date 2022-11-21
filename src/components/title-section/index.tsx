import { useEffect, useState } from "react";
import IconChevron from "../../assets/icon/icon-chevron";
import { isMobile } from "../../helper/general";

export interface ITitleSection {
  title: string;
  description?: string;
  className?: string;
  withButton?: boolean;
}
const TitleSection = (props: ITitleSection) =>{
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return (
      <div className={` ${props.description ?? 'flex justify-between'}`}>
        <h2 className={`${props.className} font-semibold text-lg`}>{props.title}</h2>
        {props.description ? <div className="flex justify-between">
          <p className="text-gray-500 text-sm">{props.description}</p>
          {props.withButton && <button className="text-red-1 flex items-center space-x-1">{!ismobile && <p>See more</p> }<IconChevron width={ismobile?16:12} height={ismobile?16:12}/></button>}
        </div>
        :
        <>
          {props.withButton && <button className="text-red-1 flex items-center space-x-1">{!ismobile && <p>See more</p> }<IconChevron width={ismobile?16:12} height={ismobile?16:12}/></button>}
        </>
        }
      </div>
  )
}
export default TitleSection;