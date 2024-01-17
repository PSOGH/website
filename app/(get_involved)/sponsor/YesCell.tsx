import { CheckIcon } from 'lucide-react'
import React from 'react'

type Props = {
  value: string,
}

function YesCellComponent({ value }: Props) {
  return <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
    <CheckIcon className="inline-block w-6 h-6 stroke-lime-600 mx-auto" /> {value}
  </td>
}

export default YesCellComponent