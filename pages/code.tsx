// import { useRouter } from 'next/router'
import { Template } from '@/_core/components/Template'
import { NextPage } from 'next'
import { Code } from '@/code'
// import { Meta, siteTitle } from '@/_core/components/Meta'

const CodePage: NextPage = () => {
  // const router = useRouter()
  // const query = router.query.string as string | undefined

  return (
    <>
      {/* <Meta title={`${siteTitle} - ${query}`} /> */}
      <Template>
        <Code />
      </Template>
    </>
  )
}

export default CodePage
