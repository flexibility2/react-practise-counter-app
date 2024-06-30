import React from "react";

interface Props {
  state: boolean;
}
const ExpandableText = ({ state }: Props) => {
  const text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  if (state) {
    return <div>{text}</div>;
  } else {
    return <div>{text.substring(0, 2)}</div>;
  }
};

export default ExpandableText;
