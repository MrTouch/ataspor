function Players({ image, name, nummer }) {
  return (
    <div className="container">
        <img alt={name} src={image.fields.file.url} />
      <div className="text">
        <h2>{nummer}{name}</h2>
      </div>
    </div>
  )
}

export default Players