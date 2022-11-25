import { Container } from '@chakra-ui/react'
import { CreateTodoForm } from '@src/feature/todo/createTodo/CreateTodoForm/CreateTodoForm'
import { UpdateTodoForm } from '@src/feature/todo/updateTodo/UpdateTodoForm/UpdateTodoForm'

const Page = () => {
  return (
    <Container>
      <CreateTodoForm />
      <UpdateTodoForm />
    </Container>
  )
}

export default Page
