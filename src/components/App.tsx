import React, { ComponentProps } from 'react'

export interface AppProps extends ComponentProps<'div'> {}

export const App = ({ className = '', ...props }: AppProps) => {
  console.log(props)
  return (
    <div className={`${className} ps-h-screen ps-flex-center`} {...props}>
      Hello World!
    </div>
  )
}
