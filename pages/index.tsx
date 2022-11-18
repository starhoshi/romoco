import { useRouter } from 'next/router'
import { Meta, siteTitle } from '@/_core/components/Meta'
import { Template } from '@/_core/components/Template/template'
import { Top } from '@/top'
import { NextPage } from 'next'

const TopPage: NextPage = () => {
  const router = useRouter()
  const query = router.query.string as string | undefined

  return (
    <>
      <Meta title={`${siteTitle} - ${query}`} />
      <Template>
        <Top />
      </Template>
    </>
  )
}

export default TopPage
