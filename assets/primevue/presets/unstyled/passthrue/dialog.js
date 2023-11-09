export default {
  mask: ({ props }) => ({
    class: ['transition duration-200', { 'bg-black/40': props.modal }],
  }),
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
        }
      : (props.position === 'bottom')
          ? ({
              enterFromClass: 'opacity-0 scale-75 translate-y-full',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0',
            })
          : (props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft')
              ? ({
                  enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0',
                })
              : (props.position === 'right' || props.position === 'topright' || props.position === 'bottomright')
                  ? ({
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                    })
                  : ({
                      enterFromClass: 'opacity-0 translate-y-20',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 translate-y-20',
                    })
  },
}
