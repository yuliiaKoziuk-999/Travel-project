import type { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-[1232px] px-4 sm:px-6 lg:px-4">{children}</div>
}
