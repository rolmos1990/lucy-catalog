import React, {useState} from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import {connect} from "react-redux";
import {retrieveCategory} from "../../../../redux/features/category-slice";
import useCategory from "../../../../hooks/use-category";

const Sidebar = ({ className = "", items, retrieveCategory }) => {

  const { ws, categories  } = useCategory(items, retrieveCategory);

  return (
    <div
      className={`offcanvas offcanvas-end sidebar-nav ${className}`}
      tabIndex="-1"
      id="offcanvasRight"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End sidebarheader */}

      <div className="sidebar-nav-item">
        {categories && categories.length > 0 && (
            <SidebarMenu items={categories} />
        )}
      </div>
      {/* End .sidebar-nav-item */}

      <SidebarFooter />
      {/* End .sidebar-footer */}
    </div>
    //  <!-- /.sidebar-nav -->
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.category.items
  };
};

export default (connect(mapStateToProps, { retrieveCategory })(Sidebar));
