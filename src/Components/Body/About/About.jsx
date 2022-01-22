import './About.css';

const About = () => {
    return (
        <div id='about'>
            <section>
                <div id='avatar'></div>
                <article>
                    <h2>ABOUT ME</h2>
                    <p>
                        Hello, my name is Phil Aung. I am a curious and fast
                        learning Burmese soul from LA. A software engineer with
                        a strong backend background from college. Well versed on
                        top-down and bottom-up designing aspects of programs. I
                        am a team player and aspire to be the best version of me
                        on every occasion. Born into and raised by Physicists
                        parents, my love toward electronics runs deep, and I am
                        passionate about computers with problem solving at the
                        core of it.
                    </p>
                </article>
            </section>
            <aside>
                <article>
                    <h3>Tech Stack</h3>
                    <p>
                        Languages :{' '}
                        <i>C++, Java, Python, HTML, CSS, JavaScript</i>
                    </p>
                    <p>
                        Frameworks :{' '}
                        <i>
                            React.js, Express.js, MongoDB, Mongoose.js,
                            Django.py
                        </i>
                    </p>
                </article>
                <article id='contact-info'>
                    <h3>Contact</h3>
                    <p>Email : philaung96@gmail.com</p>
                    <p id='social-icons'>
                        <a
                            href='https://www.linkedin.com/in/phil-aung-523b7b226/'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            <i class='fab fa-linkedin fa-2x'></i>
                        </a>
                        <a
                            href='https://www.hackerrank.com/philaung96'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            <i class='fab fa-hackerrank fa-2x'></i>
                        </a>
                        <a
                            href='https://github.com/philaung96'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            <i class='fab fa-github-square fa-2x'></i>
                        </a>
                    </p>
                </article>
            </aside>
        </div>
    );
};

export default About;
