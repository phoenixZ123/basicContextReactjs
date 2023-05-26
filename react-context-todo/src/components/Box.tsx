import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const newbackenddata = [
  {
    id: 1,
    name: "coat",
    qty: 3,
    amount: 20000,
  },
  {
    id: 2,
    name: "pants",
    qty: 2,
    amount: 40000,
  },
];

const newsData = {
  id: 3,
  name: "bag",
  qty: 4,
  amount: 20000,
};

const Box = () => {
  const [products, setProducts] = useState(newbackenddata);
  const [totalAmount, setTotal] = useState<number>(0);

  useEffect(() => {
    const total = products.reduce((prev, next) => {
      return prev + next.qty * next.amount;
    }, 0);
    setTotal(total);
  }, [products]);

  //call from UserContext.tsx/
  const context = useContext(UserContext);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: context.theme.primary.main,
      }}
    >
      this is context data {context.user.name} <br />
      Box
      {products.map((p) => (
        <li key={p.id}>
          {p.name}-- {p.amount} {p.qty}
        </li>
      ))}
      Total : {totalAmount}
      <button onClick={() => setProducts((prev) => [...prev, newsData])}>
        Add
      </button>
    </div>
  );
};

export default Box;
