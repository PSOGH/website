import Vaisakhi2023 from './va_23'
import Vaisakhi2024 from './va_24'

type Props = {}

export default function EventsPage({}: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Events conducted by PSGH
    </h2>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Upcoming Events
    </h4>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:w-5/6 mx-auto">
      <Vaisakhi2025 />
    </div>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Past Events
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-5/6">
      <div className="col-span-1">
        <Vaisakhi2024 />
        <Vaisakhi2023 />
      </div>
    </div>
  </>
}