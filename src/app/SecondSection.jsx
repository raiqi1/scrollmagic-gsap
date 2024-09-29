import AllText from '@/components/AllText'
import Youtube from '@/components/Youtube'
import React from 'react'

export default function SecondSection() {
  return (
    <div className="p-10 md:m-16">
      <div>
        <AllText />
        <div className="mt-10">
          <Youtube />
        </div>
      </div>
    </div>
  )
}
