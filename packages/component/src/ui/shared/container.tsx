import type { PopperPlacementType } from '@mui/material';

import { styled } from '../../styles';

export type PopperDirection =
  | 'none'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

const getBorderRadius = (direction: PopperDirection, radius = '0') => {
  const map: Record<PopperDirection, string> = {
    none: `${radius}`,
    'left-top': `0 ${radius} ${radius} ${radius}`,
    'left-bottom': `${radius} ${radius} ${radius} 0`,
    'right-top': `${radius} 0 ${radius} ${radius}`,
    'right-bottom': `${radius} ${radius} 0 ${radius}`,
  };
  return map[direction];
};

export const placementToContainerDirection: Record<
  PopperPlacementType,
  PopperDirection
> = {
  top: 'none',
  'top-start': 'left-bottom',
  'top-end': 'right-bottom',
  right: 'none',
  'right-start': 'left-top',
  'right-end': 'left-bottom',
  bottom: 'none',
  'bottom-start': 'left-top',
  'bottom-end': 'none',
  left: 'none',
  'left-start': 'right-top',
  'left-end': 'right-bottom',
  auto: 'none',
  'auto-start': 'none',
  'auto-end': 'none',
};

export const StyledPopperContainer = styled('div')<{
  placement?: PopperPlacementType;
}>(({ placement = 'top' }) => {
  const direction = placementToContainerDirection[placement];
  const borderRadius = getBorderRadius(
    direction,
    'var(--affine-popover-radius)'
  );
  return {
    borderRadius,
  };
});

export default StyledPopperContainer;
