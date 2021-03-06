import React, { useMemo } from 'react'
import makeSvgPath from '../../shared/functions/makeSvgPath'
import { PortAlignment } from '../../shared/Types'

export interface Segment {
  from: [number, number]
  to: [number, number]
  alignment: PortAlignment
}

/**
 * Segment
 */
const DiagramSegment = (props: Segment) => {
  const { from, to, alignment } = props
  const path = useMemo(() => {
    const pathOptions = { type: 'bezier', inputAlignment: alignment }
    return makeSvgPath(from, to, pathOptions)
  }, [from, to, alignment])

  return (
    <g className="bi-diagram-segment">
      <path d={path} />
      <circle r="6.5" cx={to[0]} cy={to[1]} />
    </g>
  )
}

DiagramSegment.defaultProps = {
  alignment: undefined
}

export default React.memo(DiagramSegment)
