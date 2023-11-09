import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

import { AlignJustify, Globe } from 'lucide-react'
import Link from 'next/link'

const ActionButtons = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                <Link href={'/'} passHref>
                  Sign In
                </Link>
                <Link href={'/'} passHref>
                  Get Started
                </Link>
                <Link href={'/'} passHref>
                  Pricing
                </Link>
                <Link href={'/'} passHref>
                  Features
                </Link>
                <Link href={'/'} passHref>
                  Contact
                </Link>
                <Link href={'/'} passHref>
                  About
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default ActionButtons
