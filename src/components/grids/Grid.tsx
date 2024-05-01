import React, { PropsWithChildren } from 'react'
import styles from "./grid.module.css"

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 max-w-screen-lg m-auto`}>{children}</div>
  )
}
