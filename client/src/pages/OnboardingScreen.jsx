
import React from 'react';
import Carousel from '../components/Onboarding/Carousel';
import FAQ from '../components/Onboarding/FAQ';
import Gallery from '../components/Onboarding/Gallery';
import Review from '../components/Onboarding/Review';

const OnboardingScreen = () => {

    return (
        <div className="mt-20 space-y-10">
            <Carousel/>
            <Gallery/>
            <FAQ/>
            <Review/>
        </div>
    );
};

export default OnboardingScreen
