import React from 'react';
import { createCss } from '@stitches/react';
import { gray, mauve, slate, sage, olive, sand, tomato, red, crimson, pink, plum, purple, violet, indigo, blue, sky, mint, cyan, teal, green, grass, lime, yellow, amber, orange, brown, bronze, gold, grayA, mauveA, slateA, sageA, oliveA, sandA, tomatoA, redA, crimsonA, pinkA, plumA, purpleA, violetA, indigoA, blueA, skyA, mintA, cyanA, tealA, greenA, grassA, limeA, yellowA, amberA, orangeA, brownA, bronzeA, goldA, whiteA, blackA, grayDark, mauveDark, slateDark, sageDark, oliveDark, sandDark, tomatoDark, redDark, crimsonDark, pinkDark, plumDark, purpleDark, violetDark, indigoDark, blueDark, skyDark, mintDark, cyanDark, tealDark, greenDark, grassDark, limeDark, yellowDark, amberDark, orangeDark, brownDark, bronzeDark, goldDark, grayDarkA, mauveDarkA, slateDarkA, sageDarkA, oliveDarkA, sandDarkA, tomatoDarkA, redDarkA, crimsonDarkA, pinkDarkA, plumDarkA, purpleDarkA, violetDarkA, indigoDarkA, blueDarkA, skyDarkA, mintDarkA, cyanDarkA, tealDarkA, greenDarkA, grassDarkA, limeDarkA, yellowDarkA, amberDarkA, orangeDarkA, brownDarkA, bronzeDarkA, goldDarkA } from '@radix-ui/colors';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon, CheckIcon, CaretSortIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
export { AspectRatio } from '@radix-ui/react-aspect-ratio';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as MenuPrimitive from '@radix-ui/react-menu';
import { IdProvider } from '@radix-ui/react-id';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
export { Portal } from '@radix-ui/react-portal';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ToggleButtonPrimitive from '@radix-ui/react-toggle-button';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { Slot } from '@radix-ui/react-slot';
export { Slot } from '@radix-ui/react-slot';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var stitches = createCss({
  theme: {
    colors: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, gray), mauve), slate), sage), olive), sand), tomato), red), crimson), pink), plum), purple), violet), indigo), blue), sky), mint), cyan), teal), green), grass), lime), yellow), amber), orange), brown), bronze), gold), grayA), mauveA), slateA), sageA), oliveA), sandA), tomatoA), redA), crimsonA), pinkA), plumA), purpleA), violetA), indigoA), blueA), skyA), mintA), cyanA), tealA), greenA), grassA), limeA), yellowA), amberA), orangeA), brownA), bronzeA), goldA), whiteA), blackA), {}, {
      // Semantic colors
      hiContrast: '$slate12',
      // loContrast: '$slate1',
      loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)'
    }),
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px'
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px'
    },
    // fontSizes: {
    //   1: '11px',
    //   2: '12px',
    //   3: '15px',
    //   4: '17px',
    //   5: '20px',
    //   6: '22px',
    //   7: '28px',
    //   8: '36px',
    //   9: '60px',
    // },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    }
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  utils: {
    p: function p(config) {
      return function (value) {
        return {
          paddingTop: value,
          paddingBottom: value,
          paddingLeft: value,
          paddingRight: value
        };
      };
    },
    pt: function pt(config) {
      return function (value) {
        return {
          paddingTop: value
        };
      };
    },
    pr: function pr(config) {
      return function (value) {
        return {
          paddingRight: value
        };
      };
    },
    pb: function pb(config) {
      return function (value) {
        return {
          paddingBottom: value
        };
      };
    },
    pl: function pl(config) {
      return function (value) {
        return {
          paddingLeft: value
        };
      };
    },
    px: function px(config) {
      return function (value) {
        return {
          paddingLeft: value,
          paddingRight: value
        };
      };
    },
    py: function py(config) {
      return function (value) {
        return {
          paddingTop: value,
          paddingBottom: value
        };
      };
    },
    m: function m(config) {
      return function (value) {
        return {
          marginTop: value,
          marginBottom: value,
          marginLeft: value,
          marginRight: value
        };
      };
    },
    mt: function mt(config) {
      return function (value) {
        return {
          marginTop: value
        };
      };
    },
    mr: function mr(config) {
      return function (value) {
        return {
          marginRight: value
        };
      };
    },
    mb: function mb(config) {
      return function (value) {
        return {
          marginBottom: value
        };
      };
    },
    ml: function ml(config) {
      return function (value) {
        return {
          marginLeft: value
        };
      };
    },
    mx: function mx(config) {
      return function (value) {
        return {
          marginLeft: value,
          marginRight: value
        };
      };
    },
    my: function my(config) {
      return function (value) {
        return {
          marginTop: value,
          marginBottom: value
        };
      };
    },
    ta: function ta(config) {
      return function (value) {
        return {
          textAlign: value
        };
      };
    },
    fd: function fd(config) {
      return function (value) {
        return {
          flexDirection: value
        };
      };
    },
    fw: function fw(config) {
      return function (value) {
        return {
          flexWrap: value
        };
      };
    },
    ai: function ai(config) {
      return function (value) {
        return {
          alignItems: value
        };
      };
    },
    ac: function ac(config) {
      return function (value) {
        return {
          alignContent: value
        };
      };
    },
    jc: function jc(config) {
      return function (value) {
        return {
          justifyContent: value
        };
      };
    },
    as: function as(config) {
      return function (value) {
        return {
          alignSelf: value
        };
      };
    },
    fg: function fg(config) {
      return function (value) {
        return {
          flexGrow: value
        };
      };
    },
    fs: function fs(config) {
      return function (value) {
        return {
          flexShrink: value
        };
      };
    },
    fb: function fb(config) {
      return function (value) {
        return {
          flexBasis: value
        };
      };
    },
    bc: function bc(config) {
      return function (value) {
        return {
          backgroundColor: value
        };
      };
    },
    br: function br(config) {
      return function (value) {
        return {
          borderRadius: value
        };
      };
    },
    btrr: function btrr(config) {
      return function (value) {
        return {
          borderTopRightRadius: value
        };
      };
    },
    bbrr: function bbrr(config) {
      return function (value) {
        return {
          borderBottomRightRadius: value
        };
      };
    },
    bblr: function bblr(config) {
      return function (value) {
        return {
          borderBottomLeftRadius: value
        };
      };
    },
    btlr: function btlr(config) {
      return function (value) {
        return {
          borderTopLeftRadius: value
        };
      };
    },
    bs: function bs(config) {
      return function (value) {
        return {
          boxShadow: value
        };
      };
    },
    lh: function lh(config) {
      return function (value) {
        return {
          lineHeight: value
        };
      };
    },
    ox: function ox(config) {
      return function (value) {
        return {
          overflowX: value
        };
      };
    },
    oy: function oy(config) {
      return function (value) {
        return {
          overflowY: value
        };
      };
    },
    pe: function pe(config) {
      return function (value) {
        return {
          pointerEvents: value
        };
      };
    },
    us: function us(config) {
      return function (value) {
        return {
          WebkitUserSelect: value,
          userSelect: value
        };
      };
    },
    size: function size(config) {
      return function (value) {
        return {
          width: value,
          height: value
        };
      };
    },
    linearGradient: function linearGradient(config) {
      return function (value) {
        return {
          backgroundImage: "linear-gradient(".concat(value, ")")
        };
      };
    },
    appearance: function appearance(config) {
      return function (value) {
        return {
          WebkitAppearance: value,
          appearance: value
        };
      };
    },
    userSelect: function userSelect(config) {
      return function (value) {
        return {
          WebkitUserSelect: value,
          userSelect: value
        };
      };
    },
    backgroundClip: function backgroundClip(config) {
      return function (value) {
        return {
          WebkitBackgroundClip: value,
          backgroundClip: value
        };
      };
    }
  }
});
var styled = stitches.styled,
    css = stitches.css,
    theme = stitches.theme,
    getCssString = stitches.getCssString,
    global = stitches.global,
    keyframes = stitches.keyframes,
    config = stitches.config;
config.utils;
var darkTheme = theme('dark-theme', {
  colors: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, grayDark), mauveDark), slateDark), sageDark), oliveDark), sandDark), tomatoDark), redDark), crimsonDark), pinkDark), plumDark), purpleDark), violetDark), indigoDark), blueDark), skyDark), mintDark), cyanDark), tealDark), greenDark), grassDark), limeDark), yellowDark), amberDark), orangeDark), brownDark), bronzeDark), goldDark), grayDarkA), mauveDarkA), slateDarkA), sageDarkA), oliveDarkA), sandDarkA), tomatoDarkA), redDarkA), crimsonDarkA), pinkDarkA), plumDarkA), purpleDarkA), violetDarkA), indigoDarkA), blueDarkA), skyDarkA), mintDarkA), cyanDarkA), tealDarkA), greenDarkA), grassDarkA), limeDarkA), yellowDarkA), amberDarkA), orangeDarkA), brownDarkA), bronzeDarkA), goldDarkA), {}, {
    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)'
  })
});

