function Players({ image, name, nummer }) {
  return (
    <div className="container">
        <img alt={name} src={image.fields.file.url} />
      <div className="text">
        <h2>{nummer}{name}</h2>
      </div>
      <style jsx>{`
        .container {
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </div>
  )
}

export default Players