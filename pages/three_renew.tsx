import React from 'react'
import dynamic from 'next/dynamic'

const ThreeNoSSR = dynamic(
  () => import('../components/three/three_renew'),
  { ssr: false }
)
export default function Threejs() {
  return (
    <ThreeNoSSR></ThreeNoSSR>
  )
}