import React from 'react';
import { BiMapPin, BiMenu } from 'react-icons/bi';

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <div className="flex w-full justify-between p-5">
      <div>
        <h2 className="text-2xl font-bold">Good morning!</h2>
        <p className="flex items-center text-gray-400 text-sm">
          <BiMapPin className="mr-2" /> Yogyakarta, ID
        </p>
      </div>
      <button>
        <BiMenu className="text-4xl" />
      </button>
    </div>
  );
};

export default TopMenu;