var _excluded$d = ["children"];
var StyledAccordion = styled(AccordionPrimitive.Root, {});
var StyledItem = styled(AccordionPrimitive.Item, {
  borderTop: '1px solid $colors$slate6',
  '&:last-of-type': {
    borderBottom: '1px solid $colors$slate6'
  }
});
var StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset'
});
var StyledButton$1 = styled(AccordionPrimitive.Button, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',
  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2'
    }
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
  },
  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)'
  },
  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)'
    }
  }
});
var AccordionButton = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$d);

  return /*#__PURE__*/React.createElement(StyledHeader, null, /*#__PURE__*/React.createElement(StyledButton$1, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), children, /*#__PURE__*/React.createElement(ChevronDownIcon, null)));
});
var StyledPanel = styled(AccordionPrimitive.Panel, {
  p: '$2'
});
var Accordion = StyledAccordion;
var AccordionItem = StyledItem;
var AccordionPanel = StyledPanel;

var DEFAULT_TAG$k = 'div';
var StyledAlert = styled(DEFAULT_TAG$k, {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  border: '1px solid',
  borderRadius: '$2',
  variants: {
    size: {
      '1': {
        p: '$3'
      }
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
        borderColor: '$slate6'
      },
      gray: {
        backgroundColor: '$slate2',
        borderColor: '$slate6'
      },
      blue: {
        backgroundColor: '$blue2',
        borderColor: '$blue6'
      },
      green: {
        backgroundColor: '$green2',
        borderColor: '$green6'
      },
      red: {
        backgroundColor: '$red2',
        borderColor: '$red6'
      }
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
});
var Alert = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledAlert, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Alert.toString = function () {
  return ".".concat(StyledAlert.className);
};

var overlayStyles = {
  backgroundColor: 'rgba(0, 0, 0, .15)'
};
var Overlay = styled('div', overlayStyles);

var panelStyles = {
  backgroundColor: '$panel',
  borderRadius: '$3',
  boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px'
};
var Panel = styled('div', panelStyles);

var _excluded$c = ["children"],
    _excluded2$6 = ["children"];
var StyledOverlay$2 = styled(AlertDialogPrimitive.Overlay, _objectSpread2(_objectSpread2({}, overlayStyles), {}, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}));
function AlertDialog(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$c);

  return /*#__PURE__*/React.createElement(AlertDialogPrimitive.Root, _objectSpread2({}, props), /*#__PURE__*/React.createElement(StyledOverlay$2, null), children);
}
var StyledContent$3 = styled(AlertDialogPrimitive.Content, _objectSpread2(_objectSpread2({}, panelStyles), {}, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  '&:focus': {
    outline: 'none'
  }
}));
var AlertDialogContent = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2$6);

  return /*#__PURE__*/React.createElement(StyledContent$3, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), children);
});
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogTitle = AlertDialogPrimitive.Title;
var AlertDialogDescription = AlertDialogPrimitive.Description;
var AlertDialogAction = AlertDialogPrimitive.Action;
var AlertDialogCancel = AlertDialogPrimitive.Cancel;

var Box = styled('div', {
  // Reset
  boxSizing: 'border-box'
});

var DEFAULT_TAG$j = 'div';
var StyledStatus = styled(DEFAULT_TAG$j, {
  borderRadius: '50%',
  flexShrink: 0,
  variants: {
    size: {
      '1': {
        width: 5,
        height: 5
      },
      '2': {
        width: 9,
        height: 9
      }
    },
    variant: {
      gray: {
        backgroundColor: '$slate7'
      },
      blue: {
        backgroundColor: '$blue9'
      },
      green: {
        backgroundColor: '$green9'
      },
      yellow: {
        backgroundColor: '$yellow9'
      },
      red: {
        backgroundColor: '$red9'
      }
    }
  },
  defaultVariants: {
    size: '2',
    variant: 'gray'
  }
});
var Status = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledStatus, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _excluded$b = ["alt", "src", "fallback", "size", "variant", "shape", "css", "status"];
var StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flexShrink: 0,
  position: 'relative',
  border: 'none',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  fontWeight: '500',
  color: '$hiContrast',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)'
  },
  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3'
      },
      '2': {
        width: '$5',
        height: '$5'
      },
      '3': {
        width: '$6',
        height: '$6'
      },
      '4': {
        width: '$7',
        height: '$7'
      },
      '5': {
        width: '$8',
        height: '$8'
      },
      '6': {
        width: '$9',
        height: '$9'
      }
    },
    variant: {
      hiContrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast'
      },
      gray: {
        backgroundColor: '$slate5'
      },
      red: {
        backgroundColor: '$red5'
      },
      crimson: {
        backgroundColor: '$crimson5'
      },
      pink: {
        backgroundColor: '$pink5'
      },
      purple: {
        backgroundColor: '$purple5'
      },
      violet: {
        backgroundColor: '$violet5'
      },
      indigo: {
        backgroundColor: '$indigo5'
      },
      blue: {
        backgroundColor: '$blue5'
      },
      cyan: {
        backgroundColor: '$cyan5'
      },
      teal: {
        backgroundColor: '$teal5'
      },
      green: {
        backgroundColor: '$green5'
      },
      lime: {
        backgroundColor: '$lime5'
      },
      yellow: {
        backgroundColor: '$yellow5'
      },
      orange: {
        backgroundColor: '$orange5'
      },
      gold: {
        backgroundColor: '$gold5'
      },
      brown: {
        backgroundColor: '$brown5'
      },
      bronze: {
        backgroundColor: '$bronze5'
      }
    },
    shape: {
      square: {
        borderRadius: '$2'
      },
      circle: {
        borderRadius: '50%'
      }
    },
    inactive: {
      "true": {
        opacity: '.3'
      }
    },
    interactive: {
      "true": {
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,.08)',
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 25ms linear'
        },
        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '1'
            }
          }
        },
        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.12)',
            opacity: '1'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: '2',
    variant: 'gray',
    shape: 'circle'
  }
});
var StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  verticalAlign: 'middle',
  width: '100%'
});
var StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',
  variants: {
    size: {
      '1': {
        fontSize: '10px',
        lineHeight: '15px'
      },
      '2': {
        fontSize: '$3'
      },
      '3': {
        fontSize: '$6'
      },
      '4': {
        fontSize: '$7'
      },
      '5': {
        fontSize: '$8'
      },
      '6': {
        fontSize: '$9'
      }
    }
  },
  defaultVariants: {
    size: '2'
  }
});
var AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $colors$loContrast',
  borderRadius: '50%'
});
var AvatarGroup = styled('div', _defineProperty({
  display: 'flex',
  flexDirection: 'row-reverse'
}, "& ".concat(AvatarNestedItem, ":nth-child(n+2)"), {
  marginRight: '-$1'
}));
var Avatar = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var alt = _ref.alt,
      src = _ref.src,
      fallback = _ref.fallback,
      size = _ref.size,
      variant = _ref.variant,
      shape = _ref.shape,
      css = _ref.css,
      status = _ref.status,
      props = _objectWithoutProperties(_ref, _excluded$b);

  return /*#__PURE__*/React.createElement(Box, {
    css: _objectSpread2(_objectSpread2({}, css), {}, {
      position: 'relative',
      height: 'fit-content',
      width: 'fit-content'
    })
  }, /*#__PURE__*/React.createElement(StyledAvatar, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef,
    size: size,
    variant: variant,
    shape: shape
  }), /*#__PURE__*/React.createElement(StyledAvatarImage, {
    alt: alt,
    src: src
  }), /*#__PURE__*/React.createElement(StyledAvatarFallback, {
    size: size
  }, fallback)), status && /*#__PURE__*/React.createElement(Box, {
    css: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      boxShadow: '0 0 0 3px $colors$loContrast',
      borderRadius: '$round',
      mr: '-3px',
      mb: '-3px'
    }
  }, /*#__PURE__*/React.createElement(Status, {
    size: size > 2 ? '2' : '1',
    variant: status
  })));
});

