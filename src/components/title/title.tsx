import { ReactNode } from "react";
import "./titleStyle.css";

type TitleProps<T extends React.ElementType> = {
  as: T;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export const Title = <T extends React.ElementType = "h1">({
  as,
  children,
  ...rest
}: TitleProps<T>) => {
  const As = as as keyof React.JSX.IntrinsicElements;
  return <As {...rest}>{children}</As>;
};
