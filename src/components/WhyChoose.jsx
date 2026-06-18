function WhyChoose(){

const list=[

"5+ Years Experience",

"Timely Filing",

"Affordable Pricing",

"Confidential Data Handling",

"Trusted Service",

"Dedicated Support"

]

return(

<div className="container">

<h1>Why Choose Us</h1>

<div className="cards">

{

list.map((item,index)=>(

<div className="card" key={index}>

<h3>{item}</h3>

</div>

))

}

</div>

</div>

)

}

export default WhyChoose;