var DEFAULT_TAG$i = 'span';
var StyledBadge = styled(DEFAULT_TAG$i, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate3',
    pointerEvents: 'none',
    color: '$slate8'
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""'
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""'
  },
  // Custom
  backgroundColor: '$slate3',
  borderRadius: '$pill',
  color: '$slate11',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  variants: {
    size: {
      '1': {
        height: '$4',
        px: '$1',
        fontSize: '$1'
      },
      '2': {
        height: '$5',
        px: '$2',
        fontSize: '$2'
      }
    },
    variant: {
      gray: {
        backgroundColor: '$slate3',
        color: '$slate11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        }
      },
      red: {
        backgroundColor: '$red3',
        color: '$red11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8'
        }
      },
      crimson: {
        backgroundColor: '$crimson3',
        color: '$crimson11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$crimson8, 0 0 0 1px $colors$crimson8'
        }
      },
      pink: {
        backgroundColor: '$pink3',
        color: '$pink11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$pink8, 0 0 0 1px $colors$pink8'
        }
      },
      purple: {
        backgroundColor: '$purple3',
        color: '$purple11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$purple8, 0 0 0 1px $colors$purple8'
        }
      },
      violet: {
        backgroundColor: '$violet3',
        color: '$violet11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$violet8, 0 0 0 1px $colors$violet8'
        }
      },
      indigo: {
        backgroundColor: '$indigo3',
        color: '$indigo11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8'
        }
      },
      blue: {
        backgroundColor: '$blue3',
        color: '$blue11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        }
      },
      cyan: {
        backgroundColor: '$cyan3',
        color: '$cyan11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$cyan8, 0 0 0 1px $colors$cyan8'
        }
      },
      teal: {
        backgroundColor: '$teal3',
        color: '$teal11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8'
        }
      },
      green: {
        backgroundColor: '$green3',
        color: '$green11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8'
        }
      },
      lime: {
        backgroundColor: '$lime3',
        color: '$lime11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$lime8, 0 0 0 1px $colors$lime8'
        }
      },
      yellow: {
        backgroundColor: '$yellow3',
        color: '$yellow11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$yellow8, 0 0 0 1px $colors$yellow8'
        }
      },
      orange: {
        backgroundColor: '$orange3',
        color: '$orange11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$orange8, 0 0 0 1px $colors$orange8'
        }
      },
      gold: {
        backgroundColor: '$gold3',
        color: '$gold11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gold8, 0 0 0 1px $colors$gold8'
        }
      },
      bronze: {
        backgroundColor: '$bronze3',
        color: '$bronze11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$bronze8, 0 0 0 1px $colors$bronze8'
        }
      }
    },
    interactive: {
      "true": {}
    }
  },
  compoundVariants: [{
    interactive: true,
    variant: 'red',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$red4'
        }
      },
      '&:active': {
        backgroundColor: '$red5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$red5'
      }
    }
  }, {
    interactive: true,
    variant: 'crimson',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$crimson4'
        }
      },
      '&:active': {
        backgroundColor: '$crimson5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$crimson5'
      }
    }
  }, {
    interactive: true,
    variant: 'pink',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$pink4'
        }
      },
      '&:active': {
        backgroundColor: '$pink5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$pink5'
      }
    }
  }, {
    interactive: true,
    variant: 'purple',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$purple4'
        }
      },
      '&:active': {
        backgroundColor: '$purple5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$purple5'
      }
    }
  }, {
    interactive: true,
    variant: 'violet',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$violet4'
        }
      },
      '&:active': {
        backgroundColor: '$violet5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$violet5'
      }
    }
  }, {
    interactive: true,
    variant: 'indigo',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$indigo4'
        }
      },
      '&:active': {
        backgroundColor: '$indigo5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$indigo5'
      }
    }
  }, {
    interactive: true,
    variant: 'blue',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$blue4'
        }
      },
      '&:active': {
        backgroundColor: '$blue5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$blue5'
      }
    }
  }, {
    interactive: true,
    variant: 'cyan',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$cyan4'
        }
      },
      '&:active': {
        backgroundColor: '$cyan5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$cyan5'
      }
    }
  }, {
    interactive: true,
    variant: 'teal',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$teal4'
        }
      },
      '&:active': {
        backgroundColor: '$teal5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$teal5'
      }
    }
  }, {
    interactive: true,
    variant: 'green',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$green4'
        }
      },
      '&:active': {
        backgroundColor: '$green5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$green5'
      }
    }
  }, {
    interactive: true,
    variant: 'lime',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$lime4'
        }
      },
      '&:active': {
        backgroundColor: '$lime5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$lime5'
      }
    }
  }, {
    interactive: true,
    variant: 'yellow',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$yellow4'
        }
      },
      '&:active': {
        backgroundColor: '$yellow5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$yellow5'
      }
    }
  }, {
    interactive: true,
    variant: 'orange',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$orange4'
        }
      },
      '&:active': {
        backgroundColor: '$orange5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$orange5'
      }
    }
  }, {
    interactive: true,
    variant: 'gold',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$gold4'
        }
      },
      '&:active': {
        backgroundColor: '$gold5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$gold5'
      }
    }
  }, {
    interactive: true,
    variant: 'bronze',
    css: {
      '@hover': {
        '&:hover': {
          backgroundColor: '$bronze4'
        }
      },
      '&:active': {
        backgroundColor: '$bronze5'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$bronze5'
      }
    }
  }],
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
});
var Badge = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledBadge, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var DEFAULT_TAG$h = 'div';
var StyledBanner = styled(DEFAULT_TAG$h, {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
  variants: {
    size: {
      '1': {
        py: '$1',
        px: '$4'
      }
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast'
      },
      gray: {
        backgroundColor: '$slate3'
      },
      blue: {
        backgroundColor: '$blue3'
      },
      green: {
        backgroundColor: '$green3'
      },
      red: {
        backgroundColor: '$red3'
      }
    },
    rounded: {
      "true": {
        borderRadius: '$pill'
      }
    },
    border: {
      "true": {
        borderRadius: '$pill'
      }
    }
  },
  compoundVariants: [{
    border: 'true',
    variant: 'gray',
    css: {
      borderColor: '$slate6'
    }
  }, {
    border: 'true',
    variant: 'blue',
    css: {
      borderColor: '$blue11'
    }
  }, {
    border: 'true',
    variant: 'loContrast',
    css: {
      borderColor: '$slate6'
    }
  }],
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
});
var Banner = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledBanner, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Banner.toString = function () {
  return ".".concat(StyledBanner.className);
};

var DEFAULT_TAG$g = 'button';
var StyledButton = styled(DEFAULT_TAG$g, {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none'
  },
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5'
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6'
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7'
      }
    },
    variant: {
      gray: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      },
      blue: {
        backgroundColor: '$blue2',
        boxShadow: 'inset 0 0 0 1px $colors$blue7',
        color: '$blue11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8'
          }
        },
        '&:active': {
          backgroundColor: '$blue3',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue4',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        }
      },
      green: {
        backgroundColor: '$green2',
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        color: '$green11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$green8'
          }
        },
        '&:active': {
          backgroundColor: '$green3',
          boxShadow: 'inset 0 0 0 1px $colors$green8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$green4',
          boxShadow: 'inset 0 0 0 1px $colors$green8'
        }
      },
      red: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$red11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$red3',
          boxShadow: 'inset 0 0 0 1px $colors$red8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$red4',
          boxShadow: 'inset 0 0 0 1px $colors$red8'
        }
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)'
          }
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)'
          }
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)'
        }
      }
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        }
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      }
    },
    ghost: {
      "true": {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }
  },
  compoundVariants: [{
    variant: 'gray',
    ghost: 'true',
    css: {
      backgroundColor: 'transparent',
      color: '$hiContrast',
      '@hover': {
        '&:hover': {
          backgroundColor: '$slateA3',
          boxShadow: 'none'
        }
      },
      '&:active': {
        backgroundColor: '$slateA4'
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$slateA4',
        boxShadow: 'none'
      }
    }
  }, {
    variant: 'blue',
    ghost: 'true',
    css: {
      backgroundColor: 'transparent',
      '@hover': {
        '&:hover': {
          backgroundColor: '$blueA3',
          boxShadow: 'none'
        }
      },
      '&:active': {
        backgroundColor: '$blueA4'
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$blueA8, 0 0 0 1px $colors$blueA8'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$blueA4',
        boxShadow: 'none'
      }
    }
  }, {
    variant: 'green',
    ghost: 'true',
    css: {
      backgroundColor: 'transparent',
      '@hover': {
        '&:hover': {
          backgroundColor: '$greenA3',
          boxShadow: 'none'
        }
      },
      '&:active': {
        backgroundColor: '$greenA4'
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$greenA4',
        boxShadow: 'none'
      }
    }
  }, {
    variant: 'red',
    ghost: 'true',
    css: {
      backgroundColor: 'transparent',
      '@hover': {
        '&:hover': {
          backgroundColor: '$redA3',
          boxShadow: 'none'
        }
      },
      '&:active': {
        backgroundColor: '$redA4'
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8'
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
        backgroundColor: '$redA4',
        boxShadow: 'none'
      }
    }
  }],
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
});
var Button = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledButton, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Button.toString = function () {
  return ".".concat(StyledButton.className);
};

var DEFAULT_TAG$f = 'div';
var StyledCard = styled(DEFAULT_TAG$f, {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: '$panel',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  borderRadius: '$3',
  position: 'relative',
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
    borderRadius: '$3',
    pointerEvents: 'none'
  },
  variants: {
    variant: {
      interactive: {
        '@hover': {
          '&:hover': {
            '&::before': {
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.2)'
            }
          }
        },
        '&:focus': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
          }
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        willChange: 'transform',
        '&::before': {
          boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
          opacity: '0',
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)'
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$panel',
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: '1'
            }
          }
        },
        '&:active': {
          transform: 'translateY(0)',
          transition: 'none',
          '&::before': {
            boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
            opacity: '1'
          }
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        }
      },
      active: {
        transform: 'translateY(0)',
        transition: 'none',
        '&::before': {
          boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
          opacity: '1'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        }
      }
    }
  }
});
var Card = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledCard, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8'
    }
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red7',
    boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9'
  },
  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
        borderRadius: '$1'
      },
      '2': {
        width: '$5',
        height: '$5',
        borderRadius: '$2'
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var StyledIndicator$1 = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%'
});
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledCheckbox, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(StyledIndicator$1, null, /*#__PURE__*/React.createElement(CheckIcon, null)));
});

