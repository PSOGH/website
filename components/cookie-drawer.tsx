'use client'
import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

type Props = {
  agree_to_cookies: () => void
}

export default function CookieDrawerComponent({
  agree_to_cookies
}: Props) {
  const [open, setOpen] = React.useState(true)

  return <Drawer open={open}>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Cookie</DrawerTitle>
        <DrawerDescription>This website uses cookies. Continuing to use the website is considered an agreement to store cookies.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>
          <Button variant="outline" type='submit' onClick={async () => {
            agree_to_cookies();
            setOpen(false);
          }}>OK</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
}