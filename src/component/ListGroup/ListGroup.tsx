import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { CiCalendarDate } from "react-icons/ci";

interface Props {
  maps: string[];
  heading: string;
  onSelectImem: (item: string) => void;
}

interface ListItemProps {
  acitvate: boolean;
}
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.acitvate ? "blue" : "none")};
`;

function ListGroup({ maps, heading, onSelectImem }: Props) {
  //   let maps = ["a", "b", "c", "d"];
  // maps = [];
  // const handelClick = (evet: MouseEvent) => console.log(evet);

  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // <>
    //   <h1>{heading}</h1>
    //   {maps.length === 0 && <p>No items</p>}
    //   <ul className={[styles.listGroup, styles.container].join(" ")}>
    //     {maps.map((item, index) => (
    //       <li
    //         className={
    //           selectedIndex === index
    //             ? "list-group-item active"
    //             : "list-group-item"
    //         }
    //         key={item}
    //         onClick={() => {
    //           setSelectedIndex(index);
    //           onSelectImem(item);
    //         }}
    //       >
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <>
      <CiCalendarDate size={40} color="red" />

      <h1>{heading}</h1>
      {maps.length === 0 && <p>No items</p>}
      <List>
        {maps.map((item, index) => (
          <ListItem
            acitvate={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectImem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
