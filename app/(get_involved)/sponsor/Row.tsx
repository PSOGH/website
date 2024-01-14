import React from 'react'
import YesCellComponent from './YesCell'
import NoCellComponent from './NoCell'
import TextCellComponent from './ValueCell'

type Props = {
  value: string,
  checks: string[],
}

function RowComponent({ value, checks }: Props) {
  return <tr className="m-0 border-t p-0 even:bg-muted">
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right text-base" colSpan={4}>
      {value == "VIP Box seating option available" ? <span>VIP Box seating <span className='underline-offset-2 underline'>option</span> available <span className='text-xs'>*Limited availability</span></span> : value}
    </td>
    {
      checks.map((check, index) => {
        if (check.startsWith('yes') || check.startsWith('yes:')) {
          return <YesCellComponent key={index} value={check === 'yes' ? '' : check.substring(4)} />
        } else if (check.startsWith('no') || check.startsWith('no:')) {
          return <NoCellComponent key={index} value={check === 'no' ? '' : check.substring(4)} />
        } else {
          return <TextCellComponent value={check} key={index} />
        }
      })
    }
  </tr>
}

export default RowComponent