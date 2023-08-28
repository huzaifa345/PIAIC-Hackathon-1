'use client'
import React, { useEffect, useState } from 'react'
import Products from '@/app/components/Products/page'

export default function Page() {
  const [category, setCategory] = useState<string>()
  useEffect(() => {
    let url = document.URL.split("/")
    let category = url.pop() as string;
    setCategory(category)

  }, [category])

  return (
    <>
      {category && <Products category={category!} />}
    </>
  )
}

