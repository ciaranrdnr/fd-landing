export interface IIcon {
  width: number;
  height: number;
}

const IconMenu = (props: IIcon) =>{
  return(
  <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="15" height="2.14286" rx="1.07143" fill="black"/>
    <rect y="6.42859" width="17.1429" height="2.14286" rx="1.07143" fill="black"/>
    <rect y="12.8571" width="10.7143" height="2.14286" rx="1.07143" fill="black"/>
  </svg>
)}

export default IconMenu;