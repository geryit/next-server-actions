"use client";
import { useFormStatus } from "react-dom";

import { ComponentProps, memo, PropsWithChildren } from "react";

type Props = ComponentProps<"button">;

const _Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="button"
      {...props}
      className="rounded px-2 py-1 text-white bg-blue-400 hover:bg-blue-500"
    >
      {pending ? "Searching" : children}
    </button>
  );
};

export const Button = memo(_Button);
