import React from 'react';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';

type Props = {
  children: React.ReactNode;
};

const DRAWER_ID = 'my-drawer';

const DrawerWrapper = (props: Props) => {
  return (
    <div className="drawer  drawer-end">
      <input id={`${DRAWER_ID}`} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{props.children}</div>
      <div className="drawer-side">
        <label htmlFor={`${DRAWER_ID}`} className="drawer-overlay"></label>
        <ul className="menu overflow-y-auto w-80 bg-base-100">
          <div className="flex px-4 pt-4 justify-between items-center">
            <Link href="/">
              <h2 className="text-2xl font-bold cursor-pointer">RTVCL</h2>
            </Link>
            <DrawerOpen>
              <BiX className="text-3xl" />
            </DrawerOpen>
          </div>
          <ul className="menu bg-base-100 w-full">
            <li>
              <Link href="/stories" as="li">
                Stories
              </Link>
            </li>
            <li>
              <Link href="#" as="li">
                Item 2
              </Link>
            </li>
            <li>
              <Link href="#" as="li">
                Item 3
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export const DrawerOpen = (props: Props) => {
  return (
    <label htmlFor={`${DRAWER_ID}`} className="btn btn-square btn-ghost">
      {props.children}
    </label>
  );
};

export default DrawerWrapper;
