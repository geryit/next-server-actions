import { ComponentProps, memo, PropsWithChildren } from "react";

type Props = ComponentProps<"button">;

const _Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      {...props}
      className="rounded px-2 py-1 text-white bg-blue-400 hover:bg-blue-500"
    >
      {children}
    </button>
  );
};

export const Button = memo(_Button);
