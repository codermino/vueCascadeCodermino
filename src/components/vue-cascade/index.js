import vueCascade from './index.vue';
//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
vueCascade.install = Vue => Vue.component(vueCascade.name, vueCascade);
export default vueCascade;
