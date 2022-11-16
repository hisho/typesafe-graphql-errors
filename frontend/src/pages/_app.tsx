import type { AppProps } from 'next/app'
import { GraphQLProvider } from '@src/feature/graphql/GraphQLProvider/GraphQLProvider'
import { theme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/provider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GraphQLProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GraphQLProvider>
  )
}

export default App
