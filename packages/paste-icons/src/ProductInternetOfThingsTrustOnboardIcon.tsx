/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInternetOfThingsTrustOnboardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsTrustOnboardIcon: React.FC<ProductInternetOfThingsTrustOnboardIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductInternetOfThingsTrustOnboardIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsTrustOnboardIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.25 1.875v.944a1.563 1.563 0 01.625 1.243v1.25a1.563 1.563 0 01-1.563 1.563h-1.875a1.562 1.562 0 01-1.562-1.556v-1.25a1.562 1.562 0 01.625-1.25v-.944a1.875 1.875 0 013.75 0zm-1.63-.589a.588.588 0 00-.245-.036.587.587 0 00-.625.625V2.5H18v-.625a.587.587 0 00-.38-.589zm.913 4.247a.313.313 0 00.092-.22v-1.25a.312.312 0 00-.313-.313h-1.875a.313.313 0 00-.312.312v1.25a.313.313 0 00.313.313h1.875a.313.313 0 00.22-.092zM11.625 5c.28.01.546.121.75.312l1.563 1.625c.189.18.301.427.312.688v10.813A1.55 1.55 0 0112.687 20H4.563A1.55 1.55 0 013 18.437V6.563A1.55 1.55 0 014.563 5h7.062zm1.357 13.56a.293.293 0 00.018-.122V7.75l-1.5-1.5H4.563a.294.294 0 00-.313.312v11.875a.293.293 0 00.313.313h8.125a.295.295 0 00.294-.19zm-7.103-8.524A.587.587 0 016.125 10h5a.587.587 0 01.625.625v6.25a.585.585 0 01-.625.625h-5a.587.587 0 01-.625-.625v-6.25a.588.588 0 01.38-.589zm2.996 1.214l1.625 1.625V11.25H8.875zm-.5 5L6.75 14.625v1.625h1.625zM6.75 12.875l3.375 3.375h.375v-1.625L7.125 11.25H6.75v1.625z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductInternetOfThingsTrustOnboardIcon.displayName = 'ProductInternetOfThingsTrustOnboardIcon';
export {ProductInternetOfThingsTrustOnboardIcon};
