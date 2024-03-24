import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { HiHandThumbUp } from "react-icons/hi2";
import { useState } from "react";
interface Props {
  onSelectItem: (item: string) => void;
}

function LikeButton({ onSelectItem }: Props) {
  const [likeStatus, setLikeStatus] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          likeStatus === 0 ? setLikeStatus(1) : setLikeStatus(0);
          onSelectItem("CLICKED");
        }}
      >
        {likeStatus === 0 ? (
          <HiOutlineHandThumbUp size={80} />
        ) : (
          <HiHandThumbUp size={80} />
        )}
      </button>
    </>
  );
}

export default LikeButton;
