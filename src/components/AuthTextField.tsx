import type { InputHTMLAttributes, ReactNode } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  trailing?: ReactNode
}

export default function AuthTextField({ label, trailing, className, ...inputProps }: Props) {
  return (
    <label className={`relative flex h-14 items-center rounded border border-black/30 px-4 ${className ?? ''}`}>
      <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-normal text-ink-soft">
        {label}
      </span>
      <input
        className="w-full bg-transparent text-base text-ink-soft outline-none"
        {...inputProps}
      />
      {trailing && <span className="shrink-0">{trailing}</span>}
    </label>
  )
}
