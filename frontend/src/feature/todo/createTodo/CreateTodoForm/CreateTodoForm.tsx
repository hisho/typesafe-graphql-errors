import { Box, Button, Center, chakra, Heading, Input } from '@chakra-ui/react'
import { FormControl } from '@src/component/FormControl/FormControl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ToZod } from '@src/lib/zod/types'
import type { CreateTodoInput } from '@src/lib/graphql/generate/graphql'

const schema = z.object<ToZod<CreateTodoInput>>({
  title: z.string(),
  description: z.string(),
})

export const CreateTodoForm = () => {
  const { handleSubmit } = useForm<CreateTodoInput>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: zodResolver(schema),
  })

  const handleCreateTodo = (data: CreateTodoInput) => {
    console.log(data)
  }

  return (
    <Box borderWidth={1} p={2}>
      <Heading>Create TODO</Heading>
      <Box h={4} />
      <chakra.form onSubmit={handleSubmit(handleCreateTodo)}>
        <FormControl label={'タイトル'} isRequired>
          <Input />
        </FormControl>
        <Box h={2} />
        <FormControl label={'説明'}>
          <Input />
        </FormControl>
        <Box h={4} />
        <Center>
          <Button type={'submit'}>送信</Button>
        </Center>
      </chakra.form>
    </Box>
  )
}
