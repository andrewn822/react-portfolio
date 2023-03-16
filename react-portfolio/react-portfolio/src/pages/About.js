import portrait from '../assets/images/cat-pic.jpeg';


function About() {
    const styles = {
        title: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        portraitImg: {
            float: 'left',
            marginRight: '10px',

        },
    };

    return (
        <section className='bg-gray p-5' id='about'>
            <section style={styles.title}>
                <h1>About me</h1>
            </section>
            <section>
                <img src={portrait} alt='self portrait' style={styles.portraitImg} />
                <h3>Intro</h3>
                <p>
                Welcome to my portfolio. My name is Andrew and I love coding! I made this website for people to get to know a bit about me and see my work as I try navigate this new world I'm just starting off in. Please, help yourself and look through my portfolio and feel free to contact me if you wish.
                </p>
                <section style={{ display: 'flex'}}>
                    <h3>Backstory</h3>
                    <i>If you're interested</i>
                </section>
                <p>
                    Hi
                </p>
            </section>
        </section>
    );
}

export default About;