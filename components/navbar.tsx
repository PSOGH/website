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

import { Icons } from '@/components/icons'
import ImageKit from '@/components/imagekit'
import { ModeToggle } from '@/components/theme-button'
import { List } from '@radix-ui/react-navigation-menu'
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
    { link: '/events', text: 'Events'},
    { link: '/booths', text: 'Booths'}
  ], pathname, 'Get Involved')
}

function GalleryMenuItem(pathname: string) {
  return getNavMenuItemLink('/gallery', 'Gallery', pathname)
}

function ContactUsMenuItem(pathname: string) {
  return getNavMenuItemLink('/contact_us', 'Contact Us', pathname)
}


// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ]

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
//               <li className='row-span-3'>
//                 <NavigationMenuLink asChild>
//                   <a
//                     className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
//                     href='/'
//                   >
//                     <Icons.logo className='h-6 w-6' />
//                     <div className='mb-2 mt-4 text-lg font-medium'>
//                       shadcn/ui
//                     </div>
//                     <p className='text-sm leading-tight text-muted-foreground'>
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href='/docs' title='Introduction'>
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href='/docs/installation' title='Installation'>
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href='/docs/primitives/typography' title='Typography'>
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href='/docs' legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className
//           )}
//           {...props}
//         >
//           <div className='text-sm font-medium leading-none'>{title}</div>
//           <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = 'ListItem'
