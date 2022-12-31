import {useState} from 'react'

const DetailsFaq = ({title, descr}) => {



    const [show, setShow] = useState(false);


    const handleClick =()=> {
        setShow(!show)
    }
  return (
    <>
       <div className='parent-tab'>
                        <div className='tab'>
                          <span className='wrapper__title'>{title}</span>
                            <button className="icon"   onClick={handleClick}>
                                {show ? (
                                   <i className="fas fa-minus"></i>
                                ) : (
                                    
                                    <i className="fas fa-plus"></i>
                                )}
                            </button>
                        </div>

                        <div className='content'>
                            {show && <p className='content__descr'>{descr}</p>}
                        </div>
                    </div>
    </>
  )
}

export default DetailsFaq