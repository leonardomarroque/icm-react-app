import * as Icons from "../assets/icons";

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon = ({ name, className }: IconProps): JSX.Element => {
  const Icon = Icons[name];
  return <Icon className={className} />;
};

export default Icon;
