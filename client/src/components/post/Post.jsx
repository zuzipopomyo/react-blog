
import './post.css'

export default function Post() {
  return (
    <div className='post'>
       <img className='postImg' src="https://i.pinimg.com/originals/16/96/33/169633f2c022f6da1f775b5e3582cee0.jpg" alt="" />
        <div className='postInfo'>
            <div className="postcats">
               <span className="postCat">Music</span>
               <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span><hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}
