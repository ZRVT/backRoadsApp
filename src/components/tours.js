import SectionTitle from './sectionTitle'
import { toursData } from '../data'

const tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <SectionTitle title="featured" subTitle=" tours" />
      </div>
      <div className="section-center featured-center">
        {toursData.map((toursData) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={toursData.img} className="tour-img" alt="" />
                <p className="tour-date">{toursData.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{toursData.title}</h4>
                </div>
                <p>{toursData.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {toursData.location}
                  </p>
                  <p>{toursData.duration}</p>
                  <p>{toursData.price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default tours
