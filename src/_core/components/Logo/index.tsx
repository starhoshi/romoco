import React from 'react'
import { assetsUrl } from '@/_core/utils/assets_url'
import Image from 'next/image'

type Props = {
  width?: number | undefined
  height?: number | undefined
}

export const Logo: React.FC<Props> = ({ width, height }) => {
  return <Image src={assetsUrl(`/images/romoco.png`)} alt='romoco logo' width={width} height={height} />
}