var DEFAULT_TAG$e = 'code';
var StyledCode = styled(DEFAULT_TAG$e, {
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',
  variants: {
    variant: {
      gray: {
        backgroundColor: '$slate3',
        color: '$slate11'
      },
      violet: {
        backgroundColor: '$violet3',
        color: '$violet11'
      }
    }
  },
  defaultVariants: {
    variant: 'violet'
  }
});
var Code = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledCode, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var DEFAULT_TAG$d = 'div';
var StyledContainer = styled(DEFAULT_TAG$d, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  variants: {
    size: {
      '1': {
        maxWidth: '430px'
      },
      '2': {
        maxWidth: '715px'
      },
      '3': {
        maxWidth: '1145px'
      },
      '4': {
        maxWidth: 'none'
      }
    }
  },
  defaultVariants: {
    size: '4'
  }
});
var Container = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledContainer, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      rowReverse: {
        flexDirection: 'row-reverse'
      },
      columnReverse: {
        flexDirection: 'column-reverse'
      }
    },
    align: {
      start: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    justify: {
      start: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      between: {
        justifyContent: 'space-between'
      }
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap'
      },
      wrap: {
        flexWrap: 'wrap'
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse'
      }
    },
    gap: {
      1: {
        gap: '$1'
      },
      2: {
        gap: '$2'
      },
      3: {
        gap: '$3'
      },
      4: {
        gap: '$4'
      },
      5: {
        gap: '$5'
      },
      6: {
        gap: '$6'
      },
      7: {
        gap: '$7'
      },
      8: {
        gap: '$8'
      },
      9: {
        gap: '$9'
      }
    }
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap'
  }
});

var _excluded$a = ["children"],
    _excluded2$5 = ["children"];
var baseItemCss = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  px: '$5'
};
var itemCss = _objectSpread2(_objectSpread2({}, baseItemCss), {}, {
  position: 'relative',
  color: '$hiContrast',
  '&:focus': {
    outline: 'none',
    backgroundColor: '$blue9',
    color: 'white'
  },
  '&[data-disabled]': {
    color: '$slate9'
  }
});
var labelCss = _objectSpread2(_objectSpread2({}, baseItemCss), {}, {
  color: '$slate11'
});
var menuCss = {
  boxSizing: 'border-box',
  minWidth: 120,
  py: '$1'
};
var separatorCss = {
  height: 1,
  my: '$1',
  backgroundColor: '$slate6'
};
var StyledMenu = styled(MenuPrimitive.Root, _objectSpread2(_objectSpread2({}, menuCss), panelStyles));
var Menu = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledMenu, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});
var MenuSeparator = styled(MenuPrimitive.Separator, separatorCss);
var MenuItem = styled(MenuPrimitive.Item, itemCss);
var StyledMenuRadioItem$2 = styled(MenuPrimitive.RadioItem, itemCss);
var MenuRadioItem = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$a);

  return /*#__PURE__*/React.createElement(StyledMenuRadioItem$2, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(MenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(Flex, {
    css: {
      width: '$3',
      height: '$3',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    css: {
      width: '$1',
      height: '$1',
      backgroundColor: 'currentColor',
      borderRadius: '$round'
    }
  })))), children);
});
var StyledMenuCheckboxItem$2 = styled(MenuPrimitive.CheckboxItem, itemCss);
var MenuCheckboxItem = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2$5);

  return /*#__PURE__*/React.createElement(StyledMenuCheckboxItem$2, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(MenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(CheckIcon, null))), children);
});
var MenuLabel = styled(MenuPrimitive.Label, labelCss);
var MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {});
var MenuGroup = styled(MenuPrimitive.Group, {});

var _excluded$9 = ["children"],
    _excluded2$4 = ["children"];
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var StyledContextMenuContent = styled(ContextMenuPrimitive.Content, _objectSpread2(_objectSpread2({}, menuCss), panelStyles));
var ContextMenuContent = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledContextMenuContent, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});
var ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss);
var ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss);
var StyledMenuRadioItem$1 = styled(ContextMenuPrimitive.RadioItem, itemCss);
var ContextMenuRadioItem = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$9);

  return /*#__PURE__*/React.createElement(StyledMenuRadioItem$1, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(ContextMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(Flex, {
    css: {
      width: '$3',
      height: '$3',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    css: {
      width: '$1',
      height: '$1',
      backgroundColor: 'currentColor',
      borderRadius: '$round'
    }
  })))), children);
});
var StyledMenuCheckboxItem$1 = styled(ContextMenuPrimitive.CheckboxItem, itemCss);
var ContextMenuCheckboxItem = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2$4);

  return /*#__PURE__*/React.createElement(StyledMenuCheckboxItem$1, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(ContextMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(CheckIcon, null))), children);
});
var ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss);
var ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {});
var ContextMenuGroup = styled(ContextMenuPrimitive.Group, {});

var DEFAULT_TAG$c = 'input';
var StyledTextField = styled(DEFAULT_TAG$c, {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: '1',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',
  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3'
  },
  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast'
  },
  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    '&:-webkit-autofill': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3'
    }
  },
  '&::placeholder': {
    color: '$slate9'
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7'
    }
  },
  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7'
    }
  },
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1'
        }
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        fontSize: '$3',
        px: '$2',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3'
        }
      }
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7'
          }
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
        },
        '&:disabled': {
          backgroundColor: 'transparent'
        },
        '&:read-only': {
          backgroundColor: 'transparent'
        }
      }
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8'
        }
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8'
        }
      }
    },
    cursor: {
      "default": {
        cursor: 'default',
        '&:focus': {
          cursor: 'text'
        }
      },
      text: {
        cursor: 'text'
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var TextField = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledTextField, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

TextField.toString = function () {
  return ".".concat(StyledTextField.className);
};

var _excluded$8 = ["css"];
var SelectWrapper = styled('div', {
  backgroundColor: '$loContrast',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 400,
  height: '$5',
  flexShrink: 0,
  '&:focus-within': {
    zIndex: 1,
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
  }
});
var StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 'inherit',
  color: 'inherit',
  font: 'inherit',
  outline: 'none',
  width: '100%',
  height: '100%',
  pl: '$1',
  pr: '$3',
  lineHeight: '25px'
});
var StyledCaretSortIcon = styled(CaretSortIcon, {
  position: 'absolute',
  pointerEvents: 'none',
  display: 'inline',
  // Use margins instead of top/left to avoid setting "position: relative" on parent,
  // which would make stacking context tricky with Select used in a control group.
  marginTop: 5,
  marginLeft: -16
});
var Select = /*#__PURE__*/React.forwardRef(function Select(_ref, forwardedRef) {
  var css = _ref.css,
      props = _objectWithoutProperties(_ref, _excluded$8);

  return /*#__PURE__*/React.createElement(SelectWrapper, {
    css: css
  }, /*#__PURE__*/React.createElement(StyledSelect, _objectSpread2({
    ref: forwardedRef
  }, props)), /*#__PURE__*/React.createElement(StyledCaretSortIcon, null));
});

Select.toString = function () {
  return ".".concat(SelectWrapper.className);
};

var _styled$2;
var ControlGroup = styled('div', (_styled$2 = {
  display: 'flex',
  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0
}, _defineProperty(_styled$2, "& ".concat(Button), {
  borderRadius: 0,
  boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  '&:hover': {
    boxShadow: '-1px 0 $colors$slate8, inset 0 1px $colors$slate8, inset -1px 0 $colors$slate8, inset 0 -1px $colors$slate8'
  },
  '&:focus': {
    zIndex: 1,
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
  },
  '&:first-child': {
    borderTopLeftRadius: '$1',
    borderBottomLeftRadius: '$1',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8'
    },
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
    }
  },
  '&:last-child': {
    borderTopRightRadius: '$1',
    borderBottomRightRadius: '$1',
    boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
    }
  }
}), _defineProperty(_styled$2, "& ".concat(TextField), {
  borderRadius: 0,
  boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  '&:focus': {
    zIndex: 1,
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
  },
  '&:first-child': {
    borderTopLeftRadius: '$1',
    borderBottomLeftRadius: '$1',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
    }
  },
  '&:last-child': {
    borderTopRightRadius: '$1',
    borderBottomRightRadius: '$1',
    boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
    }
  }
}), _defineProperty(_styled$2, "& ".concat(Select), {
  borderRadius: 0,
  boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  '&:focus-within': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
  },
  '&:first-child': {
    borderTopLeftRadius: '$1',
    borderBottomLeftRadius: '$1',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    '&:focus-within': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
    }
  },
  '&:last-child': {
    borderTopRightRadius: '$1',
    borderBottomRightRadius: '$1',
    boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:focus-within': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
    }
  }
}), _styled$2));

