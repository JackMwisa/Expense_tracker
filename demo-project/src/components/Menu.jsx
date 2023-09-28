
import "./styles.css"


let courses = [

    {
        name: "Computer Science",
        code: "CS102",
        price: 7
    },
    {
        name: "Information Technology",
        code: "CS101",
        price: 9
    },
    {
        name: "Cyber Security",
        code: "CS104",
        price: 9
    },
    {
        name: "Application Development",
        code: "CS107",
        price: 9
    }

]



function Menu () {

    let course = courses

    let coursesNum = courses.length

    return (

        <div className="menu">

            <p>The Courses We Offer</p>


            <ul className="courses">

                {course.map()}
                
            </ul>              
        </div>
    )
}

export default Menu