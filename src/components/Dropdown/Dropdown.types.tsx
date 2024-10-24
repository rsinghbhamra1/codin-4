export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "disabled"> {
  options: Option[];
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}
