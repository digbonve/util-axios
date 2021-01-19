  /** 字体图标 */
import './index.css';
import '../../assets/fonts/iconfont.css';
import '../../assets/fonts/iconfont.js';

export default function () {
  const list = [];
  // Unicode
  const unicode = document.createElement('i');
  unicode.innerHTML = '&#xe639;&#xe80a;&#xe689;&#xe632;&#xe646;';
  unicode.classList.add('iconfont-unicode')
  list.push(unicode);
  // Font class
  const i = document.createElement('i');
  i.classList.add('iconfont');
  i.classList.add(['icon-rocket']);
  i.style.fontSize = '40px';
  list.push(i);
  
  return list;
}