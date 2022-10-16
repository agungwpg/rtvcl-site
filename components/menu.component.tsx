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
      <label htmlFor="my-modal" className="modal-button">
        <BiMenu className="text-4xl" />
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
