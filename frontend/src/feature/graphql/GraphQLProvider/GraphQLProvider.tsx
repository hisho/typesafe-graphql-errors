import type { ReactNode } from 'react'
import { createClient, Provider } from 'urql'
import { useMemo } from 'react'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'

type Props = {
  children: ReactNode
}

export const GraphQLProvider = ({ children }: Props) => {
  const client = useMemo(
    () =>
      createClient({
        url: NEXT_PUBLIC_GRAPHQL_URL,
        requestPolicy: 'cache-first',
      }),
    []
  )

  return <Provider value={client}>{children}</Provider>
}
