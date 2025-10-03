'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const COMPANY_NAME = 'Godwin Solutions LLC'

const websites = [
  {
    title: 'Jeremy Godwin',
    description: 'Professional speaker, coach, and thought leader helping individuals and organizations achieve breakthrough results.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80',
    url: 'https://jeremygodwin.com',
    domain: 'JeremyGodwin.com',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'The Godwin Group',
    description: 'The non-profit side of Godwin Solutions LLC that focuses on a direct partnership with Builders International, building places where people find hope around the world.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    url: 'https://www.thegodwingroup.org',
    domain: 'TheGodwinGroup.org',
    color: 'from-emerald-600 to-emerald-800'
  },
  {
    title: 'Beneath The Ink',
    description: 'Premium printing services with competitive pricing and exceptional quality for all your business needs.',
    image: 'https://images.unsplash.com/photo-1596514197187-430c7b6dd636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    url: 'https://beneaththeink.cc',
    domain: 'BeneathTheInk.cc',
    color: 'from-purple-600 to-purple-800'
  }
]

export default function GodwinSolutions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-gradient-radial from-blue-100/20 via-transparent to-transparent"></div>
      <div className="relative">
        <div className="container-max section-padding">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center bg-white/80 backdrop-blur-md rounded-3xl px-10 py-6 shadow-lg ring-1 ring-godwin-blue/20">
                <Image
                  src="/godwin-solutions-logo.png"
                  alt={`${COMPANY_NAME} logo`}
                  width={220}
                  height={88}
                  priority
                  className="h-auto w-44 md:w-56"
                />
              </div>
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-godwin-blue via-blue-700 to-indigo-800 mb-8 tracking-tight">
              {COMPANY_NAME}
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-godwin-blue via-godwin-gold to-amber-500 rounded-full mx-auto mb-8"></div>
            <p className="text-2xl lg:text-3xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
              Welcome to the professional network of{' '}
              <span className="font-semibold text-godwin-blue font-serif">Jeremy Godwin</span>,
              proudly powered by {COMPANY_NAME}.
            </p>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4 font-light">
              Explore our comprehensive suite of services designed to drive excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {websites.map((site, index) => (
              <div
                key={site.title}
                className="group relative overflow-hidden rounded-3xl shadow-xl border border-white/20 card-hover bg-white/90 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${site.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {site.domain}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-godwin-blue to-blue-700 mb-5 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                    {site.title}
                  </h3>
                  <p className="text-slate-700 mb-8 leading-relaxed text-lg font-light">
                    {site.description}
                  </p>
                  
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${site.title}`}
                    className="inline-flex items-center bg-gradient-to-r from-godwin-blue to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Visit Site
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 lg:p-16 max-w-5xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-godwin-blue to-blue-700 mb-8">
                Connect with Jeremy Godwin
              </h2>
              <p className="text-xl lg:text-2xl text-slate-700 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                For inquiries, partnerships, or to learn more about how {COMPANY_NAME} can support your mission, 
                reach out directly via email or explore the individual websites above.
              </p>
              <a
                href="mailto:Jeremy@GodwinSolutions.cc"
                className="inline-flex items-center bg-gradient-to-r from-godwin-blue to-blue-700 text-white text-xl px-10 py-5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="mr-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Jeremy@GodwinSolutions.cc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
