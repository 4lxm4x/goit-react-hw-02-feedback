import './Section.css'

const Section = ({ title, children }) => {

    return (<>
        <h3>{title}</h3>
        {children}
    </>)

}


export default Section;