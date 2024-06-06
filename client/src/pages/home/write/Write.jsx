import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://i.pinimg.com/originals/85/ed/7e/85ed7e977da2e8eebe3fb5740c48fe30.jpg" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus" />
                </label>
                <input type="file" id='fileInput' className='fileInput'/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' placeholder='Tell your story...' name="" id=""></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
