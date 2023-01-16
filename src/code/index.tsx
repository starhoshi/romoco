import { useRouter } from 'next/router'
import { assetsUrl } from '../../src/_core/utils/assets_url'
import styles from './index.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

export const Code: React.FC = () => {
  const router = useRouter()
  const query = router.query.string as string | undefined
  const arrayString = query?.split('') ?? []
  const { t } = useTranslation()

  const hoge = ''

  cons hoge;

  return (
    <>
      <div className={styles.codeContainer}>
        <div className={styles.code}>
          {arrayString.map((v, i) => {
            return <Image key={i} src={assetsUrl(`/images/${v}.jpg`)} alt={v} width={15} height={21} />
          })}
        </div>
      </div>
      <p className={styles.description}>{t('code.message1')}</p>
      <div className={styles.screenshotContainer}>
        <Image className={styles.screenshot} src={assetsUrl(`/images/appstoreapp.jpg`)} alt='appstore app' fill />
        <Image className={styles.screenshot} src={assetsUrl(`/images/scan.jpg`)} alt='promotion code camera' fill />
      </div>
    </>
  )
}
