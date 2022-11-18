import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { assetsUrl } from '@/_core/utils/assets_url'
import { useTranslation, useLanguageQuery } from 'next-export-i18n'

const strageKey = 'indexInputSessionStorageKey'

export const Top: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [promocodes, setPromocodes] = useState<string[]>([])
  const [baseUrl, setBaseUrl] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const state = useRouter()
  const divRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const [query] = useLanguageQuery()

  useEffect(() => {
    setInputValue(sessionStorage.getItem(strageKey) ?? '')
  }, [])

  useEffect(() => {
    sessionStorage.setItem(strageKey, inputValue)
    setPromocodes(inputValue.split('\n').filter((v) => v))
  }, [inputValue])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | undefined) => {
    const value = e?.target.value ?? ''
    setInputValue(value)
  }

  const copyClick = () => {
    if (divRef.current?.innerText) {
      navigator.clipboard.writeText(divRef.current.innerText)
      setCopied(true)
    }
  }

  useEffect(() => {
    setBaseUrl(window.location.origin + '/')
  }, [state.pathname])

  return (
    <>
      <div className={styles.flex}>
        <div className={styles.inputSeparateDiv}>
          <form>
            <label htmlFor='input'>
              <b>{t('index.paste')}</b>
              <textarea
                className={styles.textarea}
                id='input'
                rows={Math.max(promocodes.length + 1, 6)}
                onChange={handleChange}
                value={inputValue}
                placeholder={t('index.hint')}
              ></textarea>
            </label>
            <span className={styles.subText}>{t('index.multiLine')}</span>
          </form>
        </div>
        <div className={styles.inputSeparateDiv}>
          <ul>
            {promocodes.map((v) => {
              return (
                <li key={`${v}link`}>
                  <Link href={`/code${urlParams(query.lang, v)}`}>{v}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {!!promocodes.length && (
        <div className={styles.markdown}>
          <span>{t('index.md')}</span>
          <button className={styles.copyButton} onClick={copyClick}>
            {copied ? t('index.copied') : t('index.copy')}
          </button>
          <div className={styles.copyArea} ref={divRef}>
            {promocodes.map((v) => {
              return (
                <div key={`${v}md`}>
                  - [ ] [{v}]({baseUrl}code{urlParams(query.lang, v)})
                </div>
              )
            })}
          </div>
        </div>
      )}

      <hr className={styles.hr} />

      <h2>{t('index.about')}</h2>
      <p>{t('index.message1')}</p>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionSeparetor}>
          <p className={styles.p}>{t('index.message2')}</p>
        </div>
        <div className={styles.screenshotContainer}>
          <Image className={styles.screenshot} src={assetsUrl(`/images/romoco_input.jpg`)} alt='romoco input' fill />
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionSeparetor}>
          <p className={styles.p}>{t('index.message3')}</p>
        </div>
        <div className={styles.screenshotContainer}>
          <Image className={styles.screenshot} src={assetsUrl(`/images/camera.jpg`)} alt='promotion code camera' fill />
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionSeparetor}>
          <p className={styles.p}>{t('index.message4')}</p>
        </div>
        <div className={styles.screenshotContainer}>
          <Image className={styles.screenshot} src={assetsUrl(`/images/markdown.jpg`)} alt='markdown copy' fill />
        </div>
      </div>
      <div className={styles.separator} />
      <p className={styles.p}>{t('index.message5')}</p>
    </>
  )
}

const urlParams = (lang: string, string: string): string => {
  let params = `?string=${string}`
  if (lang !== 'ja') {
    params += `&lang=${lang}`
  }
  return params
}
