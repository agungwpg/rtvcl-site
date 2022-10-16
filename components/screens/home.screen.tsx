import React from 'react';
import { BiMapPin, BiMenu } from 'react-icons/bi';
import BusinessExperience from '../businessExperiences.component';
import HeroSection from '../heroSection.component';
import TopMenu from '../menu.component';
import Stories from '../stories.component';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <TopMenu />
      <HeroSection />
      <BusinessExperience />
      <Stories />
    </>
  );
};

export default HomeScreen;
