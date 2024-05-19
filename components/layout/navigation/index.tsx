import cn from "classnames";
import Link from "next/link";
import { Logo, Menu } from "@/components/icons";
import { social } from "@/constants/links";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons/icons";
import useNavLinks from "@/hooks/useNavLinks";
import { useState } from "react";
export const Navigation: React.FC = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useNavLinks();
  const toggle = () => setOpen((prev) => !prev);
  return (
    <>
      <Menu
        onClick={toggle}
        className="lg:invisible visible fixed top-4 right-16 text-black w-8 h-8 cursor-pointer z-30"
      />
      <nav
        className={cn(
          "lg:sticky fixed lg:h-fit h-full w-full top-0 bg-white z-10 ease-out duration-300",
          isOpen ? "left-0" : "left-full"
        )}
      >
        <div className="container mx-auto h-full">
          <div className="flex lg:flex-row flex-col h-full lg:justify-between justify-center lg:gap-[initial] gap-20 items-center py-5">
            <Link href="/">
              <Logo className="w-24 h-auto" />
            </Link>
            <div className="flex gap-8 lg:flex-row flex-col">
              {router.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className={classNames(
                    "text-black text-xl font-semibold",
                    pathname === i.href && "text-primary text-border-1"
                  )}
                >
                  {i.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-center items-center gap-8">
              {social.map((i) => (
                <Link key={i.href} href={i.href} target="_blank">
                  <Icons name={i.icon} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
