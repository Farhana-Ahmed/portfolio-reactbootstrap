import React from 'react'
import { Container } from 'react-bootstrap';

export interface LayoutProps {
    children: any;
}

const Layout = (props: LayoutProps) => {
  return (
   <Container>
    {props.children}
   </Container>
  )
}

export default Layout