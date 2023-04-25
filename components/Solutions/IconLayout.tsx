import React from 'react';
import { IconWithTextType } from '../../pages/offer';
import IconView from './IconView';
import IconWithTextView from './IconWithTextView';
import TextView from './TextView';

interface IconLayoutProps {
  title: string;
  icons: IconWithTextType[];
}

function IconLayout({ title, icons }: IconLayoutProps) {
  return (
    <>
      {title === 'Web Development' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-around lg:justify-between">
            {icons.map((section, i) => {
              if (i < 3) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 2) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {title === 'App Development' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-around">
            {icons.map((section, i) => {
              if (i < 2) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {title === 'Infrastructure Development' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex w-full px-2">
            {icons.map((section, i) => {
              if (i < 3) {
                return (
                  <div key={'icons-' + i} className="w-1/3 px-2">
                    <IconWithTextView
                      icon={section.icon}
                      iconMobile={section.iconMobile}
                      iconText={section.title}
                    />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex w-full mt-4 px-2">
            {icons.map((section, i) => {
              if (i > 2) {
                return (
                  <div key={i} className="w-1/3 px-2">
                    <IconWithTextView
                      icon={section.icon}
                      iconMobile={section.iconMobile}
                      iconText={section.title}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {title === 'Product Management' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-between">
            {icons.map((section, i) => {
              if (i < 3) {
                return <TextView icon={<>{section.title}</>} key={i} />;
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-between mt-12">
            {icons.map((section, i) => {
              if (i > 2) {
                return <TextView icon={<>{section.title}</>} key={i} />;
              }
            })}
          </div>
        </div>
      )}
      {title === 'UX/UI Design' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-around">
            {icons.map((section, i) => {
              if (i < 2) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {title === 'API & System Development' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-around">
            {icons.map((section, i) => {
              if (i < 2) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around lg:justify-between mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <div key={'icons-' + i}>
                    <IconView icon={section.icon} iconMobile={section.iconMobile} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default IconLayout;
