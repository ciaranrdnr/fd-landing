import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconMenu from "../../../assets/icon/icon-menu";
import IconSearch from "../../../assets/icon/icon-search";
import IconWomanCircle from "../../../assets/icon/icon-women-outline";
import { METADATA_IMG } from "../../../assets/logo/image";
import { isMobile } from "../../../helper/general";
export interface IHeadProp {
  withLogin?:  boolean;
  withSearchbar?:  boolean;
}
export default function Header({withLogin = true, withSearchbar = true}: IHeadProp) {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return (
      <nav className="sticky top-0 z-20">
        <div className="flex justify-between h-[60px] space-x-6 border-b bg-white">
          <div className="flex w-full space-x-6 items-center">
            <button className="ml-6"><IconMenu width={24} height={24}/></button>
            <Link href={'/'}><Image src={METADATA_IMG.LOGO_FEMALEDAILY} width={140} height={40} alt='Female Daily' draggable={false}/></Link>
           {!ismobile && withSearchbar && <div className="flex w-full h-10 border px-4 rounded items-center invisible sm:visible">
              <IconSearch width={24} height={24}/>
              <input className="text-xs font-semibold w-full outline-none" placeholder="Search products, articles, topics, brands, etc"/>
            </div>}
          </div>
         {!ismobile && withLogin && <button className="bg-red-1 text-white px-6 flex flex-none items-center space-x-2  invisible sm:visible"><IconWomanCircle width={20} height={20}/> <p>LOGIN / SIGNUP</p></button>}
        </div>
       {!ismobile && <ul className="uppercase font-semibold flex items-center justify-center space-x-6 py-4 border-t border-b mb-4 bg-white invisible sm:visible">
          <li><a href="">Skincare</a></li>
          <li><a href="">Make up</a></li>
          <li><a href="">Body</a></li>
          <li><a href="">Hair</a></li>
          <li><a href="">Fragrance</a></li>
          <li><a href="">Nails</a></li>
          <li><a href="">Tools</a></li>
          <li><a href="">Brands</a></li>
        </ul>}
      </nav>
  )
}
