'use client'
import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import ImageKit from '@/components/imagekit'
import { ModeToggle } from '@/components/theme-button'
import { usePathname } from 'next/navigation'

type Props = {}

export default function NavbarComponent({}: Props) {
  const pathName = usePathname()
  return <nav className='bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 min-h-[75px] shadow py-1 px-1 flex flex-col lg:flex-row justify-between'>
    <div className='flex flex-row ml-4'>
      <ImageKit
        width={200}
        height={200}
        src='logo.png'
        alt='PSOGH Logo'
        className='inline-block my-auto w-32 h-32'
      />
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl small-caps text-indigo-700 dark:text-indigo-200 my-auto ml-4'>
        Punjabi Society of Greater Houston
      </h1>
    </div>
    <div className='flex flex-row ml-auto mr-8 mt-auto mb-1 min-w-[400px]'>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home Menu Button */}
          {HomeMenuItem(pathName)}

          {/* About Menu Button */}
          {AboutMenuItem(pathName)}

          {/* Leadership Menu Button */}
          {LeadershipMenuItem(pathName)}

          {/* Get Involved Menu Button */}
          {GetInvolvedMenuItem(pathName)}

          {/* Gallery Menu Button */}
          {GalleryMenuItem(pathName)}

          {/* Contact Us Menu Button */}
          {ContactUsMenuItem(pathName)}

          {/* Toggle Theme / Dark Mode */}
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
}

export function getNavMenuItemLink(link: string, text: string, pathname: string) {
  return <NavigationMenuItem>
  <Link href={link} legacyBehavior passHref>
    <NavigationMenuLink className={cn(
      'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      [link].includes(pathname) ? 'bg-accent/75 text-accent-foreground': '',
    )}>
      {text}
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
}

function getNavMenuItemDropdown(
  items: { link: string; text: string }[],
  pathname: string,
  text: string,
) {
  const allLinks = items.map(item => item.link)
  return <NavigationMenuItem>
    <NavigationMenuTrigger className={cn(
      'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      allLinks.includes(pathname) ? 'bg-accent/75 text-accent-foreground': '',
    )}>
      {text}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <div className='grid w-[232px] gap-1 p-4 grid-cols-1'>
        {
          items.map(item => {
            return <a href={item.link} key={item.link} className={cn(
              'group inline-flex h-9 w-max items-center justify-start rounded-md bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
              'w-[200px] pr-auto pl-4 py-auto',
              [item.link].includes(pathname) ? 'bg-accent/75 text-accent-foreground': '',
            )}>
              <div className="text-sm font-medium leading-none">{item.text}</div>
            </a>
          })
        }
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
}

function HomeMenuItem(pathname: string) {
  return getNavMenuItemLink('/home', 'Home', pathname)
}

function AboutMenuItem(pathname: string) {
  return getNavMenuItemDropdown([
    { link: '/about', text: 'About Us' },
    { link: '/mission', text: 'Mission & Vision' },
    { link: '/by_laws', text: 'By-Laws' },
  ], pathname, 'About')
}

function LeadershipMenuItem(pathname: string) {
  return getNavMenuItemLink('/leadership', 'Leadership', pathname)
}

function GetInvolvedMenuItem(pathname: string) {
  return getNavMenuItemDropdown([
    { link: '/volunteer', text: 'Volunteer' },
    { link: '/donate', text: 'Donate' },
    { link: '/sponsor', text: 'Sponsorship' },
    { link: '/event', text: 'Events'},
    { link: '/booth', text: 'Booths'}
  ], pathname, 'Get Involved')
}

function GalleryMenuItem(pathname: string) {
  return getNavMenuItemLink('/gallery', 'Gallery', pathname)
}

function ContactUsMenuItem(pathname: string) {
  return getNavMenuItemLink('/contact_us', 'Contact Us', pathname)
}
