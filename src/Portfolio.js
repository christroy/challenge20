import React from 'react'
import "./Portfolio.css"
function Portfolio() {
    const list=[
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            link: "this is where the project resides, like github pages"
        },
    ]

    return (
        <div className= "portfolio">
            <h1>Portfolio</h1>
            <div className= "portfolio_container">
                {
                    list.map((item, index) => {
                        return(
                            <div className="portfolio_card">
                                <a href={item.link}>
                                <img src={item.image} alt = {item.title}/>
                                <h2>{item.title}</h2>
                                <p>
                                    {item.desc}
                                </p>
                                </a>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
