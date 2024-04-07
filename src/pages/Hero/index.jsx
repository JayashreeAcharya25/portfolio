import './index.scss'
export default function Hero() {
  return (
    <>
      <div className="home-hero">
        <div className="container">
          <div className="hero-container d-flex">
            <div className="section">
              <div className="text-container">
                <h6 className='mb-2'>Hello</h6>
                <h1 className='mb-2'>I'm Jayashree</h1>
                <p className='mb-4'>Software <span className='text-highlight'>Developer</span></p>
                <a className='btn' href="">Hire me</a>
              </div>
            </div>
            <div className="section"></div>
          </div>
        </div>
      </div>
    </>
  );
}