var DesignSystemProvider = function DesignSystemProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(IdProvider, null, children);
};

var DEFAULT_TAG$b = 'button';
var StyledIconButton = styled(DEFAULT_TAG$b, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  backgroundColor: '$loContrast',
  border: '1px solid $slate7',
  '@hover': {
    '&:hover': {
      borderColor: '$slate8'
    }
  },
  '&:active': {
    backgroundColor: '$slate2'
  },
  '&:focus': {
    borderColor: '$slate8',
    boxShadow: '0 0 0 1px $colors$slate8'
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate6'
  },
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        width: '$5'
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        width: '$6'
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        width: '$7'
      },
      '4': {
        borderRadius: '$3',
        height: '$8',
        width: '$8'
      }
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3'
          }
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8'
        },
        '&:active': {
          backgroundColor: '$slateA4'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slateA4'
        }
      },
      raised: {
        boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        '@hover': {
          '&:hover': {
            boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)'
          }
        },
        '&:focus': {
          borderColor: '$slate8',
          boxShadow: '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)'
        },
        '&:active': {
          backgroundColor: '$slate4'
        }
      }
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          }
        },
        '&:active': {
          backgroundColor: '$slate4'
        }
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          }
        },
        '&:active': {
          backgroundColor: '$slate4'
        }
      }
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'ghost'
  }
});
var IconButton = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledIconButton, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _excluded$7 = ["children"],
    _excluded2$3 = ["children"];
var StyledOverlay$1 = styled(DialogPrimitive.Overlay, _objectSpread2(_objectSpread2({}, overlayStyles), {}, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}));
function Dialog(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React.createElement(DialogPrimitive.Root, _objectSpread2({}, props), /*#__PURE__*/React.createElement(StyledOverlay$1, null), children);
}
var StyledContent$2 = styled(DialogPrimitive.Content, _objectSpread2(_objectSpread2({}, panelStyles), {}, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',
  '&:focus': {
    outline: 'none'
  }
}));
var StyledCloseButton$1 = styled(IconButton, {
  position: 'absolute',
  top: '$2',
  right: '$2'
});
var DialogContent = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2$3);

  return /*#__PURE__*/React.createElement(StyledContent$2, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), children, /*#__PURE__*/React.createElement(DialogPrimitive.Close, {
    as: StyledCloseButton$1,
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Cross1Icon, null)));
});
var DialogTrigger = DialogPrimitive.Trigger;
var DialogClose = DialogPrimitive.Close;

var _excluded$6 = ["children"],
    _excluded2$2 = ["children"];
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Trigger, _objectSpread2(_objectSpread2({
    "data-radix-dropdown-menu-trigger": true
  }, props), {}, {
    ref: forwardedRef
  }));
});
var StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, _objectSpread2(_objectSpread2({}, menuCss), panelStyles));
var DropdownMenuContent = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledDropdownMenuContent, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});
var DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);
var DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
var StyledMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss);
var DropdownMenuRadioItem = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React.createElement(StyledMenuRadioItem, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(DropdownMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(Flex, {
    css: {
      width: '$3',
      height: '$3',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    css: {
      width: '$1',
      height: '$1',
      backgroundColor: 'currentColor',
      borderRadius: '$round'
    }
  })))), children);
});
var StyledMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);
var DropdownMenuCheckboxItem = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2$2);

  return /*#__PURE__*/React.createElement(StyledMenuCheckboxItem, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    css: {
      position: 'absolute',
      left: '$1'
    }
  }, /*#__PURE__*/React.createElement(DropdownMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(CheckIcon, null))), children);
});
var DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
var DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
var DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});

var Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  variants: {
    align: {
      start: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)'
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    },
    gap: {
      1: {
        gap: '$1'
      },
      2: {
        gap: '$2'
      },
      3: {
        gap: '$3'
      },
      4: {
        gap: '$4'
      },
      5: {
        gap: '$5'
      },
      6: {
        gap: '$6'
      },
      7: {
        gap: '$7'
      },
      8: {
        gap: '$8'
      },
      9: {
        gap: '$9'
      }
    },
    gapX: {
      1: {
        columnGap: '$1'
      },
      2: {
        columnGap: '$2'
      },
      3: {
        columnGap: '$3'
      },
      4: {
        columnGap: '$4'
      },
      5: {
        columnGap: '$5'
      },
      6: {
        columnGap: '$6'
      },
      7: {
        columnGap: '$7'
      },
      8: {
        columnGap: '$8'
      },
      9: {
        columnGap: '$9'
      }
    },
    gapY: {
      1: {
        rowGap: '$1'
      },
      2: {
        rowGap: '$2'
      },
      3: {
        rowGap: '$3'
      },
      4: {
        rowGap: '$4'
      },
      5: {
        rowGap: '$5'
      },
      6: {
        rowGap: '$6'
      },
      7: {
        rowGap: '$7'
      },
      8: {
        rowGap: '$8'
      },
      9: {
        rowGap: '$9'
      }
    }
  }
});

var DEFAULT_TAG$a = 'span';
var StyledText = styled(DEFAULT_TAG$a, {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  variants: {
    size: {
      '1': {
        fontSize: '$1'
      },
      '2': {
        fontSize: '$2'
      },
      '3': {
        fontSize: '$3'
      },
      '4': {
        fontSize: '$4'
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em'
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em'
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em'
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em'
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em'
      }
    },
    variant: {
      red: {
        color: '$red11'
      },
      crimson: {
        color: '$crimson11'
      },
      pink: {
        color: '$pink11'
      },
      purple: {
        color: '$purple11'
      },
      violet: {
        color: '$violet11'
      },
      indigo: {
        color: '$indigo11'
      },
      blue: {
        color: '$blue11'
      },
      cyan: {
        color: '$cyan11'
      },
      teal: {
        color: '$teal11'
      },
      green: {
        color: '$green11'
      },
      lime: {
        color: '$lime11'
      },
      yellow: {
        color: '$yellow11'
      },
      orange: {
        color: '$orange11'
      },
      gold: {
        color: '$gold11'
      },
      bronze: {
        color: '$bronze11'
      },
      gray: {
        color: '$slate11'
      },
      contrast: {
        color: '$hiContrast'
      }
    },
    gradient: {
      "true": {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },
  compoundVariants: [{
    variant: 'red',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $red11, $crimson11)'
    }
  }, {
    variant: 'crimson',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $crimson11, $pink11)'
    }
  }, {
    variant: 'pink',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $pink11, $purple11)'
    }
  }, {
    variant: 'purple',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $purple11, $violet11)'
    }
  }, {
    variant: 'violet',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $violet11, $indigo11)'
    }
  }, {
    variant: 'indigo',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $indigo11, $blue11)'
    }
  }, {
    variant: 'blue',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $blue11, $cyan11)'
    }
  }, {
    variant: 'cyan',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $cyan11, $teal11)'
    }
  }, {
    variant: 'teal',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $teal11, $green11)'
    }
  }, {
    variant: 'green',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $green11, $lime11)'
    }
  }, {
    variant: 'lime',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $lime11, $yellow11)'
    }
  }, {
    variant: 'yellow',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $yellow11, $orange11)'
    }
  }, {
    variant: 'orange',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $orange11, $red11)'
    }
  }, {
    variant: 'gold',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $gold11, $gold9)'
    }
  }, {
    variant: 'bronze',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $bronze11, $bronze9)'
    }
  }, {
    variant: 'gray',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $gray11, $gray12)'
    }
  }, {
    variant: 'contrast',
    gradient: 'true',
    css: {
      background: 'linear-gradient(to right, $hiContrast, $gray12)'
    }
  }],
  defaultVariants: {
    size: '3',
    variant: 'contrast'
  }
});
var Text = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledText, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Text.toString = function () {
  return ".".concat(StyledText.className);
};

var _excluded$5 = ["size"];
var DEFAULT_TAG$9 = 'h1';
var Heading = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  // '2' here is the default heading size variant
  var _props$size = props.size,
      size = _props$size === void 0 ? '1' : _props$size,
      textProps = _objectWithoutProperties(props, _excluded$5); // This is the mapping of Heading Variants to Text variants


  var textSize = {
    1: {
      '@initial': '4',
      '@bp2': '5'
    },
    2: {
      '@initial': '6',
      '@bp2': '7'
    },
    3: {
      '@initial': '7',
      '@bp2': '8'
    },
    4: {
      '@initial': '8',
      '@bp2': '9'
    }
  }; // This is the mapping of Heading Variants to Text css

  var textCss = {
    1: {
      fontWeight: 500,
      lineHeight: '20px',
      '@bp2': {
        lineHeight: '23px'
      }
    },
    2: {
      fontWeight: 500,
      lineHeight: '25px',
      '@bp2': {
        lineHeight: '30px'
      }
    },
    3: {
      fontWeight: 500,
      lineHeight: '33px',
      '@bp2': {
        lineHeight: '41px'
      }
    },
    4: {
      fontWeight: 500,
      lineHeight: '35px',
      '@bp2': {
        lineHeight: '55px'
      }
    }
  };
  return /*#__PURE__*/React.createElement(StyledText, _objectSpread2(_objectSpread2({
    as: DEFAULT_TAG$9
  }, textProps), {}, {
    ref: forwardedRef,
    size: textSize[size],
    css: _objectSpread2(_objectSpread2({
      fontVariantNumeric: 'proportional-nums'
    }, textCss[size]), props.css)
  }));
});

