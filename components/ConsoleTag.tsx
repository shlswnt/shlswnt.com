"use client"

import { useEffect } from "react"

export default function ConsoleTag() {
  useEffect(() => {
    console.clear()

    console.log(
      "%cSHLSWNT",
      `
        background: #000;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        padding: 6px 16px;
        border-radius: 4px;
        line-height: 1.2;
        font-family: Arial, sans-serif;
      `,
    )

    console.log(
      "%cBuilt by Sahil with ♥\nhttps://shlswnt.com",
      `
        color: #777;
        font-size: 12px;
        line-height: 1.4;
        font-family: Arial, sans-serif;
      `,
    )
  }, [])

  return null
}
