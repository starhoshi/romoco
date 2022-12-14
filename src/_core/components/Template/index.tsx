import Link from 'next/link'
import React from 'react'
import GithubCorner from 'react-github-corner'
import styles from './index.module.css'
import { FacebookShareButton, HatenaShareButton, TwitterShareButton, TwitterIcon, FacebookIcon, HatenaIcon } from 'react-share'
import { LanguageSwitcher } from 'next-export-i18n'
import { shareTitle, shareUrl, siteTitle } from '../Meta'
import { Logo } from '../Logo'

export const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.link} href='/' passHref>
          <Logo width={54} height={54} />
          <span className={styles.span}>{siteTitle}</span>
        </Link>
        <div className={styles.langSwitcher}>
          <LanguageSwitcher lang='ja'>JA</LanguageSwitcher> | <LanguageSwitcher lang='en'>EN</LanguageSwitcher>
        </div>
      </header>
      <main suppressHydrationWarning>{children}</main>
      <footer className={styles.footer}>
        <TwitterShareButton className={styles.share} url={shareUrl} title={shareTitle} via='star__hoshi'>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton className={styles.share} url={shareUrl} title={shareTitle}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <HatenaShareButton className={styles.share} url={shareUrl} title={shareTitle}>
          <HatenaIcon size={32} round />
        </HatenaShareButton>
        <div className={styles.developerContainer}>
          <span className={styles.developedBy}>Developed by </span>
          <Link href='https://twitter.com/star__hoshi'>
            <span>@star__hoshi</span>
          </Link>
        </div>
      </footer>
      <GithubCorner href='https://github.com/starhoshi/romoco' />
    </div>
  )
}
