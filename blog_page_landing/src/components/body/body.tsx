
import './body.scss'
import moreInfoImage from '../../assets/images/illustration-editor-desktop.svg'
export const Body = () => {
    return (
        <>
            <h1 className='design-future'>Designed for the future</h1>
            <section className="more-info">

                <div className="content-div">
                    <div className="content-info">
                        <h2>Introducing an extensible editor</h2>
                        <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.</p>
                    </div>
                    <div className="content-info">
                        <h2>Robust content management</h2>
                        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>

                <div className="image-div">
                    <img src={moreInfoImage} alt="more info" />
                </div>

            </section>

        </>
    )
}
