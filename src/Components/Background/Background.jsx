import './Background.css'

const Background = () => {
    const shootingStarsJsx = (num) => {
        return [...Array(num)].map((item, i) => (
            <span className='shooting_star' key={i}></span>
        ));
    };
    return (
        <div id='background'>
            <section id='space'>
                <div className='star'></div>
            </section>
            <section className='night'>{shootingStarsJsx(5)}</section>
        </div>
    );
}

export default Background