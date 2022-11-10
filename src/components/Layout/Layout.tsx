import { FC, ReactNode } from 'react'
import Sidenav from 'components/Sidenav/Index'
import Navbar from 'components/Navbar/Navbar'

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Sidenav />
      <Navbar />
      <div className="layout__content">{children}</div>
    </>
  )
}

export default AppLayout
