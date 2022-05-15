import { VStack } from "@chakra-ui/react"

const TwoStack = ({ children }) => {
  return <VStack>
    {children}
    {children}
  </VStack>
}

export const BigStack = ({ children, depth = 0 }) => {
  let component = children
  while (depth--) component = <TwoStack>{component}</TwoStack>
  return component
}