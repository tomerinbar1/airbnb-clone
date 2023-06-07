import axios from 'axios'

export const DetailsBasicInfo = ({ host, capacity, bathrooms, bedrooms }) => {
  async function getRandomAvatar() {
    try {
      const gender = Math.random() < 0.5 ? 'male' : 'female'
      const response = await axios.get(
        `https://xsgames.co/randomusers/avatar.php?g=${gender}`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching avatar:', error)
      return null
    }
  }

  async function getHostImg() {
    const randomAvatar = await getRandomAvatar()
    console.log('Random avatar:', randomAvatar)
    return randomAvatar
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
      {/* <img src={getHostImg()} alt="host image" /> */}
    </div>
  )
}
