import React, { useEffect, useState } from 'react' 

export const DetailsBasicInfo = ({ host, capacity, bathrooms, bedrooms }) => {
  const [hostImg, setHostImg] = useState(null)

  const getHostImg = () => {
    const gender = Math.random() < 0.5 ? 'male' : 'female'
    // console.log(gender);
    const randomNumber = Math.floor(Math.random() * 78)
    // console.log(randomNumber);
    import( `../assets/img/usersImgs/${gender}/${randomNumber}.jpg`).then((image) => {
      // console.log(image);
      setHostImg(image.default)
    })
    // console.log(imagePath);
  }

  useEffect(() => {
    getHostImg()
  }, [])

  return (
    <div className="basic-info-details">
      <div className="capacity-details">
        <h2>Home hosted by {host}</h2>
        <span>{capacity} guests</span>
        <span className="space-dot">·</span>
        <span>{bedrooms} bedrooms</span>
        <span className="space-dot">·</span>
        <span>2 beds</span>
        <span className="space-dot">·</span>
        <span>{bathrooms} bath</span>
      </div>
     { hostImg &&  <img src={hostImg} alt="Host" /> }
    </div>
  )
}
