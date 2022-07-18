import { startSwiper } from './slider.js'
import '../scss/style.scss'
import {initLessMoreButton} from './showMore'
import {buttonListenerOpenMenus} from './openMobileMenus.js'


initLessMoreButton('description', 8);
initLessMoreButton('repair-different-techniques', 3);
startSwiper()
buttonListenerOpenMenus();