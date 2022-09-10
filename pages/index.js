import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon, ScaleIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const courses = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Moose English Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },

]
const features = [
  {
    name: 'Flexible Lessons',
    description:
      'Start your lesson anytime with one of our teachers based on your schedule. Schedule an appointment anytime.',
    icon: ScaleIcon,
  },
  {
    name: 'Interactive Learning',
    description:
      'Learning should be fun. Our teachers will help make the English process fun with interactive lessons for your child.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Highly Trained Teachers',
    description:
      'We handpick and develop talented teachers locally and abroad. This means better learning outcomes for your child and cost savings for your family.',
    icon: AcademicCapIcon,
  },
]
const footer = {


  main: [
    { name: 'Moose English Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' },

  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/nippon-dev/mooseenglish-next',
      title: 'Moose English Github Repository',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LandingPage() {
  return (
    <div className="bg-black">
      <header className="top-0 sticky z-50 border-b-2 border-mooseyellow">
        <Popover className="relative bg-black">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
              <a>
                <span className="sr-only">Moose English</span>
                <img
                  className="h-16 w-auto sm:h-20 rounded-md"
                  src="https://res.cloudinary.com/shinkirin/image/upload/v1662208305/mooseenglish/mooseLogo-checkered.webp"
                  alt="Moose English Logo"
                />
              </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-yellow-900 p-2 text-white hover:bg-mooseltblue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-900">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                  {/* Courses links. Will add later.
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-moosered focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Courses</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  End of courses links */}
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {courses.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                  <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
           
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-medium font-bubblegum text-white hover:text-mooseyellow">
                  {item.name}
                </a>
              ))}
        
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {/* Add later
              <Link href="#">
              <a className="whitespace-nowrap text-base font-medium text-white hover:text-mooseyellow">
                Sign in
              </a>
              </Link>
              */}
              <Link href="/schedule">
              <a
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-mooseyellow hover:text-black"
              >
                Register
              </a>
              </Link>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-yellow-900 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-16 w-auto"
                        src="https://res.cloudinary.com/shinkirin/image/upload/v1662208305/mooseenglish/mooseLogo-checkered.webp"
                        alt="Moose English Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-mooseltblue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-900">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    {/* Will add courses links later
                    <nav className="grid grid-cols-1 gap-7">
                      {courses.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </a>
                      ))}
                    </nav>
                    End of courses links */}
                  </div>
                </div>
                
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium  font-bubblegum text-gray-900 hover:text-yellow-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/schedule">
                    <a
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-mooseltblue"
                    >
                      Register
                    </a>
                    </Link>
                    {/* Add later
                    <p className="mt-6 text-center text-base font-medium text-gray-900">
                      Existing student?
                      <Link href="#">
                      <a className="ml-2 text-gray-900 hover:text-yellow-900">
                        Sign in
                      </a>
                      </Link>
                    </p>
                    */}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brown-900" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://res.cloudinary.com/shinkirin/image/upload/v1661674822/mooseenglish/mooseenglish-teachers.webp"
                    alt="Online English Lessons"
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block font-bubblegum text-mooseyellow">Try a 1-on-1 Demo Class Now</span>
                    <span className="block font-bubblegum text-moosebrown m-4">Just for $2.99 USD!</span>
                  </h1>
                  <p className="font-bubblegum mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                    Give Moose English a try with one of our dedicated teachers now. Our teachers follow a specialized English curriculum developed for to our boutique style online English learning centre. 
                  </p>

                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    {/* 
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    */}
                     <div className="space-y-4 sm:mx-auto">
                      <Link href="/schedule">
                      <a
                        className="flex items-center justify-center rounded-md border border-transparent bg-yellow-900 px-4 py-3 text-base font-medium font-bubblegum text-white shadow-sm hover:bg-mooseyellow hover:text-black sm:px-8 uppercase"
                      >
                        Try a demo lesson now for just $2.99 USD!
                      </a>
                      </Link>
                      {/* 
                      <Link href="/meet-our-teachers">
                      <a
                        className="flex items-center justify-center rounded-md border border-transparent bg-mooseyellow bg-opacity-60 px-4 py-3 text-base font-medium font-bubblegum text-white shadow-sm hover:bg-yellow-900 sm:px-8 uppercase"
                      >
                        Meet your teacher
                      </a>
                      </Link>
                      */}
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>{/* End of Hero Component */}

    {/* Features Component */}
    <div className="bg-black py-12 font-bubblegum">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Study English Online with Moose English.</h2>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-900 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-white">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-white">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    {/* End of Features Component */}

        {/* CTA Component */}
        <div className="relative bg-black py-16">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-black lg:block" aria-hidden="true" />
      <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover object-center shadow-2xl"
                  src="https://res.cloudinary.com/shinkirin/image/upload/v1661691808/mooseenglish/moose.webp"
                  alt="Moose English"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-moosedkblue lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg
                className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-black" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2 className="font-balonku text-4xl font-bold tracking-tight text-white" id="join-heading">
                Study English Online
              </h2>
              <p className="text-lg font-bubblegum text-white">
                 Study with trained English teachers handpicked and developed for Moose English. Our teachers follow a specialized English curriculum. Our student-centered Moose English platform eases the burden of stress for your children, helping make English learning more fun and a positive experience. 
              </p>
              <Link href="/schedule">
              <a
                className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-bubblegum font-medium text-black shadow-md hover:bg-mooseyellow sm:inline-block sm:w-auto uppercase"
              >
                Try a demo lesson now for $2.99 USD!
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of CTA Component */}

    {/* Simple CTA Component */}
     <div className="bg-black">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block font-balonku">Learn Anytime, Anywhere.</span>
          <span className="block font-bubblegum">Have the freedom to learn when you want.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="/schedule">
            <a
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-900 px-5 py-3 text-base font-medium font-bubblegum text-white hover:bg-mooseyellow hover:text-black uppercase"
            >
              Learn now
            </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="/contact" title="Contact Moose English"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-mooseyellow bg-opacity-60 px-5 py-3 text-base font-medium font-bubblegum text-white hover:bg-yellow-900 uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* End of Simple CTA Component */}
    {/* Footer Component */}
    <footer className="bg-black border-t-2 border-white border-dotted">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footer.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-white  font-bubblegum hover:text-mooseyellow">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footer.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-white hover:text-mooseyellow">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-white">&copy; 2022 Moose English, Inc. All rights reserved.</p>
      </div>
    </footer>
    {/* End of Footer Component */}
    {/* End of Landing Page */}
      </main>
    </div>


  )
}

