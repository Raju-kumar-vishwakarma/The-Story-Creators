
import React from 'react';
import Carousel from '../components/Carousel';
import GalleryImg from '../components/GalleryImg';
import FAQ from '../components/Onboarding/FAQ';

const OnboardingScreen = () => {

    return (
        <div className="min-h-screen mt-20 space-y-10">
            <Carousel/>
            <GalleryImg/>
            <FAQ/>

        </div>
    );
};

export default OnboardingScreen
