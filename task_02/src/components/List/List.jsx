import React, { useState, useEffect } from "react";
import { animals } from "../../mockedData/mockedData";
import "../List/style.css";

const List = () => {
  const [list, setList] = useState(animals);

  useEffect(() => {
    const interval = setInterval(() => {
      setList((list) => {
        const inactiveItems = list.filter((item) => !item.active);

        if (!inactiveItems.length) {
          clearInterval(interval);
          return list;
        }

        const randomIndex = Math.floor(Math.random() * inactiveItems.length);
        const randomItem = inactiveItems[randomIndex];

        return list.map((item) =>
          item === randomItem ? { ...item, active: true } : item
        );
      });
    }, 1000);
  }, []);

  return list.length ? (
    <table className="tableStyle">
      <tbody>
        {list.map((item, index) => (
          <tr key={index} className={item.active ? "active" : ""}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default List;
