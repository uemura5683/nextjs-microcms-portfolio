
/**
 * common
 */
import React from 'react'

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic'

const ThreeNoSSR = dynamic(
  () => import('../components/three'),
  { ssr: false }
)

/**
 * export
 */
export default function Threejs() {
  return (
        <ThreeNoSSR></ThreeNoSSR>
  )
}