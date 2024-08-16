import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Button
} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquare, faPeopleGroup, faHammer } from '@fortawesome/free-solid-svg-icons';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const navigation = [
  { name: 'Home', href: '/', icon: "faHouse", current: true },
  { name: 'Flashcards', href: '/flashcards', icon: "faSquare", current: false },
  { name: 'Team', href: '/team', icon: "faPeopleGroup", current: false },
  { name: 'Works', href: '/works', icon: "faHammer", current: false }
];

const iconMapping = {
  faHouse: faHouse,
  faSquare: faSquare,
  faPeopleGroup: faPeopleGroup,
  faHammer: faHammer,
};


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    <FontAwesomeIcon icon={iconMapping[item.icon]} className="pr-2" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <Button
            onClick={() => (window.location.href = "/generate")}
            sx={{ marginX: 3}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-4 py-1 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                {" "}
                + Create
                </div>
          </Button>
          </div>
          <SignedOut>
            <Button sx={{ color: 'white' }} href="sign-in">
              LogIn
            </Button>
            <Button sx={{ color: 'white' }} href="sign-up">
              SignUp
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
