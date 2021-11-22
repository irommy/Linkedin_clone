import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recenItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img
          src='https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
        />
        <Avatar className='sidebar_avatar' />
        <h2>Ibe Irom</h2>
        <h4>irommyibe@gmail.com</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>25,678</p>
        </div>
        <div className='sidebar_stat'>
          <p>views on post</p>
          <p className='sidebar_statNumber'>5,678</p>
        </div>
      </div>
      <div className='sidebar_botton'>
        <p>Recent</p>
        <p>{recenItem("React js")}</p>
        <p>{recenItem("programming")}</p>
        <p>{recenItem("Design")}</p>
        <p>{recenItem("developer")}</p>
        <p>{recenItem("Javascript")}</p>
      </div>
    </div>
  );
}

export default Sidebar;
