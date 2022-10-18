import React from 'react';
import { BiMapPin, BiMenu } from 'react-icons/bi';
import { DrawerOpen } from './drawer.component';

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <div className="flex w-full justify-between p-5">
      <div>
        <h2 className="text-2xl font-bold">Good morning!</h2>
        <p className="flex items-center text-gray-400 text-sm">
          <BiMapPin className="mr-2" /> Jakarta, ID
        </p>
      </div>
      <DrawerOpen>
        <BiMenu className="text-4xl" />
      </DrawerOpen>
    </div>
  );
};

export default TopMenu;
