import { useState } from "react"

import Layout from "../layout/Layout"

import FormToDo from "../components/FormToDo"
import ToDos from "../components/ToDos"
import Header from "../components/Header"

const Home = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const handleAddClick = () => {
    setFormIsOpen(true);
  };

  const handleHide = () => {
    setFormIsOpen(false)
  }

  return (
    <Layout>
      <Header onAdd={handleAddClick} isVisible={formIsOpen} />
      {formIsOpen && <FormToDo onHide={handleHide} /> }
      <ToDos />
    </Layout>
  )
}
export default Home