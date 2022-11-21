import Image from "next/image";

export interface IUserProfile {
  name: string;
  imgSrc?: string;
  skinType?: string;
  role?: string;
  className?: string;
  variant?: 'reviewer'|'editor';
}
const UserProfile = ({variant,...props}: IUserProfile) =>{
  const imgSrc = props.imgSrc !== ''?  props.imgSrc :'https://image.femaledaily.com/dyn/640/images/user-pics/e367d256e5335783e369cb75e0d10cc1.jpg'
  return (
      <div className={`${props.className??''} absolute z-10 w-full ${variant == 'reviewer'?'flex flex-col self-center items-center text-center -translate-y-5':'flex flex-row space-x-2 justify-center '}`}>
        <div className="relative w-12 h-12">
          <Image className="rounded-full" src={props.imgSrc ?? 'https://image.femaledaily.com/dyn/640/images/user-pics/e367d256e5335783e369cb75e0d10cc1.jpg'} alt={props.name} fill/>
        </div>
        <div>
            <p className="text-sm font-semibold">{props.name}</p>
            {variant == 'reviewer' && props.skinType && <p className="text-[10px] text-gray-500">{props.skinType}</p>}
            {variant == 'editor' && props.role && <p className="text-[10px] text-gray-500">{props.role}</p>}
        </div>
            
      </div>
  )
}
export default UserProfile;