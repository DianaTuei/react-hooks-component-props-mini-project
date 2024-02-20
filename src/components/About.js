import React from "react"

function About({image, about}){

    if(image === undefined){
        const defaultImage = "https://via.placeholder.com/215"
        image = defaultImage
    }
        
   
    // const defaultImage = image ? image : <img src="https://via.placeholder.com/215"/>
 return(
    <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
    )
}

export default About