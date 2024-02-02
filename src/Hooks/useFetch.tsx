import React, { useEffect, useRef, useState } from 'react'

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const controller = new AbortController()
    const {signal} = controller

    const fetchData = async () => {
      setLoading(true)
      setData(null)
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        })
        if(!response.ok) throw new Error(`Error: ${response.status}`)
        const json = (await response.json()) as T
        if(!signal.aborted) setData(json);
      } catch(error) {
        if(error instanceof Error) setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[url])

  return {data, loading, error}
}

export default useFetch
