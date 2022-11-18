import { Meta } from '@/_core/components/Meta'
import { Template } from '@/_core/components/Template/template'
import { Top } from '@/top'
import { NextPage } from 'next'

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
