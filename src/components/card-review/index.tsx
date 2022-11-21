import Image from "next/image";
import IconComment from "../../assets/icon/icon-comment";
import IconList from "../../assets/icon/icon-list";
import IconWoman from "../../assets/icon/icon-women";
import { METADATA_IMG } from "../../assets/logo/image";
import { ICardProduct } from "../card-product";
import StarRating from "../star-rating";
import UserProfile, { IUserProfile } from "../user-profile";

export interface ICardReviews {
 product: ICardProduct;
 className?: string;
 reviewText: string;
 user?: IUserProfile;
}
const CardReviews = (props: ICardReviews) =>{
  return (
    <div className="relative">
       <div className={`${props.className??''} ${props.user?'pb-8':'pb-4'} flex flex-col space-y-2 border rounded-lg px-4 pt-4`}>
        <div className="flex space-x-3 border-b pb-2">
          <div className="relative w-[75px] h-[75px]" >
          <Image className="rounded-lg object-cover object-center" src={props.product.imgSrc ?? METADATA_IMG.IMG_NO_RESULT} alt={props.product.name} fill/>
          </div>
          <div>
            <p className="font-semibold">{props.product.brand}</p>
            <p className="text-sm">{props.product.name}</p>
          </div>
        </div>

        <StarRating rating={props.product.rating} showNumber={false}/>
        <p className="text-xs">{props.reviewText}</p>
       </div>
      {props.user && <UserProfile imgSrc={props.user.imgSrc} name={props.user.name} skinType={props.user.skinType} variant={'reviewer'}/>}
    </div>

  )
}
export default CardReviews;