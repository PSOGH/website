import { DashIcon } from '@radix-ui/react-icons'
import React from 'react'

type Props = {
  value: string
}

function NoCellComponent({ value }: Props) {
  return <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
    <DashIcon className="inline-block w-6 h-6 stroke-gray-400 mx-auto" /> {value}
  </td>
}

export default NoCellComponent