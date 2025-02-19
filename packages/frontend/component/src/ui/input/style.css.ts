import { cssVar } from '@toeverything/theme';
import { style } from '@vanilla-extract/css';
export const inputWrapper = style({
  width: '100%',
  height: 28,
  lineHeight: '22px',
  padding: '0 10px',
  color: cssVar('textPrimaryColor'),
  border: '1px solid',
  backgroundColor: cssVar('white'),
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: cssVar('fontBase'),
  boxSizing: 'border-box',
  selectors: {
    '&.no-border': {
      border: 'unset',
    },
    // size
    '&.large': {
      height: 32,
    },
    '&.extra-large': {
      height: 40,
      fontWeight: 600,
    },
    // color
    '&.disabled': {
      background: cssVar('hoverColor'),
    },
    '&.error': {
      borderColor: cssVar('errorColor'),
    },
    '&.success': {
      borderColor: cssVar('successColor'),
    },
    '&.warning': {
      borderColor: cssVar('warningColor'),
    },
    '&.default': {
      borderColor: cssVar('borderColor'),
    },
    '&.default.focus': {
      borderColor: cssVar('primaryColor'),
      boxShadow: '0px 0px 0px 2px rgba(30, 150, 235, 0.30);',
    },
  },
});
export const input = style({
  height: '100%',
  width: '0',
  flex: 1,
  boxSizing: 'border-box',
  // prevent default style
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  outline: 'none',
  border: 'none',
  background: 'transparent',
  selectors: {
    '&::placeholder': {
      color: cssVar('placeholderColor'),
    },
    '&:disabled': {
      color: cssVar('textDisableColor'),
    },
  },
});