var Image = styled('img', {
  // Reset
  verticalAlign: 'middle',
  maxWidth: '100%'
});

var StyledKbd = styled('kbd', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$loContrast',
  flexShrink: 0,
  color: '$hiContrast',
  userSelect: 'none',
  cursor: 'default',
  whiteSpace: 'nowrap',
  boxShadow: "\n    inset 0 0.5px rgba(255, 255, 255, 0.1),\n    inset 0 1px 5px $colors$slate2,\n    0px 0px 0px 0.5px $colors$slate8,\n    0px 2px 1px -1px $colors$slate8,\n    0 1px $colors$slate8",
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
  fontFamily: 'inherit',
  fontWeight: 400,
  lineHeight: '1.5',
  mx: '2px',
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        px: '0.3em',
        height: '$3',
        minWidth: '1.6em',
        fontSize: '$1',
        lineHeight: '$spaces$3'
      },
      '2': {
        borderRadius: '$2',
        px: '0.5em',
        height: '$5',
        minWidth: '2em',
        fontSize: '$2',
        lineHeight: '$spaces$5'
      }
    },
    width: {
      shift: {
        width: '4em',
        justifyContent: 'flex-start'
      },
      command: {
        width: '3em',
        justifyContent: 'flex-end'
      },
      space: {
        width: '8em'
      }
    }
  },
  compoundVariants: [{
    size: '1',
    width: 'shift',
    css: {
      width: '3em'
    }
  }, {
    size: '1',
    width: 'command',
    css: {
      width: '2.5em'
    }
  }, {
    size: '1',
    width: 'space',
    css: {
      width: '5em'
    }
  }],
  defaultVariants: {
    size: '2'
  }
});
var Kbd = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledKbd, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _styled$1;
var DEFAULT_TAG$8 = 'a';
var StyledLink = styled(DEFAULT_TAG$8, (_styled$1 = {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline'
    }
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none'
  }
}, _defineProperty(_styled$1, "& ".concat(Text), {
  color: 'inherit'
}), _defineProperty(_styled$1, "variants", {
  variant: {
    blue: {
      color: '$blue11',
      textDecorationColor: '$blue4',
      '&:focus': {
        outlineColor: '$blue8'
      }
    },
    subtle: {
      color: '$slate11',
      textDecorationColor: '$slate4',
      '&:focus': {
        outlineColor: '$slate8'
      }
    },
    contrast: {
      color: '$hiContrast',
      textDecoration: 'underline',
      textDecorationColor: '$slate4',
      '@hover': {
        '&:hover': {
          textDecorationColor: '$slate7'
        }
      },
      '&:focus': {
        outlineColor: '$slate8'
      }
    }
  }
}), _defineProperty(_styled$1, "defaultVariants", {
  variant: 'contrast'
}), _styled$1));
var Link = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledLink, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _excluded$4 = ["size"];
var DEFAULT_TAG$7 = 'p';
var Paragraph = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  // '2' here is the default Paragraph size variant
  var _props$size = props.size,
      size = _props$size === void 0 ? '1' : _props$size,
      textProps = _objectWithoutProperties(props, _excluded$4); // This is the mapping of Paragraph Variants to Text variants


  var textSize = {
    1: {
      '@initial': '3',
      '@bp2': '4'
    },
    2: {
      '@initial': '5',
      '@bp2': '6'
    }
  }; // This is the mapping of Paragraph Variants to Text css

  var textCss = {
    1: {
      lineHeight: '25px',
      '@bp2': {
        lineHeight: '27px'
      }
    },
    2: {
      color: '$slate11',
      lineHeight: '27px',
      '@bp2': {
        lineHeight: '30px'
      }
    }
  };
  return /*#__PURE__*/React.createElement(StyledText, _objectSpread2(_objectSpread2({
    as: DEFAULT_TAG$7
  }, textProps), {}, {
    ref: forwardedRef,
    size: textSize[size],
    css: _objectSpread2(_objectSpread2({}, textCss[size]), props.css)
  }));
});

var _excluded$3 = ["children"],
    _excluded2$1 = ["children", "hideArrow"];
function Popover(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement(PopoverPrimitive.Root, _objectSpread2({}, props), children);
}
var StyledContent$1 = styled(PopoverPrimitive.Content, _objectSpread2(_objectSpread2({}, panelStyles), {}, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none'
  }
}));
var PopoverContent = /*#__PURE__*/React.forwardRef(function (_ref2, fowardedRef) {
  var children = _ref2.children,
      hideArrow = _ref2.hideArrow,
      props = _objectWithoutProperties(_ref2, _excluded2$1);

  return /*#__PURE__*/React.createElement(StyledContent$1, _objectSpread2(_objectSpread2({
    sideOffset: 0
  }, props), {}, {
    ref: fowardedRef
  }), children, !hideArrow && /*#__PURE__*/React.createElement(Box, {
    css: {
      color: '$panel'
    }
  }, /*#__PURE__*/React.createElement(PopoverPrimitive.Arrow, {
    width: 11,
    height: 5,
    offset: 5,
    style: {
      fill: 'currentColor'
    }
  })));
});
var PopoverTrigger = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(PopoverPrimitive.Trigger, _objectSpread2(_objectSpread2({
    "data-radix-popover-trigger": true
  }, props), {}, {
    ref: forwardedRef
  }));
});
var PopoverClose = PopoverPrimitive.Close;

var _excluded$2 = ["value", "max"];
var indeterminateProgress = keyframes({
  '0%': {
    transform: 'scaleX(1) translateX(-100%)',
    transformOrigin: 'left'
  },
  '50%': {
    transform: 'scaleX(1) translateX(1000%)',
    transformOrigin: 'left'
  },
  '100%': {
    transform: 'scaleX(1) translateX(2000%)',
    transformOrigin: 'left'
  }
});
var StyledProgressBar = styled(ProgressPrimitive.Root, {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$1',
  overflow: 'hidden',
  borderRadius: '$pill',
  '&[data-state="indeterminate"]': {
    backgroundColor: '$slate4',
    '&::after': {
      animationName: indeterminateProgress,
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$slate7',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%'
    }
  },
  variants: {
    variant: {
      gray: {
        background: '$slate8'
      },
      blue: {
        backgroundColor: '$blue9'
      },
      gradient: {
        backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
      }
    }
  },
  defaultVariants: {
    variant: 'gray'
  }
});
var ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$slate4',
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)'
});
var ProgressBar = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var value = _ref.value,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var percentage = value != null ? Math.round(value / max * 100) : null;
  return /*#__PURE__*/React.createElement(StyledProgressBar, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef,
    value: value,
    max: max
  }), /*#__PURE__*/React.createElement(ProgressBarIndicator, {
    style: {
      transform: "translateX(".concat(percentage, "%)")
    }
  }));
});

var RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex'
});
var StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '$blue9'
  }
});
var StyledRadio$1 = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  borderRadius: '50%',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8'
    }
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red7',
    boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9'
  },
  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3'
      },
      '2': _defineProperty({
        width: '$5',
        height: '$5'
      }, "& ".concat(StyledIndicator), {
        '&::after': {
          width: '$3',
          height: '$3'
        }
      })
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var Radio = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledRadio$1, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(StyledIndicator, null));
});

var RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block'
});
var StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  flexShrink: 0,
  mr: '$3'
});
var StyledRadioIndicator = styled('div', {
  borderRadius: '$round',
  width: 15,
  height: 15,
  backgroundColor: '$blue9',
  transform: 'scale(0)'
});
var StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  p: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8'
    }
  },
  '&[data-state="checked"]': _defineProperty({
    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8 !important'
  }, "& ".concat(StyledRadioIndicator), {
    transform: 'scale(1)'
  })
});
var RadioCard = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledRadio, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(StyledRadioButton, null, /*#__PURE__*/React.createElement(StyledRadioIndicator, null)), props.children);
});

var DEFAULT_TAG$6 = 'section';
var StyledSection = styled(DEFAULT_TAG$6, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
    content: '""'
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""'
  },
  variants: {
    size: {
      '1': {
        py: '$3'
      },
      '2': {
        py: '$5'
      },
      '3': {
        py: '$9'
      }
    }
  },
  defaultVariants: {
    size: '3'
  }
});
var Section = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSection, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var StyledSeparator = styled(SeparatorPrimitive.Root, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$slate6',
  cursor: 'default',
  variants: {
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3'
        },
        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3'
        }
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7'
        },
        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7'
        }
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var Separator = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSeparator, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _excluded$1 = ["children"],
    _excluded2 = ["children"];
