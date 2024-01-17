'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import ImageKit from '@/components/imagekit'
type Props = {
  items: {
    type: 'image' | 'video'
    src: string
  }[]
}

export default function CarousalComponent({ items }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(items.length)
  const autoplay = Autoplay({
    delay: 2500,
    // stopOnInteraction: true,
    waitForTransition: true,
    stopOnFocusIn: true,
    stopOnMouseEnter: true,
  })

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", async () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return <>
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
        align: 'center',
        axis: 'x',
        // direction: 'ltr',
        dragFree: true,
        dragThreshold: 10,
        duration: 25,
        startIndex: 0
      }}
      plugins={[
        autoplay
      ]}
    >
      <CarouselPrevious />
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            {item.type === 'video' ? <></> : <></>}
            {item.type === 'image' && item.src.slice(4) === 'http' ? <img src={item.src} alt="" /> : <></>}
            {item.type === 'image' && item.src.slice(4) != 'http' ? <ImageKit
              src={item.src}
              alt={`Image ${index + 1} of ${items.length}`}
              height={600}
              className='w-auto h-[600px] mx-auto md:basis-1/2 lg:basis-1/3'
            /> : <></>}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
    <div className="flex flex-cols justify-center flex-wrap">
      {items.map((item, index) => (
        <a
          key={index}
          className={`mx-1 px-auto min-w-max ${
            index === current - 1
              ? "opacity-100 bg-neutral-100"
              : "opacity-50 hover:opacity-100 bg-neutral-50"
          }`}
          onClick={() => api?.scrollTo(index)}
        >
          <ImageKit src={item.src} alt={`Image ${index + 1} of ${items.length}`} height={200} className='w-auto h-[100px] mx-auto my-1' />
        </a>
      ))}
    </div>
  </>
}
