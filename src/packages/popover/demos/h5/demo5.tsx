import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'
import { Home, Cart, Location } from '@nutui/icons-react'

const Demo5 = () => {
  const [customTarget, setCustomTarget] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: (
        <Home color="rgba(250, 44, 25, 1)" style={{ marginRight: '8px' }} />
      ),
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location style={{ marginRight: '8px' }} />,
    },
  ]

  const clickCustomHandle = () => {
    setCustomTarget(!customTarget)
  }
  return (
    <>
      <Popover
        className="demo-popover"
        visible={customTarget}
        targetId="popid"
        list={iconItemList}
        location="top-start"
        onClick={() => {
          setCustomTarget(false)
        }}
      />
      <Button
        type="primary"
        shape="square"
        id="popid"
        onClick={clickCustomHandle}
      >
        自定义目标元素
      </Button>
    </>
  )
}

export default Demo5
