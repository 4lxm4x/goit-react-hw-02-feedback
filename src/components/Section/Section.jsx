import './Section.css'

const Section = ({ title, children }) => {

    return (<>
        <p className='section'>{title}</p>
        {children}
    </>)

}


export default Section;