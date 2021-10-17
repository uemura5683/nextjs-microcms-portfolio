
/**
 * common
 */
import React from 'react'
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