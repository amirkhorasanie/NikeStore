import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router'
import Footer from '../common/Footer'

const RootLayout = () => {
  return (
    <>
    <section id='root'>
        <Header />

        <main>
            <Outlet />
        </main>
        <Footer />
    </section>
    </>
  )
}

export default RootLayout