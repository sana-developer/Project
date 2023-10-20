import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='projects'>
      <div className='bold mt-20 ml-28 mb-4'><span className='border-aqua pb-2'>Projects</span></div>

      <div className='project-container w-full'>
      <div className='cards-container flex'>
        <ProjectCard 
        src="src/assets/project1.png" 
        heading="Chat Application" 
        description="I've developed a real-time chat application inspired by WhatsApp, enabling users to join groups for instant communication. Messages persist only while users are online, providing a seamless and ephemeral chatting experience." 
        tech={["html","css","javascript","nodejs","socket.io","express.js"]}
        code="https://github.com/sana-developer/chat-App.github.io"
        demo="https://chat-app.sana289.repl.co/"
        />
        <ProjectCard 
        src="src/assets/companySite.png" 
        heading="Company Landing Page" 
        description="Welcome to our cutting-edge developer company's Landing Page, where we showcase our top-tier services and provide a seamless gateway for clients to connect with our talented team, turning their visions into digital reality." 
        tech={["html","bootstrap","mongodb","nodejs","expressjs","hbs"]}
        code="https://github.com/sana-developer/Company-LandingPage"
        demo="https://company-landingpage-1.sana289.repl.co/"
        />
      </div>
      <div className='cards-container flex'>
      <ProjectCard 
        src="src/assets/musicApp.png" 
        heading="Music Appication" 
        description="Revolutionize your music experience with our cutting-edge music application – your all-in-one destination for seamless music playback, discovery, and personalized listening, just like Spotify, but with a unique twist." 
        tech={["html","css","javascript"]}
        code="https://github.com/sana-developer/Music-App"
        demo="https://sana-developer.github.io/Music-App/"
        />
        <ProjectCard 
        src="src/assets/blog.png" 
        heading="Blog Website" 
        description="I've developed a captivating blog website that seamlessly connects readers with insightful content, offering an engaging platform for a diverse range of topics and knowledge sharing." 
        tech={["html","css","javascript"]}
        code="https://github.com/sana-developer/Blog-Website"
        demo="https://blog-website.sana289.repl.co/"
        />
      </div>
      <div className='cards-container flex'>
      <ProjectCard 
        src="src/assets/danceSite.png" 
        heading="Dance Website" 
        description="Experience the rhythm of dance at its finest with our captivating dance website. Explore a world of mesmerizing performances and choreography that will leave you awestruck." 
        tech={["html","css","javascript","nodejs","mongodb","express.js"]}
        code="https://github.com/sana-developer/Dance-Site"
        demo="https://dance-site.sana289.repl.co/"
        />
        <ProjectCard 
        src="src/assets/cronaSite.png" 
        heading="Corona Screening App" 
        description="Introducing my Corona Screening App, a robust solution for swift COVID-19 assessment, offering real-time results and personalized safety recommendations for users, contributing to a healthier and safer community." 
        tech={["html","css","bootstrap","javascript","jQuery"]}
        code="https://github.com/sana-developer/jquery-corona-app"
        demo="https://sana-developer.github.io/jquery-corona-app/"
        />
        </div>
        <div className='cards-container flex'>
        <ProjectCard 
        src="src/assets/form.png" 
        heading="ConnectifyPro" 
        description="Experience seamless user data input and document submission with our innovative app, enabling users to effortlessly provide personal details, upload CNIC pictures, and select their preferred internet package for a streamlined, hassle-free experience." 
        tech={["html","css","javascript","nodejs","mongodb","express.js"]}
        code="https://github.com/sana-developer/Contact-Form"
        demo="https://contact-form.sana289.repl.co/"
        />
        <ProjectCard 
        src="src/assets/foodSite.png" 
        heading="Food Delivery App" 
        description="Experience the ultimate convenience of our food delivery app, where a world of culinary delights is just a click away. Satisfy your cravings with fast, fresh, and flavorful dishes, delivered straight to your doorstep." 
        tech={["html","css","javascript"]}
        code="https://github.com/sana-developer/Food-delivery"
        demo="https://sana-developer.github.io/Food-delivery/"
        />
        </div>
      </div>
      </div>
  )
}

export default Projects