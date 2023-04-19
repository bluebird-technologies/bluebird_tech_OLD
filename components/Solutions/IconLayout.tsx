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
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 2) {
                return (
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
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
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      )}
      {title === 'Infrastructure Development' && icons && (
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex justify-between">
            {icons.map((section, i) => {
              if (i < 3) {
                return (
                  <div key={i} className="flex">
                    <IconWithTextView
                      icon={section.icon}
                      // iconMobile={section.iconMobile}
                      iconText={section.title}
                    />
                  </div>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-between mt-4">
            {icons.map((section, i) => {
              if (i > 2) {
                return (
                  <div key={i}>
                    <IconWithTextView
                      icon={section.icon}
                      // iconMobile={section.iconMobile}
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
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
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
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
                );
              }
            })}
          </div>
          {/* row 2 */}
          <div className="flex justify-around lg:justify-between mt-12">
            {icons.map((section, i) => {
              if (i > 1) {
                return (
                  <>
                    <div className="lg:hidden block">
                      <IconView
                        isMobile
                        icon={section.icon}
                        iconMobile={section.iconMobile}
                        key={i}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <IconView icon={section.icon} iconMobile={section.iconMobile} key={i} />
                    </div>
                  </>
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
