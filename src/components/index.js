import vueCascade from './vue-cascade/index.js'
const components = [
    vueCascade
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    vueCascade
}
