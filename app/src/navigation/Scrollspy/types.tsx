interface ScrollspyProps extends React.AllHTMLAttributes<HTMLAllCollection> {
  offset?: number;
  onElement?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<number>>;
  tag?: React.ComponentProps<any>;
  targets?: NodeListOf<HTMLElement> | HTMLElement[];
  ref?: React.Ref<any>;
}

export { ScrollspyProps };
