import Link from "next/link";
import { Logo } from "@/components/icons";
import { social } from "@/constants/links";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons/icons";
import useNavLinks from "@/hooks/useNavLinks";
export const Navigation: React.FC = ({}) => {
  const pathname = usePathname();
  const router = useNavLinks();
  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Logo className="w-24 h-auto" />
          </Link>
          <div className="flex gap-8">
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
  );
};
