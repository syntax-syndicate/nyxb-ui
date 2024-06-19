import type { Registry } from '~/registry/schema'

export const ui: Registry = [
   {
      name: 'accordion',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-accordion'],
      files: ['ui/accordion.tsx'],
   },
   {
      name: 'alert',
      type: 'components:ui',
      files: ['ui/alert.tsx'],
   },
   {
      name: 'alert-dialog',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-alert-dialog'],
      registryDependencies: ['button'],
      files: ['ui/alert-dialog.tsx'],
   },
   {
      name: 'aspect-ratio',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-aspect-ratio'],
      files: ['ui/aspect-ratio.tsx'],
   },
   {
      name: 'avatar',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-avatar'],
      files: ['ui/avatar.tsx'],
   },
   {
      name: 'badge',
      type: 'components:ui',
      files: ['ui/badge.tsx'],
   },
   {
      name: 'breadcrumb',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: ['ui/breadcrumb.tsx'],
   },
   {
      name: 'button',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-slot'],
      files: ['ui/button.tsx'],
   },
   {
      name: 'calendar',
      type: 'components:ui',
      dependencies: ['react-day-picker', 'date-fns'],
      registryDependencies: ['button'],
      files: ['ui/calendar.tsx'],
   },
   {
      name: 'card',
      type: 'components:ui',
      files: ['ui/card.tsx'],
   },
   {
      name: 'carousel',
      type: 'components:ui',
      files: ['ui/carousel.tsx'],
      registryDependencies: ['button'],
      dependencies: ['embla-carousel-react'],
   },
   {
      name: 'checkbox',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-checkbox'],
      files: ['ui/checkbox.tsx'],
   },
   {
      name: 'collapsible',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-collapsible'],
      files: ['ui/collapsible.tsx'],
   },
   {
      name: 'command',
      type: 'components:ui',
      dependencies: ['cmdk'],
      registryDependencies: ['dialog'],
      files: ['ui/command.tsx'],
   },
   {
      name: 'context-menu',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-context-menu'],
      files: ['ui/context-menu.tsx'],
   },
   {
      name: 'dialog',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: ['ui/dialog.tsx'],
   },
   {
      name: 'drawer',
      type: 'components:ui',
      dependencies: ['vaul', '@radix-ui/react-dialog'],
      files: ['ui/drawer.tsx'],
   },
   {
      name: 'dropdown-menu',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-dropdown-menu'],
      files: ['ui/dropdown-menu.tsx'],
   },
   {
      name: 'form',
      type: 'components:ui',
      dependencies: [
         '@radix-ui/react-label',
         '@radix-ui/react-slot',
         '@hookform/resolvers',
         'zod',
         'react-hook-form',
      ],
      registryDependencies: ['button', 'label'],
      files: ['ui/form.tsx'],
   },
   {
      name: 'hover-card',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-hover-card'],
      files: ['ui/hover-card.tsx'],
   },
   {
      name: 'input',
      type: 'components:ui',
      files: ['ui/input.tsx'],
   },
   {
      name: 'input-otp',
      type: 'components:ui',
      dependencies: ['input-otp'],
      files: ['ui/input-otp.tsx'],
   },
   {
      name: 'label',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-label'],
      files: ['ui/label.tsx'],
   },
   {
      name: 'menubar',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-menubar'],
      files: ['ui/menubar.tsx'],
   },
   {
      name: 'navigation-menu',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-navigation-menu'],
      files: ['ui/navigation-menu.tsx'],
   },
   {
      name: 'pagination',
      type: 'components:ui',
      registryDependencies: ['button'],
      files: ['ui/pagination.tsx'],
   },
   {
      name: 'popover',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-popover'],
      files: ['ui/popover.tsx'],
   },
   {
      name: 'progress',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-progress'],
      files: ['ui/progress.tsx'],
   },
   {
      name: 'radio-group',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-radio-group'],
      files: ['ui/radio-group.tsx'],
   },
   {
      name: 'resizable',
      type: 'components:ui',
      dependencies: ['react-resizable-panels'],
      files: ['ui/resizable.tsx'],
   },
   {
      name: 'scroll-area',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-scroll-area'],
      files: ['ui/scroll-area.tsx'],
   },
   {
      name: 'select',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-select'],
      files: ['ui/select.tsx'],
   },
   {
      name: 'separator',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-separator'],
      files: ['ui/separator.tsx'],
   },
   {
      name: 'sheet',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-dialog'],
      files: ['ui/sheet.tsx'],
   },
   {
      name: 'skeleton',
      type: 'components:ui',
      files: ['ui/skeleton.tsx'],
   },
   {
      name: 'slider',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-slider'],
      files: ['ui/slider.tsx'],
   },
   {
      name: 'sonner',
      type: 'components:ui',
      dependencies: ['sonner', 'next-themes'],
      files: ['ui/sonner.tsx'],
   },
   {
      name: 'switch',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-switch'],
      files: ['ui/switch.tsx'],
   },
   {
      name: 'table',
      type: 'components:ui',
      files: ['ui/table.tsx'],
   },
   {
      name: 'tabs',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-tabs'],
      files: ['ui/tabs.tsx'],
   },
   {
      name: 'textarea',
      type: 'components:ui',
      files: ['ui/textarea.tsx'],
   },
   {
      name: 'toast',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-toast'],
      files: ['ui/toast.tsx', 'ui/use-toast.ts', 'ui/toaster.tsx'],
   },
   {
      name: 'toggle',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-toggle'],
      files: ['ui/toggle.tsx'],
   },
   {
      name: 'toggle-group',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-toggle-group'],
      registryDependencies: ['toggle'],
      files: ['ui/toggle-group.tsx'],
   },
   {
      name: 'tooltip',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-tooltip'],
      files: ['ui/tooltip.tsx'],
   },
   /* new */
   {
      name: 'magic-card',
      type: 'components:ui',
      files: ['ui/magic-card.tsx'],
   },
   {
      name: 'neon-gradient-card',
      type: 'components:ui',
      files: ['ui/neon-gradient-card.tsx'],
   },
   {
      name: 'linear-gradient',
      type: 'components:ui',
      files: ['ui/linear-gradient.tsx'],
   },
   {
      name: 'radial-gradient',
      type: 'components:ui',
      files: ['ui/radial-gradient.tsx'],
   },
   {
      name: 'meteors',
      type: 'components:ui',
      files: ['ui/meteors.tsx'],
   },
   {
      name: 'grid-pattern',
      type: 'components:ui',
      files: ['ui/grid-pattern.tsx'],
   },
   {
      name: 'dot-pattern',
      type: 'components:ui',
      files: ['ui/dot-pattern.tsx'],
   },
   {
      name: 'marquee',
      type: 'components:ui',
      files: ['ui/marquee.tsx'],
   },
   {
      name: 'globe',
      type: 'components:ui',
      files: ['ui/globe.tsx'],
   },
   {
      name: 'shimmer-button',
      type: 'components:ui',
      files: ['ui/shimmer-button.tsx'],
   },
   {
      name: 'hero-video',
      type: 'components:ui',
      files: ['ui/hero-video.tsx'],
   },
   {
      name: 'tweet-card',
      type: 'components:ui',
      files: ['ui/tweet-card.tsx'],
   },
   {
      name: 'client-tweet-card',
      type: 'components:ui',
      files: ['ui/client-tweet-card.tsx'],
   },
   {
      name: 'bento-grid',
      type: 'components:ui',
      dependencies: ['@radix-ui/react-icons'],
      files: ['ui/bento-grid.tsx'],
   },
   {
      name: 'particles',
      type: 'components:ui',
      files: ['ui/particles.tsx'],
   },
   {
      name: 'number-ticker',
      type: 'components:ui',
      files: ['ui/number-ticker.tsx'],
   },
   {
      name: 'ripple',
      type: 'components:ui',
      files: ['ui/ripple.tsx'],
   },
   {
      name: 'retro-grid',
      type: 'components:ui',
      files: ['ui/retro-grid.tsx'],
   },
   {
      name: 'animated-list',
      type: 'components:ui',
      files: ['ui/animated-list.tsx'],
   },
   {
      name: 'animated-lines',
      type: 'components:ui',
      files: ['ui/animated-lines.tsx'],
   },
   {
      name: 'animated-shiny-text',
      type: 'components:ui',
      files: ['ui/animated-shiny-text.tsx'],
   },
   {
      name: 'animated-grid-pattern',
      type: 'components:ui',
      files: ['ui/animated-grid-pattern.tsx'],
   },
   {
      name: 'border-beam',
      type: 'components:ui',
      files: ['ui/border-beam.tsx'],
   },
   {
      name: 'animated-beam',
      type: 'components:ui',
      files: ['ui/animated-beam.tsx'],
   },
   {
      name: 'text-reveal',
      type: 'components:ui',
      files: ['ui/text-reveal.tsx'],
   },
   {
      name: 'animated-gradient-text',
      type: 'components:ui',
      files: ['ui/animated-gradient-text.tsx'],
   },
   {
      name: 'orbiting-circles',
      type: 'components:ui',
      files: ['ui/orbiting-circles.tsx'],
   },
   {
      name: 'dock',
      type: 'components:ui',
      files: ['ui/dock.tsx'],
   },
   {
      name: 'word-rotate',
      type: 'components:ui',
      files: ['ui/word-rotate.tsx'],
   },
   {
      name: 'avatar-circles',
      type: 'components:ui',
      files: ['ui/avatar-circles.tsx'],
   },
   {
      name: 'word-pull-up',
      type: 'components:ui',
      files: ['ui/word-pull-up.tsx'],
   },
   {
      name: 'typing-animation',
      type: 'components:ui',
      files: ['ui/typing-animation.tsx'],
   },
   {
      name: 'wavy-text',
      type: 'components:ui',
      files: ['ui/wavy-text.tsx'],
   },
   {
      name: 'blur-in',
      type: 'components:ui',
      files: ['ui/blur-in.tsx'],
   },
   {
      name: 'separate-away',
      type: 'components:ui',
      files: ['ui/separate-away.tsx'],
   },
   {
      name: 'letter-pullup',
      type: 'components:ui',
      files: ['ui/letter-pullup.tsx'],
   },
   {
      name: 'sparkles-text',
      type: 'components:ui',
      files: ['ui/sparkles-text.tsx'],
   },
   {
      name: 'flip-text',
      type: 'components:ui',
      files: ['ui/flip-text.tsx'],
   },
   {
      name: 'icon-cloud',
      type: 'components:ui',
      files: ['ui/icon-cloud.tsx'],
   },
   {
      name: 'wavy-dot-pattern',
      type: 'components:ui',
      files: ['ui/wavy-dot-pattern.tsx'],
   },
   {
      name: 'gradual-spacing',
      type: 'components:ui',
      files: ['ui/gradual-spacing.tsx'],
   },
   {
      name: 'word-fade-in',
      type: 'components:ui',
      files: ['ui/word-fade-in.tsx'],
   },
   {
      name: 'scroll-based-velocity',
      type: 'components:ui',
      files: ['ui/scroll-based-velocity.tsx'],
   },
   {
      name: 'fade-text',
      type: 'components:ui',
      files: ['ui/fade-text.tsx'],
   },
   {
      name: 'shiny-button',
      type: 'components:ui',
      files: ['ui/shiny-button.tsx'],
   },
   {
      name: 'box-reveal',
      type: 'components:ui',
      files: ['ui/box-reveal.tsx'],
   },
   {
      name: 'shine-border',
      type: 'components:ui',
      files: ['ui/shine-border.tsx'],
   },
   {
      name: 'gauge-circle',
      type: 'components:ui',
      files: ['ui/gauge-circle.tsx'],
   },
   {
      name: 'confetti',
      type: 'components:ui',
      files: ['ui/confetti.tsx'],
   },
   {
      name: 'animated-subscribe-button',
      type: 'components:ui',
      files: ['ui/animated-subscribe-button.tsx'],
   },
   {
      name: 'cool-mode',
      type: 'components:ui',
      files: ['ui/cool-mode.tsx'],
   },
]