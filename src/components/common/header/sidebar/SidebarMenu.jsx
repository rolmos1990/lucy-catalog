import React from "react";
import CustomLink from "../../header/mega-menu/CustomLink";
import {useParams} from "react-router";

const SidebarMenu = (_items) => {

  let { ws } = useParams();

  if(!(_items.items && _items.items.length > 0 && _items.items[0])){
    return;
  }

  function capitalize(word) {
    try {
      const capitalized = (word.charAt(0).toUpperCase()) + word.toLowerCase().slice(1);
      return capitalized;
    }catch(e){
      return word;
    }
  }

  function closeMenu(){

    console.log('close menu...');

    _items.onClose();

    //clean menu information
    try {
      document.getElementsByClassName('offcanvas')[0].className = 'offcanvas offcanvas-end sidebar-nav';
      document.getElementsByClassName('offcanvas')[0].removeAttribute('aria-modal');
      document.getElementsByClassName('offcanvas')[0].removeAttribute('role');
      document.getElementsByClassName('offcanvas-backdrop')[0].remove();
    }catch(e){
      console.log('got error...');
    }
  }

  return (
    <ul className="style-none">
      <li className="nav-item">
        <CustomLink color="black" to={'/' + ws}> Inicio </CustomLink>
      </li>
      {_items.items[0].items.map((item) => (
          <React.Fragment>
          {item.dropdownList ? (
                  <li className="nav-item" key={item.id}>

                  </li>
              ) : (
              <li className="nav-item">
                  <CustomLink color="black" to={item.route} onClick={closeMenu}>{capitalize(item.title)}</CustomLink>
              </li>
              )}
          </React.Fragment>
      ))}
    </ul>
  );
};

export default SidebarMenu;
