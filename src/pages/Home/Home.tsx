import React from 'react';
import '@fontsource/roboto/700.css';
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.scss"
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import coverImage from "../../assets/mcgill.jpeg";
import whoWeAreImage from "../../assets/mcgill.jpeg";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Landing title="Building Bridges to Tomorrow’s Innovators"
                     subtitle="We aim to educate students on Venture Capital and Private Equity."
                     image={landingImage}/>
            <div className={styles.quoteContainer}>
                <div className={styles.quoteText}>
                    “We need to start to talk about money in ways that dethrone it and make it subject to human ethics and standards of love and decency.”
                </div>
                <div className={styles.quoteAuthor}>
                    — Joel Solomon, The Clean Money Revolution: Reinventing Power, Purpose and Capitalism
                </div>
            </div>
            <img src={coverImage} className={styles.coverImage} />
            <div className={styles.whoWeAreContainer}>
                <div className={styles.titleText}>
                    <div className={styles.whoWeAreTitle}>
                        Who We Are
                    </div>
                    <div className={styles.whoWeAreText}>
                        Founded in 2020, McGill Ventures is a dynamic student-run organization based in Montreal, Quebec.
                        Comprised of McGill students passionate about venture capital and private equity, our club offers a supportive community and valuable opportunities for learning and networking.
                        If you are interested in joining our club, collaborating on projects, or learning more about the venture capital and private equity landscape, we encourage you to reach out to us.
                        McGill Ventures looks forward to connecting with you and supporting your journey in this exciting field.
                    </div>
                </div>
                <div className={styles.titleText}>
                    <div className={styles.whoWeAreTitle}>
                        What We Do
                    </div>
                    <div className={styles.whoWeAreText}>
                        We aim to educate students on Venture Capital and Private Equity, providing a dynamic platform for learning, networking, and exploring the ever-evolving landscape of investment opportunities.
                        Through engaging events, industry insights, and hands-on experiences, we empower aspiring investors to navigate the realm of innovation, fostering an ecosystem where bold ideas thrive and promising ventures take flight.
                        Join us as we bridge the gap between academia and entrepreneurship, unlocking a world of possibilities for tomorrow's visionary leaders.
                    </div>
                </div>
                <div className={styles.whoWeAreImagesContainer}>
                    <img src={whoWeAreImage} className={styles.whoWeAreImage}/>
                    <img src={whoWeAreImage} className={styles.whoWeAreImage}/>
                    <img src={whoWeAreImage} className={styles.whoWeAreImage}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;