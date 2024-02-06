import { ComponentProps, memo, PropsWithChildren } from "react";

type Props = ComponentProps<"input">;

export const _TextInput = ({ ...props }: PropsWithChildren<Props>) => {
  return <input type="text" {...props} className="border p-2 rounded" />;
};

export const TextInput = memo(_TextInput);
