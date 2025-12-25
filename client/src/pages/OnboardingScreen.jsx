
import React from 'react';
import Carousel from '../components/Onboarding/Carousel';
import FAQ from '../components/Onboarding/FAQ';
import Gallery from '../components/Onboarding/Gallery';
import Review from '../components/Onboarding/Review';
import OurLocations from '../components/OurLocations';
import Services from '../components/Services';

const OnboardingScreen = () => {

    return (
        <div className="mt-20 space-y-10">
            <Carousel/>
            <Gallery/>
            <Services />
            <OurLocations/>
            <FAQ/>
            <Review/>
        </div>
    );
};

export default OnboardingScreen
