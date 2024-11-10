'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props: any) {
  return (
    <Menu as="div" className="relative inline-block text-center mx-1">
      <div>
        <Menu.Button className="fontcolor inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-base-300 px-1 py-2 text-2xl alir">
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 fontcolor"
            aria-hidden="true"
          />
          {props.title}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col gap-1 text-center text-3xl alir">
            {props.sub1 && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={props.link1}
                    className={classNames(
                      active
                        ? 'fontcolor mx-4 px-4 '
                        : 'fontcolor',
                      'block px-4 mx-4 py-2 text-xl'
                    )}
                  >
                    {props.sub1}
                  </Link>
                )}
              </Menu.Item>
            )}
            {props.sub2 && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={props.link2}
                    className={classNames(
                      active
                        ? 'fontcolor mx-4 px-4 '
                        : 'fontcolor',
                      'block px-4 mx-4 py-2 text-xl'
                    )}
                  >
                    {props.sub2}
                  </Link>
                )}
              </Menu.Item>
            )}
            {props.sub3 && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={props.link3}
                    className={classNames(
                      active
                        ? 'fontcolor mx-4 px-4 '
                        : 'fontcolor',
                      'block px-4 mx-4 py-2 text-xl'
                    )}
                  >
                    {props.sub3}
                  </Link>
                )}
              </Menu.Item>
            )}
            {props.sub4 && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={props.link4}
                    className={classNames(
                      active
                        ? 'fontcolor mx-4 px-4 '
                        : 'fontcolor',
                      'block px-4 mx-4 py-2 text-xl'
                    )}
                  >
                    {props.sub4}
                  </Link>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
