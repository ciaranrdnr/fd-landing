import Image from "next/image";

export interface ICardArticle {
  title: string;
  author?: string;
  published_at: string;
  image: string;
  className?: string
}
const CardArticle = (props: ICardArticle) =>{
  return (
    <div className={`flex flex-row space-x-2 space-y-0 sm:flex-col sm:space-x-0 sm:space-y-2 w-full sm:w-[380px]${props.className ??''}`}>
      <div className="relative flex-none w-[100px] h-[100px] sm:w-[380px] sm:h-[180px]">
        <Image draggable={false} className="rounded-lg object-cover" src={props.image} alt={props.title} fill/>
      </div>
      <div>
        <p className="text-sm font-semibold capitalize line-clamp-3">{props.title}</p>
        <div>
        <p className="text-gray-400 text-sm"><span className="text-gray-500">{props.author?? 'Anonymous'}</span> | {props.published_at}</p>
        </div>
      </div>
    </div>
  )
}
export default CardArticle;