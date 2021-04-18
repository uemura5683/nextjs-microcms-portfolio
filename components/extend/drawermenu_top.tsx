
import React from 'react';
import Navi from '../../components/nav'

const DrawerMenu = () => {

  const [close, setOpen] = React.useState(true)
  // open という名前の state 変数を宣言、初期値 true をセット
  const toggle = () => setOpen(!close)

  return (
    <>  
      <button onClick={toggle} className={close ? 'header--menu__btn isClose' : 'header--menu__btn isOpen'}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={close ? 'header--menu__content isClose' : 'header--menu__content isOpen'}>
        <Navi/>
        <button onClick={toggle} className={close ? 'overlay isClose' : 'overlay isOpen'}></button>
      </div>
    </>
  )
}
export default DrawerMenu;