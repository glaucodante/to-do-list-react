"use client"
import { useState } from "react"

// MANIPULAÇÃO DE ARRAY DENTRO DE UMA STATE


const Page = () => {

  const [list, setList] = useState([])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" >
      <h1 className="text-4xl mt-5"></h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-200">
        <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3" />
        <button>Adicionar</button>
      </div>
      <ul className="w-full max-w-lg list-disc pl-5">
        <li>Tarefa Específica - <button className="houver:underline">[deletar]</button></li>
        <li>Tarefa Específica - <button className="houver:underline">[deletar]</button></li>

      </ul>
    </div >
  )
}

export default Page
