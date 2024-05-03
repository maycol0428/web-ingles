"use client";
import BackIcon from "@/components/icons/BackIcon";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Link } from "next-view-transitions";
import { Button, LinkIcon } from "@nextui-org/react";
import styles from "./Header.module.css";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const showButtonBack = pathname !== "/";

  return (
    <header className={styles.header} style={{ viewTransitionName: "header" }}>
      <nav className="flex gap-2 align-middle">
        {showButtonBack && (
          <div className="grid place-items-center">
            <Button
              as={Link}
              href="/"
              className="grid place-items-center bg-midnightBlue"
            >
              <BackIcon></BackIcon>
            </Button>
          </div>
        )}
        <div
          className="header__logo text-3xl"
          style={{ viewTransitionName: "header__text", width: "fit-content" }}
        >
          Maycol EM
        </div>
      </nav>
    </header>
  );
};
