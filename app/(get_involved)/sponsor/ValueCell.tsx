import React from 'react'

type Props = {
  value: string,
}

function TextCellComponent({ value }: Props) {
  return <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
    { value }
  </td>
}

export default TextCellComponent