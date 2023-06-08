import GoogleMapReact from 'google-map-react'

export const DetailsMap = ({ name, summary, loc }) => {
  const KEY_API = 'AIzaSyCSTYpS7R9HWo0VhmC5M81BkN-O0jP-o0I'

  const lan = loc.lat
  const lat = loc.lan

  const defaultProps = {
    center: {
      lat: lat,
      lng: lan,
    },
    zoom: 14,
  }

  const CustomMarker = ({ text }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        style={{
          position: 'absolute',
          top: '-20px', // Adjust the vertical position as needed
          left: '-20px', // Adjust the horizontal position as needed
          backgroundColor: 'white',
          color: 'black',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        {text}
      </div>
      <div
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'red', // Change the marker color as needed
          borderRadius: '50%',
        }}
      ></div>
    </div>
  )

  const apiIsLoaded = (map, maps) => {
    return new maps.Marker({
      position: { lat: lat, lng: lan },
      map,
    })
  }

  return (
    <div className="details-map-wrapper">
      <h1>Where you’ll be</h1>
      <div className="details-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: KEY_API,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
        <CustomMarker
          lat={lat}
          lng={lan}
          text="Exact location provided after booking"
        />
      </div>

      <div className="place-info">
        <h3>{name}</h3>
        <p>{summary}</p>
        <a href="">Show more</a>
      </div>
    </div>
  )
}
