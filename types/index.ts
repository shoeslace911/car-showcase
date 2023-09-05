import { MouseEventHandler } from "react";

// types for the button props

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
