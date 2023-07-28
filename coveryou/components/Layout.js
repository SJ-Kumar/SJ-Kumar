import React from 'react'
import Nav from './Nav'
import FlexCol from './wrapper/FlexCol'

export default function Layout({ children }) {
  return (
    <FlexCol className="bg-gradient-to-br from-purple-200 to-orange-400 min-h-screen">
        <Nav />
        <main>{children}</main>
        <a className="cursor-pointer" href="https://twitter.com/sjayanthkumar" target="_blank">
          <h3 className="my-3 text-secondary text-center text-xl font-bold">

              <br />

          </h3>
        </a>
    </FlexCol>
  )
}
