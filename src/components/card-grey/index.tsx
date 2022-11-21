export interface IGreyCard {
  label: string;
  size?: {width:number, height:number};
  className?: string;
}
const GreyCard = (props: IGreyCard) =>{
  return (
      <div className={`${props.className??''} border ${`max-w[${props.size?.width}px] w-full` ?? ''} ${`h-[${props.size?.height}px]` ?? ''} border-gray-400 bg-gray-300 font-semibold text-gray-700 flex flex-col items-center justify-center`}>
        <p>{props.label}</p>
        {props.size && <p>{props.size?.width}x{props.size?.height}</p>}
      </div>
  )
}
export default GreyCard;