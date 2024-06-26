import React from 'react';
import './History.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import history from '../../assets/about/vision-mission/container2.png';
import Gallery from '../AboutGallery/Gallery';

const Safety = () => {
    const historyStyle = {
        backgroundImage: `url(${history})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
    };
    return (
        <section className='safty-section pb-100' style={historyStyle}>
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <Gallery />
                <div className='history'>
                    <SectionTitle
                        title="Our History"
                        description={<p style={{ fontSize: "15px" }}>Lamp Kiddie School (LKS) started in 1994 as a church project to serve the children of Calatrava, Romblon. After four years of operation in Barangay Poblacion, the school added a second branch in Barangay Balogo in June 1998.
                            In April of 2001, the first batch of LKS teachers and aides attended the first Institute for Foundational Learning (IFL) seminar on Early Childhood Education after the leaders of LKS learned about IFL and its mission.
                            Since then, LKS has been sending participants to IFL training sessions, further equipping new and seasoned teachers and teacher aides with efficient and effective teaching.
                            Thanks to IFL, LKS has a holistic curriculum, learning kits, and the three-period lesson. As a non-profit school, LKS has been supported by generous sponsors who help keep quality education accessible to the children of Calatrava, Romblon throughout the years.
                        </p>}
                    />
                </div>
            </div>
        </section>
    );
};

export default Safety;