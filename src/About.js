import React from 'react'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import "./About.css"
function About() {
    return (
        <div className="about">
           <h1>About Me</h1> 
            <PersonPinIcon/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis enim. Fusce volutpat et neque ut consequat. 
            Sed quis libero feugiat, facilisis elit vel, consequat tortor. Pellentesque vel lorem mi. Aliquam rutrum lorem imperdiet 
            mi gravida, sed accumsan purus dictum. Nunc rhoncus augue sit amet lacus lobortis sodales. Nam elementum velit porta, 
            vulputate ex et, fermentum dolor. Curabitur quis massa lacinia mauris dapibus pretium et vitae urna. Nunc nibh risus, 
            varius at felis non, facilisis porta lacus. Nunc nec finibus ligula. Praesent nec vestibulum neque. Fusce rhoncus vel 
            ipsum vel aliquam. Nullam eu dolor sed est dignissim eleifend eget non arcu. Ut volutpat consectetur pretium.
            </p>

            <p>
                 Mauris fermentum justo elementum, viverra odio ut, vehicula quam. Donec faucibus vestibulum dignissim. Morbi lorem 
                urna, luctus vitae rutrum et, blandit ac justo. Sed non massa quam. Etiam a dolor et justo consectetur volutpat. 
                Cras ac luctus eros. Etiam sagittis volutpat libero in luctus. Suspendisse tristique enim at ante fringilla, vel 
                maximus lectus luctus.
            </p>
        </div>
    )
}

export default About
