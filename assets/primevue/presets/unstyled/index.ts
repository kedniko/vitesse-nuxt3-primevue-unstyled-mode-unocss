import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'
import dialog from './passthrue/dialog.js'

export default usePassThrough(Tailwind, {
  dialog,
}, {
  mergeSections: true,
  mergeProps: false,
})
