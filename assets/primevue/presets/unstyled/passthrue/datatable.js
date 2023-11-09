export const TRANSITIONS = {
  overlay: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
}

export default {
  root: ({ props }) => ({
    class: [
      'relative',
      {
        'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex',
      },
    ],
  }),
  loadingoverlay: {
    class: [
      'fixed w-full h-full t-0 l-0 bg-gray-100/40',
      'transition duration-200',
      'absolute flex items-center justify-center z-2',
      'dark:bg-gray-950/40', // Dark Mode
    ],
  },
  loadingicon: 'w-8 h-8',
  wrapper: ({ props }) => ({
    class: [
      {
        'relative': props.scrollable,
        'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex',
      },
    ],
  }),
  header: ({ props }) => ({
    class: [
      'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
      'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
      props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0',
    ],
  }),
  table: 'w-full border-spacing-0',
  thead: ({ context }) => ({
    class: [
      {
        'bg-slate-50 top-0 z-[1]': context.scrollable,
      },
    ],
  }),
  tbody: ({ instance, context }) => ({
    class: [
      {
        'sticky z-[1]': instance.frozenRow && context.scrollable,
      },
    ],
  }),
  tfoot: ({ context }) => ({
    class: [
      {
        'bg-slate-50 bottom-0 z-[1]': context.scrollable,
      },
    ],
  }),
  footer: {
    class: [
      'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
      'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
    ],
  },
  column: {
    headercell: ({ context, props }) => ({
      class: [
        'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
        'transition duration-200',
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
        context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
        context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
        {
          'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
          'border-x border-y': context?.showGridlines,
          'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable, // Resizable
        },
      ],
    }),
    headercontent: 'flex items-center',
    bodycell: ({ props, context }) => ({
      class: [
        'text-left border-0 border-b border-solid border-gray-300',
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
        'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
        {
          'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
          'border-x border-y': context?.showGridlines,
        },
      ],
    }),
    footercell: ({ context }) => ({
      class: [
        'text-left border-0 border-b border-solid border-gray-300 font-bold',
        'bg-slate-50 text-slate-700',
        'transition duration-200',
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
        'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
        {
          'border-x border-y': context?.showGridlines,
        },
      ],
    }),
    sorticon: ({ context }) => ({
      class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70'],
    }),
    sortbadge: {
      class: [
        'flex items-center justify-center align-middle',
        'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
        'text-blue-700 bg-blue-50',
        'dark:text-white/80 dark:bg-blue-400', // Dark Mode
      ],
    },
    columnfilter: 'inline-flex items-center ml-auto',
    filteroverlay: {
      class: [
        'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
        'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark Mode
      ],
    },
    filtermatchmodedropdown: {
      root: 'min-[0px]:flex mb-2',
    },
    filterrowitems: 'm-0 p-0 py-3 list-none ',
    filterrowitem: ({ context }) => ({
      class: ['m-0 py-3 px-5 bg-transparent', 'transition duration-200', context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent'],
    }),
    filteroperator: {
      class: [
        'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
        'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
      ],
    },
    filteroperatordropdown: {
      root: 'min-[0px]:flex',
    },
    filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
    filteraddrule: 'py-3 px-5',
    filteraddrulebutton: {
      root: 'justify-center w-full min-[0px]:text-sm',
      label: 'flex-auto grow-0',
      icon: 'mr-2',
    },
    filterremovebutton: {
      root: 'ml-2',
      label: 'grow-0',
    },
    filterbuttonbar: 'flex items-center justify-between p-5',
    filterclearbutton: {
      root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3',
    },
    filterapplybutton: {
      root: 'w-auto min-[0px]:text-sm px-4 py-3',
    },
    filtermenubutton: ({ context }) => ({
      class: [
        'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
        'w-8 h-8 rounded-[50%]',
        'transition duration-200',
        'hover:text-slate-700 hover:bg-gray-300/20', // Hover
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
        'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
        {
          'bg-blue-50 text-blue-700': context.active,
        },
      ],
    }),
    headerfilterclearbutton: ({ context }) => ({
      class: [
        'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative',
        'text-left bg-transparent m-0 p-0 border-none select-none ml-2',
        {
          invisible: !context.hidden,
        },
      ],
    }),
    columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
    rowreordericon: 'cursor-move',
    roweditorinitbutton: {
      class: [
        'inline-flex items-center justify-center overflow-hidden relative',
        'text-left cursor-pointer select-none',
        'w-8 h-8 border-0 rounded-[50%]',
        'transition duration-200',
        'text-slate-700 border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
        'hover:text-slate-700 hover:bg-gray-300/20', // Hover
        'dark:text-white/70', // Dark Mode
      ],
    },
    roweditorsavebutton: {
      class: [
        'inline-flex items-center justify-center overflow-hidden relative',
        'text-left cursor-pointer select-none',
        'w-8 h-8 border-0 rounded-[50%]',
        'transition duration-200',
        'text-slate-700 border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
        'hover:text-slate-700 hover:bg-gray-300/20', // Hover
        'dark:text-white/70', // Dark Mode
      ],
    },
    roweditorcancelbutton: {
      class: [
        'inline-flex items-center justify-center overflow-hidden relative',
        'text-left cursor-pointer select-none',
        'w-8 h-8 border-0 rounded-[50%]',
        'transition duration-200',
        'text-slate-700 border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
        'hover:text-slate-700 hover:bg-gray-300/20', // Hover
        'dark:text-white/70', // Dark Mode
      ],
    },
    radiobuttonwrapper: {
      class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6'],
    },
    radiobutton: ({ context }) => ({
      class: [
        'flex justify-center items-center',
        'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
        context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
        {
          'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
          'cursor-default opacity-60': context.disabled,
        },
      ],
    }),
    radiobuttonicon: ({ context }) => ({
      class: ['transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', { 'backface-hidden scale-10 invisible': context.checked === false, 'transform scale-100 visible': context.checked === true }],
    }),
    headercheckboxwrapper: {
      class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6'],
    },
    headercheckbox: ({ context }) => ({
      class: [
        'flex items-center justify-center',
        'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
        context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
        {
          'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
          'cursor-default opacity-60': context.disabled,
        },
      ],
    }),
    headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
    checkboxwrapper: {
      class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6'],
    },
    checkbox: ({ context }) => ({
      class: [
        'flex items-center justify-center',
        'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
        context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
        {
          'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
          'cursor-default opacity-60': context.disabled,
        },
      ],
    }),
    checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
    transition: TRANSITIONS.overlay,
  },
  bodyrow: ({ context }) => ({
    class: [
      context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
      context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
      'transition duration-200',
      'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
      'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
      {
        'cursor-pointer': context.selectable,
        'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected, // Hover
      },
    ],
  }),
  rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
  rowgroupheader: {
    class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200'],
  },
  rowgroupfooter: {
    class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200'],
  },
  rowgrouptoggler: {
    class: [
      'text-left m-0 p-0 cursor-pointer select-none',
      'inline-flex items-center justify-center overflow-hidden relative',
      'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
      'transition duration-200',
      'dark:text-white/70', // Dark Mode
    ],
  },
  rowgrouptogglericon: 'inline-block w-4 h-4',
  resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300',
}
