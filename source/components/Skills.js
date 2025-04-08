const Skills = () => {
    return (
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside">
            <li>Python, C/C++, Java, JavaScript, PHP</li>
            <li>Spring Boot, Flask, Django, JSP</li>
            <li>React.js, HTML, CSS, Bootstrap</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Machine Learning, NLP, Deep Learning</li>
            <li>MySQL, SQLite, PostgreSQL</li>
            <li>Power BI, Git, OpenCV</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Skills;
  