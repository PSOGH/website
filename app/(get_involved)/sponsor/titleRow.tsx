import React from 'react'

type Props = {
  item_title: string,
  sponsor_packages: string[]
}

function TitleRowComponent({ item_title, sponsor_packages }: Props) {
  return <tr className="m-0 border-t p-0 even:bg-muted">
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" colSpan={3}>
      {item_title}
    </th>
    {
      sponsor_packages.map((sponsor_package, index) => {
        return <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" key={index}>
          {sponsor_package}
        </th>
      })
    }
  </tr>
}

export default TitleRowComponent