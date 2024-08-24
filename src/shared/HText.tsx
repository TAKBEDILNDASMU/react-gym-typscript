import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="text-bold font-montserrat text-3xl">{children}</h1>;
};

export default HText;
