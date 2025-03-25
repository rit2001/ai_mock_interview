import React,{ReactNode} from 'react'

function RootLayout({children} : {children : React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}

export default RootLayout