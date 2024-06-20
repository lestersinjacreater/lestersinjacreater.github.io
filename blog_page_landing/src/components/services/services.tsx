

import './services.scss'
import Editor from '../../assets/images/illustration-laptop-desktop.svg'
import sevicePhone from '../../assets/images/illustration-phones.svg'


export const Services = () => {
    return (
        <section className="services">
            <div className="service">
                <div className="phone-image-div">
                    <img src={sevicePhone} alt="service phone" width='200px' />
                </div>
                <div className="desc">
                    <h2>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>


            <div className="service2">

                <div className="editor-img-div">
                    <img src={Editor} alt="editor" width='200px' />
                </div>

                <div className="wrap-div">
                    <div className="service-2">
                        <h2>Free, open, simple</h2>
                        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div className="service-2">
                        <h2>Powerful tooling</h2>
                        <p>  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
