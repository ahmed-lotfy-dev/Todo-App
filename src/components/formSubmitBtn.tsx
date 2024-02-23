"use client";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/button";

type FormSubmitProps = ButtonProps & {
  btnText: string;
  className?: string;
  onClick?: () => void;
};

export default function FormSubmit({
  btnText,
  className,
  ...rest
}: FormSubmitProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`flex justify-center mx-auto w-full mt-7 py-2 ${className}`}
    >
      {btnText}
    </Button>
  );
}
