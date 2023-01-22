import React from 'react'
import './Skill.css'

const Skills = () => {
  return (
<div id ="skills">
            <div className="skill-main-grid">
                <div className="skill-grid1">
                    <h3>SLEEPING</h3> <img alt="profile-pic" src="assets/sleeping.jpg" width="250" height="200"/>
                    <p></p>
                </div>
                <div className="skill-grid2">
                        <h3>EWAN</h3><img alt="profile-pic" src="assets/ewankona.jpg" width="250" height="200"/>
                        <p></p>
                </div>
                <div className="skill-grid3">
                        <h3>COMPUTER GAMES</h3> <img alt="profile-pic" src="assets/computer games.jpg" width="250" height="200"/>
                        <p></p>
                </div>
                <div className="skill-grid4">
                        <h3>NOTHING</h3> <img alt="profile-pic" src="assets/nothing.jpg" width="250" height="200"/>
                        <p></p>
                </div>
            </div>
            <h2>Programming Languages</h2>
            
            <div className="skill-main-grid">
                <div className="skill-grid1">
                    <h3>CSS</h3><img alt="profile-pic" src="assets/ewan.png" width="128" height="128"/>
                    <p>Stands for "Cascading Style Sheet." Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.</p>
                </div>
                <div className="skill-grid2">
                        <h3>JAVASCRIPT</h3><img alt="profile-pic" src="assets/js.png" width="128" height="128"/>
                        <p>JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.</p>
                </div>
                <div className="skill-grid3">
                        <h3>JAVA</h3><img alt="profile-pic" src="assets/java.png" width="128" height="128"/>
                        <p>Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.</p>
                </div>
                <div className="skill-grid4">
                        <h3>C++</h3><img alt="profile-pic" src="assets/c++.png" width="128" height="128"/>
                        <p>C++ is a high-level programming language developed by Bjarne Stroustrup at Bell Labs. C++ adds object-oriented features to its predecessor, C. C++ is one of the most popular programming language for graphical applications, such as those that run in Windows and Macintosh environments.</p>
                </div>
                </div>
</div>

)
}
export default Skills