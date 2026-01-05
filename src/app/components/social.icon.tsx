import Image from "next/image"

export function SocialIcon({
  href,
  icon,
}: {
  href: string
  icon: any
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-8 hover:opacity-50 transition-opacity duration-300"
    >
      <Image src={icon} alt="" width={25} height={25} />
    </a>
  )
}