import type { AppProps } from 'next/app'
import { GraphQLProvider } from '@src/feature/graphql/GraphQLProvider/GraphQLProvider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GraphQLProvider>
      <Component {...pageProps} />
    </GraphQLProvider>
  )
}

export default App
