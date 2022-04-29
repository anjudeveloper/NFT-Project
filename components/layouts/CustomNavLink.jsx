import { useRouter } from 'next/router'
import Link from "next/link";

function CustomNavLink({ children, url, href }) {
  const router = useRouter();
  const activeLinkClass = url.includes(router.pathname) ? ' active' : '';

  return <Link href={href} passHref><a className={`px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-[#fff] hover:text-[#db39fc]${activeLinkClass}`}>{children}</a></Link>
}

export default CustomNavLink