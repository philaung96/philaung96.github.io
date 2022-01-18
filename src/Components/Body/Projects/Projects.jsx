import './Projects.css';

const Projects = () => {
    return (
        <div id='projects'>
            <h2>projects</h2>
            <section className='project'>
                <h3 className='project-title'>2048</h3>
                <div id='project-img-1' className='project-img'></div>
                <article>
                    <p>A clone 2048 game</p>
                </article>
            </section>
            <section className='project'>
                <h3 className='project-title'>Rick and Morty</h3>
                <div id='project-img-2' className='project-img'></div>
            </section>
            <section className='project'>
                <h3 className='project-title'>To Do List</h3>
                <div id='project-img-3' className='project-img'></div>
            </section>
        </div>
    );
};

export default Projects;
