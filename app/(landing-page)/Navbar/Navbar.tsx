import ActionButtons from './_components/buttons'
import Logo from './_components/logo'
import { NavigationMenuBar } from './_components/menubar'

export const Navbar = () => {
  return (
    <div>
      <div className="flex w-2/3 md:w-1/2">
        <Logo />
        <NavigationMenuBar />
      </div>
      <ActionButtons />
    </div>
  )
}
