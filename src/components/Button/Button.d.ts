import * as React from "react";

declare const MDBBtn: React.FunctionComponent<{
  active?: boolean;
  action?: boolean;
  block?: boolean;
  circle?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  download?: string;
  flat?: boolean;
  floating?: boolean;
  gradient?:
    | "purple"
    | "blue"
    | "aqua"
    | "peach"
    | "warm-flame"
    | "night-fade"
    | "spring-warmth"
    | "juicy-peach"
    | "young-passion"
    | "rainy-ashville"
    | "sunny-morning"
    | "lady-lips"
    | "winter-neva"
    | "frozen-dreams"
    | "dusty-grass"
    | "tempting-azure"
    | "heavy-rain"
    | "amy-crisp"
    | "mean-fruit"
    | "deep-blue"
    | "ripe-malinka"
    | "cloudy-knoxville"
    | "morpheus-den"
    | "rare-wind"
    | "near-moon";
    href?: string;
    innerRef?: React.RefObject<HTMLButtonElement> | ((ref: React.RefObject<HTMLButtonElement>) => void) | null;
    outline?: boolean;
    role?: string;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    social?: string;
    tag?: string;
    target?: string;
    type?: 'reset' | 'submit' | 'button';
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    [rest: string]: any;
}>

export default MDBBtn;
