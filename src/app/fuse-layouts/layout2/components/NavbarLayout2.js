import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import clsx from 'clsx';
import { memo } from 'react';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

function NavbarLayout2(props) {
  return (
    <Root className={clsx('w-full h-64 min-h-64 max-h-64 shadow-md', props.className)}>
      <div className="flex flex-auto justify-between items-center w-full h-full container p-0 lg:px-24 z-20">
        <div className="flex flex-shrink-0 items-center px-8">
          <Logo />
        </div>

        <FuseScrollbars className="flex h-full items-center">
          <Navigation className="w-full" layout="horizontal" />
        </FuseScrollbars>
      </div>
    </Root>
  );
}

export default memo(NavbarLayout2);