var fadeIn = keyframes({
  from: {
    opacity: '0'
  },
  to: {
    opacity: '1'
  }
});
var fadeOut = keyframes({
  from: {
    opacity: '1'
  },
  to: {
    opacity: '0'
  }
});
var StyledOverlay = styled(DialogPrimitive.Overlay, _objectSpread2(_objectSpread2({}, overlayStyles), {}, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  '&[data-state="open"]': {
    animation: "".concat(fadeIn, " 150ms cubic-bezier(0.22, 1, 0.36, 1)")
  },
  '&[data-state="closed"]': {
    animation: "".concat(fadeOut, " 150ms cubic-bezier(0.22, 1, 0.36, 1)")
  }
}));
function Sheet(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(DialogPrimitive.Root, _objectSpread2({}, props), /*#__PURE__*/React.createElement(StyledOverlay, null), children);
}
var slideIn = keyframes({
  from: {
    transform: '$$transformValue'
  },
  to: {
    transform: 'translate3d(0,0,0)'
  }
});
var slideOut = keyframes({
  from: {
    transform: 'translate3d(0,0,0)'
  },
  to: {
    transform: '$$transformValue'
  }
});
var StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$panel',
  boxShadow: '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: 250,
  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',
  // '&:focus': {
  //   outline: 'none',
  // },
  '&[data-state="open"]': {
    animation: "".concat(slideIn, " 150ms cubic-bezier(0.22, 1, 0.36, 1)")
  },
  '&[data-state="closed"]': {
    animation: "".concat(slideOut, " 150ms cubic-bezier(0.22, 1, 0.36, 1)")
  },
  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto'
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto'
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0
      }
    }
  },
  defaultVariants: {
    side: 'right'
  }
});
var StyledCloseButton = styled(IconButton, {
  position: 'absolute',
  top: '$2',
  right: '$2'
});
var SheetContent = /*#__PURE__*/React.forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledContent, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), children, /*#__PURE__*/React.createElement(DialogPrimitive.Close, {
    as: StyledCloseButton,
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Cross1Icon, null)));
});
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;

var StyledSimpleToggle = styled(ToggleButtonPrimitive.Root, {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  height: '$5',
  width: '$5',
  backgroundColor: 'transparent',
  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA3'
    }
  },
  '&:active': {
    backgroundColor: '$slateA4'
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8',
    zIndex: 1
  },
  '&[data-state="on"]': {
    backgroundColor: '$slateA5',
    '@hover': {
      '&:hover': {
        backgroundColor: '$slateA5'
      }
    },
    '&:active': {
      backgroundColor: '$slateA7'
    }
  },
  variants: {
    shape: {
      circle: {
        borderRadius: '$round'
      },
      square: {
        borderRadius: '$1'
      }
    }
  }
});
var SimpleToggle = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSimpleToggle, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var pulse = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: '100%'
  }
});
var Skeleton = styled('div', {
  backgroundColor: '$slate4',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    animationName: "".concat(pulse),
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  variants: {
    variant: {
      avatar1: {
        borderRadius: '$round',
        height: '$3',
        width: '$3'
      },
      avatar2: {
        borderRadius: '$round',
        height: '$5',
        width: '$5'
      },
      avatar3: {
        borderRadius: '$round',
        height: '$6',
        width: '$6'
      },
      avatar4: {
        borderRadius: '$round',
        height: '$7',
        width: '$7'
      },
      avatar5: {
        borderRadius: '$round',
        height: '$8',
        width: '$8'
      },
      avatar6: {
        borderRadius: '$round',
        height: '$9',
        width: '$9'
      },
      text: {
        height: '$1'
      },
      title: {
        height: '$5'
      },
      heading: {
        height: '$3'
      },
      button: {
        borderRadius: '$1',
        height: '$5',
        width: '$8'
      }
    }
  },
  defaultVariants: {
    variant: 'text'
  }
});

var _hover;
var SliderTrack = styled(SliderPrimitive.Track, {
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '$slate7',
  borderRadius: '$pill',
  '&[data-orientation="horizontal"]': {
    height: 2
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100
  }
});
var SliderRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  background: '$blue9',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%'
  },
  '&[data-orientation="vertical"]': {
    width: '100%'
  }
});
var SliderThumb = styled(SliderPrimitive.Thumb, {
  position: 'relative',
  display: 'block',
  width: 15,
  height: 15,
  outline: 'none',
  opacity: '0',
  backgroundColor: 'white',
  boxShadow: '0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)',
  borderRadius: '$round',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -2,
    backgroundColor: 'hsla(0,0%,0%,.035)',
    transform: 'scale(1)',
    borderRadius: '$round',
    transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)'
  },
  '&:focus': {
    '&::after': {
      transform: 'scale(2)'
    }
  }
});
var StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,
  flexGrow: 1,
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15
  },
  '@hover': {
    '&:hover': (_hover = {}, _defineProperty(_hover, "& ".concat(SliderTrack), {
      backgroundColor: '$slate8'
    }), _defineProperty(_hover, "& ".concat(SliderThumb), {
      opacity: '1'
    }), _hover)
  }
});
var Slider = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var hasRange = Array.isArray(props.defaultValue || props.value);
  var thumbsArray = hasRange ? props.defaultValue || props.value : [props.defaultValue || props.value];
  return /*#__PURE__*/React.createElement(StyledSlider, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(SliderTrack, null, /*#__PURE__*/React.createElement(SliderRange, null)), thumbsArray.map(function (_, i) {
    return /*#__PURE__*/React.createElement(SliderThumb, {
      key: i
    });
  }));
});

var DEFAULT_TAG$5 = 'sup';
var StyledSup = styled(DEFAULT_TAG$5, {
  fontFeatureSettings: '"sups"',
  fontSize: '100%',
  lineHeight: '1',
  verticalAlign: 'baseline'
});
var Sup = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSup, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Sup.toString = function () {
  return ".".concat(StyledSup.className);
};

var DEFAULT_TAG$4 = 'sub';
var StyledSub = styled(DEFAULT_TAG$4, {
  fontFeatureSettings: '"subs"',
  fontSize: '100%',
  lineHeight: '1',
  verticalAlign: 'baseline'
});
var Sub = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSub, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Sub.toString = function () {
  return ".".concat(StyledSub.className);
};

var StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: 'absolute',
  left: 0,
  width: 13,
  height: 13,
  backgroundColor: 'white',
  borderRadius: '$round',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(11px)'
  }
});
var StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  // Reset
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  backgroundColor: '$slate5',
  borderRadius: '$pill',
  position: 'relative',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate8'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$blue9',
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$blue8'
    }
  },
  variants: {
    size: {
      '1': {
        width: '$5',
        height: '$3'
      },
      '2': _defineProperty({
        width: '$7',
        height: '$5'
      }, "& ".concat(StyledThumb), {
        width: 21,
        height: 21,
        transform: 'translateX(2px)',
        '&[data-state="checked"]': {
          transform: 'translateX(22px)'
        }
      })
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var Switch = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledSwitch, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(StyledThumb, null));
});

var _styled;
var DEFAULT_TAG$3 = 'table';
var Caption = styled('caption', {
  textAlign: 'start',
  marginBottom: '$5'
});
var Tbody = styled('tbody', {
  width: '100%'
});
var Tfoot = styled('tfoot', {});
var Tr = styled('tr', {});
var Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$2',
  py: '$2',
  borderBottom: '1px solid $gray4',
  variants: {
    align: {
      start: {
        textAlign: 'start'
      },
      center: {
        textAlign: 'center'
      },
      end: {
        textAlign: 'end'
      }
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4'
      },
      dashed: {
        borderBottom: '1px dashed $gray8'
      }
    }
  },
  defaultVariants: {
    align: 'start',
    border: 'solid'
  }
});
var Td = styled('td', {
  py: '$2',
  borderBottom: '1px solid $gray4',
  fontSize: '$2',
  variants: {
    align: {
      start: {
        textAlign: 'start'
      },
      center: {
        textAlign: 'center'
      },
      end: {
        textAlign: 'end'
      }
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4'
      },
      dashed: {
        borderBottom: '1px dashed $gray8'
      }
    }
  },
  defaultVariants: {
    align: 'start',
    border: 'solid'
  }
});
var Thead = styled('thead', (_styled = {}, _defineProperty(_styled, "& ".concat(Th), {
  fontSize: '$1',
  color: '$gray11'
}), _defineProperty(_styled, "& ".concat(Td), {
  fontSize: '$1',
  color: '$gray11'
}), _styled));
var StyledTable = styled(DEFAULT_TAG$3, {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  variants: {
    striped: {
      "true": _defineProperty({}, "& ".concat(Tbody), _defineProperty({}, "& ".concat(Tr), {
        '&:nth-child(odd)': {
          bc: '$gray2'
        }
      }))
    }
  }
});
var Table = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledTable, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

Table.toString = function () {
  return ".".concat(StyledTable.className);
};

