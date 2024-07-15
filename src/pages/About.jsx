import React from 'react'

const About = () => {
  return (
    <section className=" p-8 mt-16 flex items-start justify-start">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-300 mb-4">About Me and This Project</h2>
        <p className="text-neutral-400 leading-relaxed">
          I am a student who is passionate about web development, currently practicing React.js for educational purposes. This website is a project where I showcase my skills and learning journey in React.js.
        </p>
        <p className="text-neutral-400 leading-relaxed mt-4">
          Please note that I do not host any files directly on this site. All content, including videos, images, and data, is sourced from third-party APIs or websites. This ensures that the content displayed here is up-to-date and relevant, while also adhering to legal and ethical guidelines.
        </p>
        <p className="text-neutral-400 leading-relaxed mt-4">
          If you have any questions or feedback about this project, feel free to reach out to me. Thank you for visiting and exploring my work!
        </p>
      </div>
    </section>
  )
}

export default About