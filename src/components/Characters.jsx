import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className='col mb-3'> 
                    <div className='card' style={{maxWidth: '200px'}} >
                        <img src={item.image} alt="" />
                        <div className='card-body'>
                            <h5 className='card-tittle'>{item.name}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }

       
    </div>
  )
}

export default Characters;
