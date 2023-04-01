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

  return (
    <ul className="style-none">
      <li className="nav-item">
        <CustomLink color="black" to={'/' + ws}> Inicio </CustomLink>
      </li>
      {_items.items[0].items.map((item) => (
          <>
          {item.dropdownList ? (
                  <li className="nav-item" key={item.id}>
                      <a
                          className="dropdown-toggle"
                          href="#."
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-auto-close="outside"
                      >
                          {capitalize(item.title)}
                      </a>
                      <ul className="dropdown-menu">
                          {item.dropdownList.map((list, i) => (
                              <li key={i}>
                                  <CustomLink to={list.route} className="dropdown-item">
                                      <span>{capitalize(list.title)}</span>
                                  </CustomLink>
                              </li>
                          ))}
                      </ul>
                  </li>
              ) : (
              <li className="nav-item">
                  <CustomLink color="black" to={item.route}>{capitalize(item.title)}</CustomLink>
              </li>
              )}
          </>
      ))}
    </ul>
  );
};

export default SidebarMenu;
