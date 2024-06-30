import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);
  const fc = () => {
    setState(!state);
    onClick();
  };
  if (state) {
    return <FcLike onClick={fc}></FcLike>;
  } else {
    return <FcLikePlaceholder onClick={fc}></FcLikePlaceholder>;
  }
};

export default Like;
