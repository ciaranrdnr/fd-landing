import Image from "next/image";
import IconComment from "../../assets/icon/icon-comment";
import IconList from "../../assets/icon/icon-list";
import IconWoman from "../../assets/icon/icon-women";
import { METADATA_IMG } from "../../assets/logo/image";
import StarRating from "../star-rating";

export interface ICardGroups {
  groupName: string;
  description: string;
  imgSrc: string;
  numberOfMembers?: number;
  numberOfArticles?: number;
  numberOfCommments?: number;
  className?: string;
}
const CardGroups = (props: ICardGroups) =>{
  return (
      <div className={`${props.className??''} flex flex-col space-y-4 items-center w-[50vw] max-h-[60vh] sm:w-64 sm:h-96 p-6 shadow-lg rounded-lg`}>
        <div className="relative w-[30vw] h-[30vw] sm:w-[170px] sm:h-[170px]" >
         <Image draggable={false} className="rounded-full object-cover object-center" src={props.imgSrc ?? METADATA_IMG.IMG_NO_RESULT} alt={props.groupName} fill/>
        </div>
        <p className="font-semibold text-center line-clamp-2 h-12">{props.groupName}</p>
        <div>
            <div className="flex flex-row justify-between px-4 w-full">
              <div className="flex space-x-1"><IconWoman width={20} height={20}/><p>{props.numberOfMembers?? '-'}</p></div>
              <div className="flex space-x-1"><IconList width={20} height={20}/><p>{props.numberOfArticles?? '-'}</p></div>
              <div className="flex space-x-1"><IconComment width={20} height={20}/><p>{props.numberOfCommments?? '-'}</p></div>
            </div>
            <p className="text-sm text-center line-clamp-2">{props.description}</p>
        </div>
       </div>
  )
}
export default CardGroups;