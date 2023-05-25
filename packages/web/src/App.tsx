import React from 'react'
import App from 'common/dist/index'
import {getWelcomeString} from 'common/dist/dnm'
type Props = {}

const main = (props: Props) => {
  return (
    <div>
        <App></App>
        {
getWelcomeString('selam')
        }
    </div>
  )
}

export default main;