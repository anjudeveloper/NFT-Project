import BaseLayout from "../components/Layout"
import Home from "../components/Home"
import Link from "next/link"

export default function BaseHome() {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  )
}
