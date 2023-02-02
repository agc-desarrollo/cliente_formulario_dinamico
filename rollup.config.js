import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/library.js',
      }
    ],
    plugins: [
      terser(), vue(), peerDepsExternal()
    ],
    external: [ 'vue','primevue/fileupload', 'primeicons/primeicons.css', 'primevue/resources/primevue.min.css', 'primevue/resources/themes/nova/theme.css', 'primevue/inputtext', 'primevue/dropdown', 'primevue/textarea', 'primevue/config', 'primevue/radiobutton', 'primevue/checkbox', 'primevue/calendar', 'primevue/button', 'primevue/image', 'primevue/colorpicker', 'primevue/slider' ,'primevue', 'primevue/tabpanel', 'primevue/tabview', 'primevue/tooltip']
  }
]