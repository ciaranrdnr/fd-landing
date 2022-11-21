import Image from "next/image";
import { METADATA_IMG } from "../../assets/logo/image";
import StarRating from "../star-rating";
import UserProfile, { IUserProfile } from "../user-profile";

export interface ICardProduct {
  name: string;
  brand: string;
  variant?: string;
  rating: number;
  imgSrc: string;
  className?: string;
  user?: IUserProfile;
}
const CardProduct = (props: ICardProduct) =>{
  return (
  <div className="relative">{props.user && <UserProfile imgSrc={props.user.imgSrc} name={props.user.name} role={props.user.role} variant={'editor'}/>}
      <div className={`${props.className??''} ${props.user && 'mt-10'} sm:w-44 h-80 flex flex-col space-y-2 border rounded-lg bg-white`}>
        <div className="relative w-full h-44 rounded-t-lg" >
        <Image draggable={false} className="rounded-t-lg" src={props.imgSrc ?? METADATA_IMG.IMG_NO_RESULT} alt={props.name} fill/>
        </div>
        <div className="flex flex-col space-y-1 px-4 ">
          <StarRating rating={props.rating} numberOfReviewer={7}/>
          <h3 className="font-semibold uppercase">{props.brand}</h3>
          <p className="line-clamp-2 text-sm text-justify">{props.name}</p>
          {props.variant && <p className="text-sm text-gray-500">{props.variant}</p>}
        </div>
      </div>
  </div>
  )
}
export default CardProduct;