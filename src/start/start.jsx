import React, { useState } from "react";
import CloudsShop from "./cloudsShop/cloudsShop";
import MainBoard from "./MainBoard/MainBoard";

const Start = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <CloudsShop active={active} setActive={setActive} />
      <MainBoard active={active} setActive={setActive} />
    </>
  );
};

export default Start;
