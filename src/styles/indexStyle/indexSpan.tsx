import { CommonSpanProps } from "@utils/common/props";
import React, { FunctionComponent as FC } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const UserSettingSpan: FC<CommonSpanProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div className="flex justify-between w-full cursor-pointer">
      <span
        {...restProps}
        className={`flex gap-4 text-xl font-normal ${className}`}
      >
        {children}
      </span>
      <MdOutlineArrowForwardIos className="mt-2" size="20" color="gray" />
    </div>
  );
};
