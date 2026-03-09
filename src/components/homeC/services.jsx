import './styles/services.css'

export const Services = () => {
    const services = [
        {
            icon: <div className="service-icon"></div>,
            title: "Service 1",
            id: 1
        },
        {
            icon: <div className="service-icon"></div>,
            title: "Service 2",
            id: 2
        },
        {
            icon: <div className="service-icon"></div>,
            title: "Service 3",
            id: 3
        }
    ]

    return (
        <section className="services">
            <h3>What can we do for you?</h3>
            <ul>
                {services.map(service => <li key={service.id}>{service.icon}{service.title}</li>)}
            </ul>
        </section>
        
    )
}