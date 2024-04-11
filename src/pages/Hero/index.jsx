import './index.scss'
import heroIcon from '../../assets/hero-icon.svg'
export default function Hero() {
  return (
    <>
      <div className="home-hero">
        <div className="container">
          <div className="hero-container d-flex row">
            <div className="section col-md-6">
              <div className="text-container">
                <h6 className='mb-2'>Hello</h6>
                <h1 className='mb-2'>I'm Jayashree</h1>
                <p className='mb-4'>Software <span className='text-highlight'>Developer</span></p>
                <a className='btn' href="">Hire me</a>
              </div>
            </div>
            <div className="section col-md-6">
              <img className='img-fluid' src={heroIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
