"use client"
import { useState } from "react"
import { TodoItem } from "./types/TodoItem"

// MANIPULAÇÃO DE ARRAY DENTRO DE UMA STATE


const Page = () => {
  // adicionando item
  const [itemInput, setItemInput] = useState('') // manipulando os dados do input (campo)

  // função para manipular a lista
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: true }, // tarefas realizadas???
    { id: 2, label: 'Comprar o bolo', checked: false }
  ])

  // função para o ação do botão
  const handleAddButton = () => {
    // verificação para que não seja possível adicionar quando o input está vazio
    if (itemInput.trim() === '') return // o return para a execução 

    // fazendo a adição no array 
    // criando um novo array
    setList([ // função que irá fazer a alteração
      ...list, // cópia do array original (clone)
      { id: list.length + 1, label: itemInput, checked: false }]) // inclusão do novo array
    setItemInput('') // limpando o input após a adição do item
  }

  // deletando item (filter = cria um novo array, menos os itens que quero deletar)
  const deleteItem = (id: number) => { // index = é o índice = ordem do elemento na lista
    // no item que quero deletar tenho que retornar false
    setList(
      list.filter(item => item.id != id) // gerando uma nova lista
    )
  }
  // toggle = marcar ou desmarcar
  const toggleItem = (id: number) => {
    let newList = [...list] // clonando o list

    for (let i in newList) { // verificando em cada um dos itens
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked // invertendo ela mesma
      }
    }
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center" >
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-800">
        <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="m-4">{list.length} itens na Lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {/* map(): Cria um novo array aplicando uma função a cada elemento do array original */}
        {/* exibindo a tarefa realizada */}
        {/* index = ordem do elemento na lista */}
        {list.map((item) => (
          // toggle = marcar ou desmarcar
          <li key={item.id} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked}
              className="w-6 h-6 mr-3" id={`${item.id}`} />
            <label htmlFor={`${item.id}`}>{item.label}</label>
            - <button onClick={() => deleteItem(item.id)}
              className="hover:underline">[ deletar ]</button></li>
        ))}
      </ul>
    </div >
  )
}

export default Page
