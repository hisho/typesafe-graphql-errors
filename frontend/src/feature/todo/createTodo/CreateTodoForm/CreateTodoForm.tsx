import { Box, Button, Center, chakra, Heading, Input } from '@chakra-ui/react'
import { FormControl } from '@src/component/FormControl/FormControl'

export const CreateTodoForm = () => {
  return (
    <Box borderWidth={1} p={2}>
      <Heading>Create TODO</Heading>
      <Box h={4} />
      <chakra.form>
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
