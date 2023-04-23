import React from "react"
import { clsx } from "clsx"

interface TypographyHeadingProps
  extends Omit<React.HTMLProps<HTMLHeadingElement>, "children"> {
  children: string
}

const TypographyH1 = ({
  children,
  className,
  ...otherProps
}: TypographyHeadingProps) => {
  return (
    <h1
      className={clsx(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...otherProps}
    >
      {children}
    </h1>
  )
}
TypographyH1.displayName = "TypographyH1"

const TypographyH2 = ({
  children,
  className,
  ...otherProps
}: TypographyHeadingProps) => {
  return (
    <h2
      className={clsx(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
      {...otherProps}
    >
      {children}
    </h2>
  )
}
TypographyH1.displayName = "TypographyH2"

const TypographyH3 = ({
  children,
  className,
  ...otherProps
}: TypographyHeadingProps) => {
  return (
    <h3
      className={clsx(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...otherProps}
    >
      {children}
    </h3>
  )
}
TypographyH1.displayName = "TypographyH3"

const TypographyH4 = ({
  children,
  className,
  ...otherProps
}: TypographyHeadingProps) => {
  return (
    <h4
      className={clsx(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...otherProps}
    >
      {children}
    </h4>
  )
}
TypographyH1.displayName = "TypographyH4"

interface TypographyQuoteProps
  extends Omit<React.HTMLProps<HTMLQuoteElement>, "children"> {
  children: string
}

const TypographyBlockquote = ({
  children,
  className,
  ...otherProps
}: TypographyQuoteProps) => {
  return (
    <blockquote
      className={clsx("mt-6 border-l-2 pl-6 italic", className)}
      {...otherProps}
    >
      {children}
    </blockquote>
  )
}
TypographyH1.displayName = "TypographyBlockquote"

interface TypographyInlineCodeProps
  extends Omit<React.HTMLProps<HTMLElement>, "children"> {
  children: string
}

const TypographyInlineCode = ({
  children,
  className,
  ...otherProps
}: TypographyInlineCodeProps) => {
  return (
    <code
      className={clsx(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...otherProps}
    >
      {children}
    </code>
  )
}
TypographyH1.displayName = "TypographyInlineCode"

interface TypographyParagraphProps
  extends Omit<React.HTMLProps<HTMLParagraphElement>, "children"> {
  children: string | React.ReactNode
}

const TypographyP = ({
  children,
  className,
  ...otherProps
}: TypographyParagraphProps) => {
  return (
    <p
      className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...otherProps}
    >
      {children}
    </p>
  )
}
TypographyH1.displayName = "TypographyP"

const TypographyLead = ({
  children,
  className,
  ...otherProps
}: TypographyParagraphProps) => {
  return (
    <p
      className={clsx("text-xl text-muted-foreground", className)}
      {...otherProps}
    >
      {children}
    </p>
  )
}
TypographyH1.displayName = "TypographyLead"

const TypographyMuted = ({
  children,
  className,
  ...otherProps
}: TypographyParagraphProps) => {
  return (
    <p
      className={clsx("text-sm text-muted-foreground", className)}
      {...otherProps}
    >
      {children}
    </p>
  )
}
TypographyH1.displayName = "TypographyMuted"

interface TypographySmallProps
  extends Omit<React.HTMLProps<HTMLElement>, "children"> {
  children: string
}

const TypographySmall = ({
  children,
  className,
  ...otherProps
}: TypographySmallProps) => {
  return (
    <small
      className={clsx("text-sm font-medium leading-none", className)}
      {...otherProps}
    >
      {children}
    </small>
  )
}
TypographyH1.displayName = "TypographySmall"

interface TypographyLargeProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "children"> {
  children: string
}

const TypographyLarge = ({
  children,
  className,
  ...otherProps
}: TypographyLargeProps) => {
  return (
    <div className={clsx("text-lg font-semibold", className)} {...otherProps}>
      {children}
    </div>
  )
}
TypographyH1.displayName = "TypographyLarge"

interface TypographyListProps {
  list: string[]
}

const TypographyList = ({ list }: TypographyListProps) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
TypographyH1.displayName = "TypographyList"

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyP,
  TypographyLead,
  TypographyMuted,
  TypographySmall,
  TypographyLarge,
  TypographyList,
}
