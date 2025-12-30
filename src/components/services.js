import SectionTitle from './sectionTitle'
import { serviceData } from '../data'

const services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <SectionTitle title="our" subTitle=" services" />
      </div>
      <div className="section-center services-center">
        {serviceData.map((serviceData) => {
          return (
            <article className="service" key={serviceData.id}>
              <span className="service-icon">
                <i className={serviceData.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serviceData.title}</h4>
                <p className="service-text">{serviceData.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default services
