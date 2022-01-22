import './Background.css'

const Background = () => {
    return (
        <div id='background'>
            <section id='space'>
                <div className='star'></div>
            </section>
            <section className='night'>
                <span className='shooting_star'></span>
                <span className='shooting_star'></span>
                <span className='shooting_star'></span>
            </section>
        </div>
    );
}

export default Background