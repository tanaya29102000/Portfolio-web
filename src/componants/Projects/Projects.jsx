// import React from "react";


// const Projects = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <a href="/">
//           {" "}
//           <i className="fas fa-home" /> <span>home</span>{" "}
//         </a>
//         <a href="about">
//           {" "}
//           <i className="fas fa-user" /> <span>about</span>{" "}
//         </a>
//         <a href="projects">
//           {" "}
//           <i className="fas fa-briefcase" /> <span>Projects</span>{" "}
//         </a>
//         <a href="blogs">
//           {" "}
//           <i className="fas fa-blog" /> <span>education</span>{" "}
//         </a>
//         <a href="contact">
//           {" "}
//           <i className="fas fa-address-book" /> <span>contact</span>{" "}
//         </a>
//       </nav>

//       <section className="portfolio">
//       <h1 class="mt-5 heading">Heading
//           {" "}
//           <span>my</span> work{" "}
//         </h1>
//         <div className="box-container">
//           <div className="box">
//             <img src="Images/Blog2.jpg" alt="blogimg" />
//             <div className="content">
//               <h3>project 01</h3>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio, praesentium.
//               </p>
//               <a href="#">read more</a>
//             </div>
//           </div>
//           <div className="box">
//             <img src="Images/images (1).jpg" alt="blogimg" />
//             <div className="content">
//               <h3>project 02</h3>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio, praesentium.
//               </p>
//               <a href="#">read more</a>
//             </div>
//           </div>
//           <div className="box">
//             <img src="Images/Blog2.jpg" alt="blogimg" />
//             <div className="content">
//               <h3>project 03</h3>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio, praesentium.
//               </p>
//               <a href="#">read more</a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section id="showMore" class="d-none portfolio">
//         <div className="box-container">
//           <div className="box">
//             <img src="Images/project.png" alt="" />
//             <div className="content">
//               <h3>project 07</h3>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Distinctio, praesentium.
//               </p>
//               <a href="#">read more</a>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <section className="portfolio">
//         <div onclick="this.innerHTML=style.display='none'" className="box">
//           {" "}
//           <a
//             onclick="myFunction(showMore)"
//             className="btn"
//             style={{ marginBottom: "3rem" }}
//           >
//             {" "}
//             load more <i className="fas fa-redo" />{" "}
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Projects;
import React from "react";

const Projects = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          {" "}
          <i className="fas fa-home" /> <span>home</span>{" "}
        </a>
        <a href="about">
          {" "}
          <i className="fas fa-user" /> <span>about</span>{" "}
        </a>
        <a href="projects">
          {" "}
          <i className="fas fa-briefcase" /> <span>Projects</span>{" "}
        </a>
        <a href="blogs">
          {" "}
          <i className="fas fa-blog" /> <span>education</span>{" "}
        </a>
        <a href="contact">
          {" "}
          <i className="fas fa-address-book" /> <span>contact</span>{" "}
        </a>
      </nav>

      <section className="portfolio">
        <h1 className="mt-5 heading">
          Heading <span>my</span> work{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="Images/project1.png" alt="blogimg" />
            <div className="content">
              <h3>project 01</h3>
              <p>
              The Admin Post Management System is a ReactJS web app using Firebase, Node.js, and MySQL for streamlined post management via secure RESTful APIs.</p>              <a
            href="https://admin.spsghy.co.in/dashboard"
            className="btn"
            style={{ marginBottom: "3rem" }}
          >
            Read more <i className="fas fa-redo" />
          </a>
            </div>
          </div>
          <div className="box">
            <img src="Images/project2.png" alt="blogimg" />
            <div className="content">
              <h3>project 02</h3>
              <p>

              The School Management Project is a ReactJS web app using Node.js, Firebase, and MySQL to streamline enrollment, attendance, and scheduling with real-time data handling.</p>              <a
            href="https://scms92.web.app/"
            className="btn"
            style={{ marginBottom: "3rem" }}
          >
            Read more <i className="fas fa-redo" />
          </a>            </div>
          </div>
          <div className="box">
            <img src="Images/Blog2.jpg" alt="blogimg" />
            <div className="content">
              <h3>project 03</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
