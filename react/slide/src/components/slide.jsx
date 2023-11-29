import { useEffect, useState } from "react";

export function Slide({ current }) {
  const [items, setItems] = useState([
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
    "/images/image00.jpg",
    "/images/image01.jpg",
    "/images/image02.jpg",
    "/images/image03.jpg",
    "/images/image04.jpg",
    "/images/image05.jpg",
  ]);

  useEffect(() => {
    if (current !== 0) {
      const start = items[0];
      const last = items[items.length - 1];
      const newItems = [];
      newItems.push(last, ...items, start);
      console.log(newItems);
      setItems(newItems);
    }
    console.log(current);
    console.log(items);
  }, [current]);

  return (
    <ul id="itemBox" className="flex w-fit absolute h-80 overflow-hidden">
      {items.map((item, index) => {
        return (
          <>
            <li id="item" key={index} className="w-80 h-80 mr-2">
              <img src={item} key={index} alt="slide" />
            </li>
          </>
        );
      })}
    </ul>
  );
}
