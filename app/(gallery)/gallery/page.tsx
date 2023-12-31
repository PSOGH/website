import React from 'react'

type Props = {}

export default function GalleriesPage({}: Props) {
  return <>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Photo and Video Galleries
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      View our photo and video galleries from past events. Also available are the sponsor lists for each event.
    </p>
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Event
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Galary Links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Vaisakhi Mela 2023
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a href="/gallery/va_23">Event Pictures</a> | <a href="/gallery/sponsors_va_23">Sponsors</a>
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Archive (Events before 2023)
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a href='/gallery/historic'>Event Pictures</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
}