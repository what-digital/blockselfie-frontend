import * as React from 'react';
import LogoIcon from 'components/Icons/LogoIcon';
import * as classNames from 'classnames';

import './style.scss';

// export namespace Loading {
//   export interface Props {
//     color?: string;
//     text?: string;
//     backdrop?: boolean;
//     fixed?: boolean;
//   }
// }

const Loading = (props) => (
  <div
    className={classNames('loading', {
      fixed: props.fixed,
      backdrop: props.backdrop
    })}
  >
    <div className={'loaderWrapper'}>
      <div className={'dloader'}>
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          style={{ enableBackground: 'new 0 0 50 50' } as React.CSSProperties}
          xmlSpace="preserve"
        >
          <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur=".8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      <div className={'logo'}>
        <LogoIcon height="34px" width="34px" svg />
      </div>
    </div>
    <p>{props.text}</p>
  </div>
);

export default Loading;
