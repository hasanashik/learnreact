interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}
import { BsCheck2Circle } from "react-icons/bs";
const MyButton = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        <BsCheck2Circle />
        {children}
      </button>
    </>
  );
};
export default MyButton;
