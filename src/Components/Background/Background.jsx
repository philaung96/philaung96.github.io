import './Background.css'

const Background = () => {
    const shootingStarsJsx = (num) => {
        return [...Array(num)].map((item, i) => (
            <span className='shooting_star' key={i}></span>
        ));
    };
    return (
        <>
            <section id='space'>
                <div className='star'></div>
            </section>
            <section className='night'>{shootingStarsJsx(10)}</section>
        </>
    );
}

export default Background