import React from "react";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Post from "../Post/Post";

const PostLists = () => {
  return(
    <WrapperComponent>
      <Post
        summary="Some note"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        type="Note"
      />
    </WrapperComponent>
  )
}

export default PostLists;