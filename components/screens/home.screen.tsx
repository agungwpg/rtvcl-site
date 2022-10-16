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
      <div className="drawer  drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <TopMenu />
          <HeroSection />
          <BusinessExperience />
          <Stories />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Porfolio</a>
            </li>
            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>About me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
