
import React from 'react';
import Navi from '../framework/nav'

export default function DrawerMenu( { home
  }: {
    home?: boolean
  }) {
  const [close, setOpen] = React.useState(true)
  const toggle = () => setOpen(!close)
  return (
    <>  
      <button onClick={toggle} className={close ? 'header--menu__btn isClose' : 'header--menu__btn isOpen'}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={close ? 'header--menu__content isClose' : 'header--menu__content isOpen'}>
        {home ? (
            <>
              <Navi home/>
            </>
          ) : (
            <>
              <Navi/>
            </>
          )}
        <button onClick={toggle} className={close ? 'overlay isClose' : 'overlay isOpen'}></button>
      </div>
    </>
  )
}