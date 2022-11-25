import { Box, Button, Center, chakra, Heading, Input } from '@chakra-ui/react'
import { FormControl } from '@src/component/FormControl/FormControl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ToZod } from '@src/lib/zod/types'
import type { CreateTodoInput } from '@src/lib/graphql/generate/graphql'
import { gql, useMutation } from 'urql'
import { useGraphQLErrors } from '@src/feature/graphql/customErrors/useCustomGraphqlErrors'
import { isEmpty } from 'typesafe-utils'

const CreateTodoMutation = gql(/* GraphQL */ `
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`)

const schema = z
  .object<ToZod<CreateTodoInput>>({
    title: z.string(),
    description: z.string().nullable(),
  })
  .transform((value) => {
    const description = isEmpty(value.description) ? null : value.description

    return { title: value.title, description }
  })

export const CreateTodoForm = () => {
  const { handleSubmit, register, reset } = useForm<CreateTodoInput>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: zodResolver(schema),
  })

  const [{ fetching }, createTodo] = useMutation(CreateTodoMutation)
  const { setErrors, findErrorMessages, resetErrors } =
    useGraphQLErrors<CreateTodoInput>()

  const handleCreateTodo = async (input: CreateTodoInput) => {
    try {
      const { error, data } = await createTodo({
        input: {
          title: input.title,
          description: input.description,
        },
      })
      if (error) {
        setErrors(error.graphQLErrors)
      } else if (data) {
        resetErrors()
        reset()
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box borderWidth={1} p={2}>
      <Heading>Create TODO</Heading>
      <Box h={4} />
      <chakra.form onSubmit={handleSubmit(handleCreateTodo)}>
        <FormControl
          label={'タイトル'}
          isRequired
          errorMessages={findErrorMessages('title')}
        >
          <Input {...register('title')} />
        </FormControl>
        <Box h={2} />
        <FormControl
          label={'説明'}
          errorMessages={findErrorMessages('description')}
        >
          <Input {...register('description')} />
        </FormControl>
        <Box h={4} />
        <Center>
          <Button type={'submit'} isLoading={fetching}>
            送信
          </Button>
        </Center>
      </chakra.form>
    </Box>
  )
}
