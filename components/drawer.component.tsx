import React from 'react';

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
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
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
