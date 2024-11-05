import React from "react";

export interface CardProps extends React.PropsWithChildren<{}> {
  cardTitle?: string;
  cardContent?: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}