var DEFAULT_TAG$2 = 'a';
var StyledTabLink = styled(DEFAULT_TAG$2, {
  position: 'relative',
  flexShrink: 0,
  height: '$6',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$3',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  textDecoration: 'none',
  '@hover': {
    '&:hover': {
      color: '$hiContrast'
    }
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
  },
  variants: {
    active: {
      "true": {
        color: '$hiContrast',
        cursor: 'default',
        '&::after': {
          position: 'absolute',
          content: '""',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 2,
          backgroundColor: '$blue9'
        }
      }
    }
  }
});
var TabLink = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledTabLink, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column'
  }
});
var TabsTab = styled(TabsPrimitive.Tab, {
  flexShrink: 0,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$2',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  zIndex: '10',
  '@hover': {
    '&:hover': {
      color: '$hiContrast'
    }
  },
  '&[data-state="active"]': {
    color: '$hiContrast',
    borderColor: '$slate6',
    borderBottomColor: 'transparent'
  },
  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',
    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent'
    }
  }
});
var StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8'
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6'
  }
});
var TabsList = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledTabsList, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  })), /*#__PURE__*/React.createElement(Separator, null));
});
var TabsPanel = styled(TabsPrimitive.Panel, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8'
  }
});

var DEFAULT_TAG$1 = 'textarea';
var StyledTextArea = styled(DEFAULT_TAG$1, {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '$1',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',
  minHeight: 80,
  resize: 'vertical',
  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    zIndex: '1'
  },
  '&::placeholder': {
    color: '$slate9'
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    resize: 'none',
    '&::placeholder': {
      color: '$slate7'
    }
  },
  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7'
    }
  },
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        fontSize: '$1',
        lineHeight: '16px',
        px: '$1'
      },
      '2': {
        borderRadius: '$1',
        fontSize: '$2',
        lineHeight: '20px',
        px: '$1'
      },
      '3': {
        borderRadius: '$2',
        fontSize: '$3',
        lineHeight: '23px',
        px: '$2'
      }
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8'
        }
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8'
        }
      }
    },
    cursor: {
      "default": {
        cursor: 'default',
        '&:focus': {
          cursor: 'text'
        }
      },
      text: {
        cursor: 'text'
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
});
var TextArea = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledTextArea, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var _excluded = ["children", "content", "open", "defaultOpen", "onOpenChange", "multiline"];
var Content = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',
  variants: {
    multiline: {
      "true": {
        maxWidth: 250,
        pb: 7
      }
    }
  }
});
function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      open = _ref.open,
      defaultOpen = _ref.defaultOpen,
      onOpenChange = _ref.onOpenChange,
      multiline = _ref.multiline,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TooltipPrimitive.Root, {
    open: open,
    defaultOpen: defaultOpen,
    onOpenChange: onOpenChange
  }, /*#__PURE__*/React.createElement(TooltipPrimitive.Trigger, {
    as: Slot
  }, children), /*#__PURE__*/React.createElement(Content, _objectSpread2(_objectSpread2({
    side: "top",
    align: "center",
    sideOffset: 5
  }, props), {}, {
    multiline: multiline
  }), /*#__PURE__*/React.createElement(Text, {
    size: "1",
    as: "p",
    css: {
      color: '$loContrast',
      lineHeight: multiline ? '20px' : undefined
    }
  }, content), /*#__PURE__*/React.createElement(Box, {
    css: {
      color: '$transparentExtreme'
    }
  }, /*#__PURE__*/React.createElement(TooltipPrimitive.Arrow, {
    offset: 5,
    width: 11,
    height: 5,
    style: {
      fill: 'currentColor'
    }
  }))));
}

var DEFAULT_TAG = 'div';
var StyledTreeItem = styled(DEFAULT_TAG, {
  // Reset
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  lineHeight: '1',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  '&:disabled': {
    pointerEvents: 'none'
  },
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  // Custom
  height: '29px',
  px: '$2',
  fontSize: '$1',
  color: '$hiContrast',
  variants: {
    variant: {
      gray: {
        backgroundColor: '$slate3',
        '&:hover': {
          backgroundColor: '$slate4'
        },
        '&:active': {
          backgroundColor: '$slate5'
        }
      },
      red: {
        backgroundColor: '$red3',
        '&:hover': {
          backgroundColor: '$red4'
        },
        '&:active': {
          backgroundColor: '$red5'
        }
      },
      crimson: {
        backgroundColor: '$crimson3',
        '&:hover': {
          backgroundColor: '$crimson4'
        },
        '&:active': {
          backgroundColor: '$crimson5'
        }
      },
      pink: {
        backgroundColor: '$pink3',
        '&:hover': {
          backgroundColor: '$pink4'
        },
        '&:active': {
          backgroundColor: '$pink5'
        }
      },
      purple: {
        backgroundColor: '$purple3',
        '&:hover': {
          backgroundColor: '$purple4'
        },
        '&:active': {
          backgroundColor: '$purple5'
        }
      },
      violet: {
        backgroundColor: '$violet3',
        '&:hover': {
          backgroundColor: '$violet4'
        },
        '&:active': {
          backgroundColor: '$violet5'
        }
      },
      indigo: {
        backgroundColor: '$indigo3',
        '&:hover': {
          backgroundColor: '$indigo4'
        },
        '&:active': {
          backgroundColor: '$indigo5'
        }
      },
      blue: {
        backgroundColor: '$blue3',
        '&:hover': {
          backgroundColor: '$blue4'
        },
        '&:active': {
          backgroundColor: '$blue5'
        }
      },
      cyan: {
        backgroundColor: '$cyan3',
        '&:hover': {
          backgroundColor: '$cyan4'
        },
        '&:active': {
          backgroundColor: '$cyan5'
        }
      },
      teal: {
        backgroundColor: '$teal3',
        '&:hover': {
          backgroundColor: '$teal4'
        },
        '&:active': {
          backgroundColor: '$teal5'
        }
      },
      green: {
        backgroundColor: '$green3',
        '&:hover': {
          backgroundColor: '$green4'
        },
        '&:active': {
          backgroundColor: '$green5'
        }
      },
      lime: {
        backgroundColor: '$lime3',
        '&:hover': {
          backgroundColor: '$lime4'
        },
        '&:active': {
          backgroundColor: '$lime5'
        }
      },
      yellow: {
        backgroundColor: '$yellow3',
        '&:hover': {
          backgroundColor: '$yellow4'
        },
        '&:active': {
          backgroundColor: '$yellow5'
        }
      },
      amber: {
        backgroundColor: '$amber3',
        '&:hover': {
          backgroundColor: '$amber4'
        },
        '&:active': {
          backgroundColor: '$amber5'
        }
      },
      orange: {
        backgroundColor: '$orange3',
        '&:hover': {
          backgroundColor: '$orange4'
        },
        '&:active': {
          backgroundColor: '$orange5'
        }
      },
      gold: {
        backgroundColor: '$gold3',
        '&:hover': {
          backgroundColor: '$gold4'
        },
        '&:active': {
          backgroundColor: '$gold5'
        }
      },
      brown: {
        backgroundColor: '$brown3',
        '&:hover': {
          backgroundColor: '$brown4'
        },
        '&:active': {
          backgroundColor: '$brown5'
        }
      },
      bronze: {
        backgroundColor: '$bronze3',
        '&:hover': {
          backgroundColor: '$bronze4'
        },
        '&:active': {
          backgroundColor: '$bronze5'
        }
      }
    }
  }
});
var TreeItem = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  return /*#__PURE__*/React.createElement(StyledTreeItem, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: forwardedRef
  }));
});

var StyledFlex = styled(Flex, {
  alignItems: 'center',
  backgroundColor: '$blue9',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
  justifyContent: 'center',
  width: '$3',
  height: '$3'
});
function VerifiedBadge(props) {
  return /*#__PURE__*/React.createElement(StyledFlex, _objectSpread2({}, props), /*#__PURE__*/React.createElement(CheckIcon, null));
}

export { Accordion, AccordionButton, AccordionItem, AccordionPanel, Alert, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, Avatar, AvatarGroup, AvatarNestedItem, Badge, Banner, Box, Button, Caption, Card, Checkbox, Code, Container, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuTrigger, ControlGroup, DesignSystemProvider, Dialog, DialogClose, DialogContent, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger, Flex, Grid, Heading, IconButton, Image, Kbd, Link, Menu, MenuCheckboxItem, MenuGroup, MenuItem, MenuLabel, MenuRadioGroup, MenuRadioItem, MenuSeparator, Overlay, Panel, Paragraph, Popover, PopoverClose, PopoverContent, PopoverTrigger, ProgressBar, Radio, RadioCard, RadioCardGroup, RadioGroup, Section, Select, Separator, Sheet, SheetClose, SheetContent, SheetTrigger, SimpleToggle, Skeleton, Slider, Status, Sub, Sup, Switch, TabLink, Table, Tabs, TabsList, TabsPanel, TabsTab, Tbody, Td, Text, TextArea, TextField, Tfoot, Th, Thead, Tooltip, Tr, TreeItem, VerifiedBadge, css, darkTheme, getCssString, global, keyframes, styled, theme };
