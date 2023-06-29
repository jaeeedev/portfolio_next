import { Variants, motion } from "framer-motion";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Path = (props: { [key: string]: unknown }) => (
  // Variants 타입이 안되는데 다시 볼것
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#000"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;

type ToggleProps = {
  toggle: MouseEventHandler<HTMLButtonElement>;
};

const ToggleMenu = ({ toggle }: ToggleProps) => {
  return (
    <MenuButton onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 4.5 L 20 4.5" },
            open: { d: "M 3 18.5 L 17 4.5" },
          }}
        />
        <Path
          d="M 2 11.423 L 20 11.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 18.346 L 20 18.346" },
            open: { d: "M 3 4.5 L 17 18.346" },
          }}
        />
      </svg>
    </MenuButton>
  );
};

export default ToggleMenu;
