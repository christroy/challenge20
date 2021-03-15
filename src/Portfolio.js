import React from 'react'
import "./Portfolio.css"
function Portfolio() {
    const list=[
        {
            title:"Project 1", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
        },
        {
            title:"Project 2", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
        },
        {
            title:"Project 3", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
        },
        {
            title:"Project 4", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
        },
        {
            title:"Project 5", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
        },
        {
            title:"Project 6", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            github: "this is where the project resides, like github pages",
            live:""
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
                                
                                <img src={item.image} alt = {item.title}/>
                                <h2>{item.title}</h2>
                                <p>
                                    {item.desc}
                                </p>
                                <div className="buttonGroup">
                                <a href={item.github}>GitHub</a>
                                <a href={item.live}>Live</a>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
