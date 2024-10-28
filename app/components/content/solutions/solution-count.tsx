import React, { Fragment } from 'react'
import { TContent } from "@/app/apis/home";

interface SolutionCountProps {
  data: TContent[]
}

const SolutionCount: React.FC<SolutionCountProps> = ({data}) => {

  return (
    <div className='container flex justify-between'>
      {
        data.map((item, idx) => (
          <Fragment key={idx}>
            <div className='text-center'>
              <div className='text-[68px] text-primary'>
                {item.simpleContent}{`+`}
              </div>
              <div>
                {item.title}
              </div>
            </div>
            {
              idx < (data.length - 1) && <div className='border-l-[1px]'></div>
            }
          </Fragment>
        ))
      }
    </div>
  )
}

export default SolutionCount
