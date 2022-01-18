import './Projects.css';

const Projects = () => {
    return (
        <div id='projects'>
            <h2>PROJECTS</h2>
            <div className='project'>
                <section>
                    <h3 className='project-title'>2048</h3>
                    <div id='project-img-1' className='project-img'></div>
                    <button>
                        <a
                            href='https://philaung96.github.io/2048'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            DEMO {'>'}
                        </a>
                    </button>
                </section>
                <article>
                    <p>
                        A clone a popular IOS game 2048 made full stack version.
                        Features include the game itself, localStorage, and
                        backend database as leaderboard user high scores.
                    </p>
                    <p className='tools'>
                        <small>
                            Tools :
                            <i>
                                {' '}
                                HTML, CSS, JavaScript, React.js, Express.js,
                                Mongoose.js, MongoDB
                            </i>
                        </small>
                    </p>
                </article>
            </div>
            <div className='project'>
                <section>
                    <h3 className='project-title'>Rick and Morty</h3>
                    <div id='project-img-2' className='project-img'></div>
                    <button>
                        <a
                            href='https://philaung96.github.io/rick-and-morty-universe'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            DEMO {'>'}
                        </a>
                    </button>
                </section>
                <article>
                    <p>
                        Explore the popular animated TV series 'Rick And Morty'.
                        A front-end web to explore specific character, location,
                        or aired episode. Created using Rick and Morty API.
                    </p>
                    <p className='tools'>
                        <small>
                            Tools :<i> HTML, CSS, JavaScript, React.js</i>
                        </small>
                    </p>
                </article>
            </div>
            <div className='project'>
                <section>
                    <h3 className='project-title'>To Do List</h3>
                    <div id='project-img-3' className='project-img'></div>
                    <button>
                        <a
                            href='https://philaung96.github.io/jquery-todo-list'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            DEMO {'>'}
                        </a>
                    </button>
                </section>
                <article>
                    <p>
                        A simple front-end todo list application. Put all your
                        daily check marks here, and get the upmost satisfaction
                        of completing tasks.
                    </p>
                    <p className='tools'>
                        <small>
                            Tools :<i> HTML, CSS, JavaScript, Jquery.js</i>
                        </small>
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Projects;
