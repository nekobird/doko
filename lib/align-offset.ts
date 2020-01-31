import {
  getEuclideanDistance,
  cycleArray,
} from '@nekobird/piko';

import {
  Viewport,
} from './viewport';

import {
  Point,
  Offset,
} from './interfaces';

import {
  scrollLeft,
  scrollTop,
} from './shared';

import {
  isHTMLElement,
} from './util';

export type DOMAlignOffsetReferenceCornerNames = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type DOMAlignOffsetReferenceEdgeNames = 'top' | 'left' | 'right' | 'bottom';

export type DOMAlignOffsetReferencePointNames = 'center' | DOMAlignOffsetReferenceCornerNames | DOMAlignOffsetReferenceEdgeNames;

export const DOMAlignOffsetReferenceCornerNames: DOMAlignOffsetReferenceCornerNames[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

export const DOMAlignOffsetReferenceEdgeNames: DOMAlignOffsetReferenceEdgeNames[] = [
  'top',
  'bottom',
  'left',
  'right',
];

export const DOMAlignOffsetReferencePointNames: DOMAlignOffsetReferencePointNames[] = [
  'center',
  ...DOMAlignOffsetReferenceCornerNames,
  ...DOMAlignOffsetReferenceEdgeNames,
];

export const DOMAlignOffsetReferencePointRotation: DOMAlignOffsetReferencePointNames[] = [
  'top-left',
  'top',
  'top-right',
  'right',
  'bottom-right',
  'bottom',
  'bottom-left',
];

export type OffsetRelation = 'viewport' | 'document' | HTMLElement;

export function getTargetAlignment(
  target: HTMLElement,
  targetReferencePoint: DOMAlignOffsetReferencePointNames,
  anchor: HTMLElement,
  anchorReferencePoint: DOMAlignOffsetReferencePointNames,
  relativeTo: OffsetRelation = 'viewport',
): Offset {
  const targetRect = target.getBoundingClientRect();

  const targetOffset = getElementOffset(target, targetReferencePoint);
  const anchorOffset = getElementOffset(anchor, anchorReferencePoint);

  const left = targetRect.left + anchorOffset.left - targetOffset.left;
  const top  = targetRect.top  + anchorOffset.top  - targetOffset.top;

  return transformOffsetRelativeTo({ left, top }, relativeTo);
}

export function getTargetAlignmentToPoint(
  target: HTMLElement,
  targetReferencePoint: DOMAlignOffsetReferencePointNames,
  point: Point,
  relativeTo: OffsetRelation = 'viewport',
): Offset {
  const targetRect = target.getBoundingClientRect();

  const targetOffset = getElementOffset(target, targetReferencePoint);

  const left = targetRect.left + point.x - targetOffset.left;
  const top  = targetRect.top  + point.y - targetOffset.top;

  return transformOffsetRelativeTo({ left, top }, relativeTo);
}

export function getTargetAlignmentToView(
  target: HTMLElement,
  targetReferencePoint: DOMAlignOffsetReferencePointNames,
  viewReferencePoint: DOMAlignOffsetReferencePointNames,
  relativeTo: OffsetRelation = 'viewport',
) {
  const targetRect = target.getBoundingClientRect();

  const targetOffset = getElementOffset(target, targetReferencePoint);

  const viewOffset = getViewOffset(viewReferencePoint);

  const left = targetRect.left + viewOffset.left - targetOffset.left;
  const top  = targetRect.top  + viewOffset.top  - targetOffset.top;

  return transformOffsetRelativeTo({ left, top }, relativeTo);
}

export function getComplementaryReferencePoint(
  referencePoint: DOMAlignOffsetReferencePointNames,
): DOMAlignOffsetReferencePointNames {
  if (referencePoint === 'center') {
    return 'center';
  }

  switch (referencePoint) {
    case 'top-left':
      return 'bottom-right';

    case 'top':
      return 'bottom';

    case 'top-right':
      return 'bottom-left';

    case 'left':
      return 'right';

    case 'right':
      return 'left';

    case 'bottom-left':
      return 'top-right';

    case 'bottom':
      return 'top';

    case 'bottom-right':
      return 'top-left';
  }
}

export function getReferencePointFromRotation(
  from: DOMAlignOffsetReferencePointNames,
  offset: number,
): DOMAlignOffsetReferencePointNames {
  if (from === 'center') {
    return 'center';
  }

  const fromIndex = DOMAlignOffsetReferencePointRotation.indexOf(from);

  return cycleArray<DOMAlignOffsetReferencePointNames>(
    DOMAlignOffsetReferencePointRotation,
    fromIndex + offset,
  );
}

// This returns an offset based on element reference point and relative to viewport.
export function getElementOffset(
  element: HTMLElement,
  referencePoint: DOMAlignOffsetReferencePointNames,
): Offset {
  const rect = element.getBoundingClientRect();

  const leftCenter = rect.left + getEuclideanDistance(rect.left, rect.right) / 2;
  const topCenter  = rect.top  + getEuclideanDistance(rect.top, rect.bottom) / 2;

  switch (referencePoint) {
    case 'center':
      return {
        left: leftCenter,
        top : topCenter,
      };

    case 'top-left':
      return {
        left: rect.left,
        top : rect.top,
      };

    case 'top':
      return {
        left: leftCenter,
        top : rect.top,
      };

    case 'top-right':
      return {
        left: rect.right,
        top : rect.top,
      };

    case 'left':
      return {
        left: rect.left,
        top : topCenter,
      };

    case 'right':
      return {
        left: rect.right,
        top : topCenter,
      };

    case 'bottom-left':
      return {
        left: rect.left,
        top : rect.bottom,
      };

    case 'bottom':
      return {
        left: leftCenter,
        top : rect.bottom,
      };

    case 'bottom-right':
      return {
        left: rect.right,
        top : rect.bottom,
      };
    
    default:
      return {
        left: 0,
        top : 0,
      };
  }
}

export function getViewOffset(referencePoint: DOMAlignOffsetReferencePointNames): Offset {
  const leftCenter = Viewport.width  / 2;
  const topCenter  = Viewport.height / 2;

  switch (referencePoint) {
    case 'center':
      return {
        left: leftCenter,
        top: topCenter,
      };

    case 'top-left':
      return {
        left: 0,
        top: 0,
      };

    case 'top':
      return {
        left: leftCenter,
        top: 0,
      };

    case 'top-right':
      return {
        left: Viewport.width,
        top: 0,
      };

    case 'left':
      return {
        left: 0,
        top: topCenter,
      };

    case 'right':
      return {
        left: Viewport.width,
        top: topCenter,
      };

    case 'bottom-left':
      return {
        left: 0,
        top: Viewport.height,
      };

    case 'bottom':
      return {
        left: leftCenter,
        top: Viewport.height,
      };

    case 'bottom-right':
      return {
        left: Viewport.width,
        top: Viewport.height,
      };
    
    default:
      return {
        left: 0,
        top: 0,
      };
  }
}

// This returns an offset from element reference point to origin (top-left).
export function getOffsetFromTargeReferencePointToOrigin(
  target: HTMLElement,
  referencePoint: DOMAlignOffsetReferencePointNames,
): Offset {
  const { left, top } = target.getBoundingClientRect();
  const offset = getElementOffset(target, referencePoint);
  return {
    left: left - offset.left,
    top:  top  - offset.top,
  };
}

// Transform offset relation to either document, viewport, or an element.
export function transformOffsetRelativeTo(offset: Offset, to: OffsetRelation): Offset {
  const { left, top } = offset;

  if (to === 'document') {
    return {
      left: left + scrollLeft(),
      top:  top  + scrollTop(),
    };
  }

  if (isHTMLElement(to)) {
    const rect = to.getBoundingClientRect();
    return {
      left: left - rect.left,
      top:  top  - rect.top,
    };
  }

  return { left, top };
}

// Apply spacing to offset..
export function applySpacingToOffset(
  offset: Offset,
  referencePoint: DOMAlignOffsetReferencePointNames,
  spacing: number,
): Offset {
  const { left, top } = offset;

  if (referencePoint === 'center') {
    return { left, top };
  }
  
  if (
    DOMAlignOffsetReferenceCornerNames.indexOf(
      referencePoint as DOMAlignOffsetReferenceCornerNames,
    ) !== -1
  ) {
    const cornerSpacing = calculateCornerSpacing(spacing);

    switch (referencePoint) {
      case 'top-left': 
        return {
          left: left - cornerSpacing,
          top:  top  - cornerSpacing,
        };

      case 'top-right':
        return {
          left: left + cornerSpacing,
          top:  top  - cornerSpacing,
        };

      case 'bottom-left':
        return {
          left: left - cornerSpacing,
          top:  top  + cornerSpacing,
        };

      case 'bottom-right':
        return {
          left: left + cornerSpacing,
          top:  top  + cornerSpacing,
        };
    }

    return { left, top };
  }

  switch (referencePoint) {
    case 'top':
      return {
        left,
        top: top - spacing,
      };

    case 'bottom':
      return {
        left,
        top: top + spacing,
      };

    case 'left':
      return {
        left: left - spacing,
        top,
      };

    case 'right':
      return {
        left: left + spacing,
        top,
      }
  }

  return { left, top };
}

export function calculateCornerSpacing(spacing: number): number {
  return Math.cos(Math.PI / 4) * spacing;
}