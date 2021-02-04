function Navigation({ activeNavigation}) {
    return (
      <div className="container" id="navigation">
        <a href="/home">
          Home
        </a>
        <a href="/mannschaften">
          Mannschaften
        </a>
        <style jsx>{`
          
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
  
  export default Navigation