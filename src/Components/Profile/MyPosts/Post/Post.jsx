import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (        
        <div className={s.item}>
          <img src='https://clck.ru/McDxM'></img>
          {props.message}
          <div>
            <span>Like</span> {props.likecounts}
          </div>
      </div>
    )
}

export default Post;