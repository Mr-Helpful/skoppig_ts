import { ReactNode } from "react"

/** Link type */
export type Link = {
  input: string
  output: string
  label?: ReactNode
  readonly?: boolean
  className?: string
}

/** Port type */
export type PortAlignment = 'left' | 'right' | 'top' | 'bottom'
export type PortType = 'input' | 'output'

export type Port = {
  id: string
  canLink?: (id: string, targetId: string, type: PortType) => boolean
  alignment?: PortAlignment
  className?: string
}

/** Node type */
export type Coords = [number, number]

export type Node = {
  id: string
  coordinates: Coords
  selected?: boolean
  disableDrag?: boolean
  content?: ReactNode
  inputs?: Port[]
  outputs?: Port[]
  type?: 'default'
  render?: NodeRender
  className?: string
  data?: any
}

export type NodeRender = (
  props: Omit<Node, 'coordinates' | 'inputs' | 'outputs' | 'callbacks'> & {
    inputs: ReactNode[]
    outputs: ReactNode[]
  }
) => ReactNode

/** Schema type */
export type Schema = {
  nodes: Node[]
  links: Link[]
}

/** An object containing HTML elements */
export type ElementObject = {
  [key: string]: HTMLElement
}