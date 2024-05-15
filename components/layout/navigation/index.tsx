"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { Logo } from "@/components/icons";
import { router as links, social } from "@/constants/links";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Icons from "@/components/icons/icons";
export const Navigation: React.FC = ({}) => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container">
        <div className={styles.container}>
          <Link href="/">
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.linkBox}>
            {links.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={classNames(
                  styles.link,
                  pathname === i.href && styles.active
                )}
              >
                {i.label}
              </Link>
            ))}
          </div>
          <div className={styles.socialBox}>
            {social.map((i) => (
              <Link href={i.href} target="_blank">
                <Icons name={i.icon} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
