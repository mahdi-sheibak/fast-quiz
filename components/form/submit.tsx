import { Button, ButtonProps } from "@/components/ui/button"

export interface SubmitProps extends ButtonProps {}

const Submit = ({ children, ...otherProps }: SubmitProps) => {
  return (
    <Button {...otherProps} type="submit">
      {children}
    </Button>
  )
}
Submit.displayName = "Submit"

export { Submit }
