import { Button, ButtonProps } from "@/components/ui/button"

export interface SubmitProps extends ButtonProps {}

export function Submit({ ...props }: SubmitProps) {
  return (
    <Button {...props} type="submit">
      ثبت نام
    </Button>
  )
}
