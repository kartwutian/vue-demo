
import {Xscroll} from './components/xscroll';



window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

const install = function (Vue) {

  Vue.component(Xscroll.name,Xscroll)

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
