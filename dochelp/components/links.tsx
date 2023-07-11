import React from "react"
import { FaGithub } from "react-icons/fa"
import { IoOpenOutline } from "react-icons/io5"

type Props = {
  name: string,
  link: string,
}

let MyComponent = (props: Props) => {
  return (
    <section className="border-2 border-gray-500 w-full p-4 m-2 rounded-md hover:translate-y-1 hover:shadow-md hover:shadow-gray-200">
      <section className="dark:text-white text-black">
        <a href={props?.link} className="flex items-center justify-between gap-2" target="__blank">
          <section className="flex justify-start items-center">
            <FaGithub className="text-3xl m-2" />
            <section className="text-lg font-semibold">{props.name}</section>
          </section>
          <IoOpenOutline className="text-2xl" />
        </a>
      </section>
    </section>
  )
}

let Implementation: React.FC = () => {
  return (
    <section className="">
      <MyComponent
        name="View my Java implementation"
        link="https://github.com/SJ-Kumar/research-k-way-division"
      />
      <MyComponent
        name="View my Algorithm implementation"
        link="https://github.com/SJ-Kumar/rust-approach-to-k-way-algorithm"
      />
    </section>)
}

export default Implementation;
