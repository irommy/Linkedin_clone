import { Avatar } from "@mui/material";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import React from "react";
import InputOption from "./InputOption";

import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOption
          Icon={ThumbUpOffAltOutlinedIcon}
          title='Like'
          color='gray'
        />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
}

export default Post;
