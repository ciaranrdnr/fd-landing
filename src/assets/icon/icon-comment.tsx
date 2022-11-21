export interface IIcon {
  width: number;
  height: number;
}
const IconComment = (props: IIcon) =>{
  return(
  <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.2 13.6H16.8V12H7.2V13.6ZM7.2 11.2H16.8V9.6H7.2V11.2ZM7.2 8.8H16.8V7.2H7.2V8.8ZM20 20L16.8 16.8H5.6C5.16 16.8 4.78347 16.6435 4.4704 16.3304C4.1568 16.0168 4 15.64 4 15.2V5.6C4 5.16 4.1568 4.7832 4.4704 4.4696C4.78347 4.15653 5.16 4 5.6 4H18.4C18.84 4 19.2168 4.15653 19.5304 4.4696C19.8435 4.7832 20 5.16 20 5.6V20ZM5.6 5.6V15.2H17.46L18.4 16.14V5.6H5.6ZM5.6 5.6V16.14V5.6Z" fill="black"/>
  </svg>
)}

export default IconComment;