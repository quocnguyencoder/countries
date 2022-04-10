import { useRouter } from 'next/router'
import React from 'react'

const Detail = () => {
  const router = useRouter()
  const { name } = router.query
  return (
    <>
      <div>{name}</div>
      <button onClick={() => router.back()}>go back</button>
    </>
  )
}

export default Detail
