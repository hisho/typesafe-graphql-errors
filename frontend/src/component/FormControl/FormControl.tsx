import {
  Box,
  chakra,
  Flex,
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
} from '@chakra-ui/react'
import type { ReactElement, ReactNode } from 'react'
import { useMemo } from 'react'
import { isArray, isArrayNotEmpty, isString } from 'typesafe-utils'

/**
 * @see https://chakra-ui.com/docs/components/form/form-control
 */
export type FormControlProps = {
  children: ReactElement
  errorMessages?: string | string[] | null | undefined
  helperText?: string
  isRequired?: boolean
  label?: ReactNode
}

export const FormControl = ({
  children,
  errorMessages: _errorMessages,
  helperText,
  isRequired,
  label,
}: FormControlProps) => {
  const errorMessages = useMemo(() => {
    const messages = isArray(_errorMessages)
      ? [..._errorMessages]
      : [_errorMessages]

    return messages.filter(isString)
  }, [_errorMessages])

  const isInvalid = isArrayNotEmpty(errorMessages)

  return (
    <ChakraFormControl isInvalid={isInvalid}>
      {label && (
        <Flex alignItems={'center'}>
          <FormLabel lineHeight={1} mb={0} mr={0} fontSize={'14px'}>
            {label}
            {isRequired && (
              <chakra.span
                role={'presentation'}
                aria-hidden
                color={'red.500'}
                fontSize={'10px'}
                verticalAlign={'top'}
              >
                *
              </chakra.span>
            )}
          </FormLabel>
        </Flex>
      )}
      <Box mt={label ? '4px' : 0}>{children}</Box>
      {helperText && (
        <FormHelperText fontSize={'10px'} mt={0}>
          {helperText}
        </FormHelperText>
      )}
      {isInvalid && (
        <Grid gap={'4px'} mt={'6px'}>
          {errorMessages.map((errorMessage, index) => (
            <FormErrorMessage
              color={'red.500'}
              fontSize={'12px'}
              key={`FormErrorMessage_${errorMessage}_${index}`}
              lineHeight={1}
              mt={0}
            >
              {errorMessage}
            </FormErrorMessage>
          ))}
        </Grid>
      )}
    </ChakraFormControl>
  )
}
