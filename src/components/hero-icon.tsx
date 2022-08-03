import React, { FC } from "react";
import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

interface HeroIconProps {
  icon: IconName;
  className?: string;
  outline?: boolean;
}

const HeroIcon = ({ icon, className, outline }: HeroIconProps): JSX.Element => {
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  return <Icon className={className} />;
};

HeroIcon.defaultProps = {
  outline: false,
  className: "w-6 h-6 text-gray-600",
};

export default HeroIcon;
