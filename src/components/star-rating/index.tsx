import IconStar from "../../assets/icon/icon-star";

export interface IStarRating {
  rating: number;
  className?: string;
  numberOfReviewer?: number;
  showNumber?: boolean;
}
const StarRating = ({rating,className,numberOfReviewer,showNumber = true}: IStarRating) =>{
  return (
      <div className={`flex space-x-1 items-center ${className??''}`}>
        {showNumber && <p className="font-semibold">{rating}</p>}
        {Array(5).fill('').map((_,i:number) =>{
          return(
          <IconStar 
          key={i} 
          width={14} 
          height={14} 
          color={i+1 <= rating ? "red" : "grey"}/>
          )
        })}
        {numberOfReviewer && <p className="text-sm text-gray-500">({numberOfReviewer})</p>}
      </div>
  )
}
export default StarRating;