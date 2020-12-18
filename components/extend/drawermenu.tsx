
import React from 'react';
import Navi from '../../components/nav'


const DrawerMenu = () => {

  const [open, setOpen] = React.useState(true)
  // open という名前の state 変数を宣言、初期値 true をセット
  const toggle = () => setOpen(!open)

  return (
    <>  
      <button onClick={toggle} className={open ? 'header--menu__btn isOpen' : 'header--menu__btn isClose'}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={open ? 'header--menu__content isOpen' : 'header--menu__content isClose'}>
        <Navi></Navi>
      </div>
    </>
  )
}
export default DrawerMenu;