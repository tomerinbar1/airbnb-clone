export const DetailsBasicInfo = ({ host, capacity, bathrooms, bedrooms }) => {
  const getHostImg = () => {
    const gender = Math.random() < 0.5 ? 'male' : 'female'
    console.log(gender);
    const randomNumber = Math.floor(Math.random() * 78)
    console.log(randomNumber);
    const imagePath = `../assets/img/usersImgs/${gender}/${randomNumber}.jpg`
    console.log(imagePath);
    return imagePath
  }

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
      <img src={getHostImg()} alt="Host" />
    </div>
  )
}
