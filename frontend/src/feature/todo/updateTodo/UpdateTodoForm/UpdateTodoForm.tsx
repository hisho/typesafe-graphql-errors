import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  Input,
  Portal,
  Spinner,
} from '@chakra-ui/react'
import { FormControl } from '@src/component/FormControl/FormControl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ToZod } from '@src/lib/zod/types'
import type { UpdateTodoInput } from '@src/lib/graphql/generate/graphql'
import { gql, useMutation, useQuery } from 'urql'
import { useGraphQLErrors } from '@src/feature/graphql/customErrors/useCustomGraphqlErrors'
import { isEmpty } from 'typesafe-utils'
import { useEffect, useMemo, useRef } from 'react'

const UpdateTodoMutation = gql(/* GraphQL */ `
  mutation updateTodo($todoId: String!, $input: UpdateTodoInput!) {
    updateTodo(todoId: $todoId, input: $input) {
      id
    }
  }
`)

const UpdateTodoFormQuery = gql(/* GraphQL */ `
  query updateTodoForm {
    todo(todoId: "99d884e5-f582-479a-8748-0ded8f7f9528") {
      id
      title
      description
    }
  }
`)

const schema = z
  .object<ToZod<UpdateTodoInput>>({
    title: z.string(),
    description: z.string().nullable(),
  })
  .transform((value) => {
    const description = isEmpty(value.description) ? null : value.description

    return { title: value.title, description }
  })

export const UpdateTodoForm = () => {
  const [{ data, fetching: isFetching }] = useQuery({
    query: UpdateTodoFormQuery,
    requestPolicy: 'network-only',
  })

  const defaultValues = useMemo(() => {
    return {
      title: data?.todo.title ?? '',
      description: data?.todo.description ?? '',
    }
  }, [data])

  const { handleSubmit, register, reset } = useForm<UpdateTodoInput>({
    defaultValues,
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    reset(defaultValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues])

  const [{ fetching: isUpdating }, updateTodo] = useMutation(UpdateTodoMutation)
  const { setErrors, findErrorMessages, resetErrors } =
    useGraphQLErrors<UpdateTodoInput>()

  const handleUpdateTodo = async (todoId: string, input: UpdateTodoInput) => {
    try {
      const { error, data } = await updateTodo({
        todoId,
        input,
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

  const ref = useRef<HTMLDivElement>(null)
  return (
    <Box borderWidth={1} p={2} ref={ref} pos={'relative'}>
      {isFetching && (
        <Portal containerRef={ref}>
          <Center pos={'absolute'} inset={0} bgColor={'whiteAlpha.800'}>
            <Spinner />
          </Center>
        </Portal>
      )}
      <Heading>Update TODO</Heading>
      <Box h={4} />
      <chakra.form
        onSubmit={handleSubmit((input) =>
          handleUpdateTodo('99d884e5-f582-479a-8748-0ded8f7f9528', input)
        )}
      >
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
          <Button type={'submit'} isLoading={isUpdating}>
            更新
          </Button>
        </Center>
      </chakra.form>
    </Box>
  )
}
