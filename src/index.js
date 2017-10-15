import {scanButtonListener, setAllListeners} from './modules/ExtensionEvents';
import {layouts, show} from './modules/Extension';

const listeners = [].concat(scanButtonListener());

setAllListeners(listeners);