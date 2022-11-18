import { Template } from '@/_core/components/Template'
import { Top } from '@/top'
import { NextPage } from 'next'
import { Meta } from '@/_core/components/Meta'

const TopPage: NextPage = () => {
  return (
    <>
      <Meta />
      <Template>
        <Top />
      </Template>
    </>
  )
}

export default TopPage
