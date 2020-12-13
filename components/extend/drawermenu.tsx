
import Navi from '../../components/nav'

const openDrawer = () => {
  
}

const DrawerMenu = () => {
  return (      
    <>  
      <button onClick={openDrawer} className="header--menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="header--menu__content">
      <Navi></Navi>
      </div>
    </>
  )
}
export default DrawerMenu;