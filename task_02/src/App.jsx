import React from "react";

import List from "./components/List/List";

import { animals } from "./mockedData/mockedData";

export default function App() {
  return (
    <>
      <List animals={animals} />
    </>
  );
}
