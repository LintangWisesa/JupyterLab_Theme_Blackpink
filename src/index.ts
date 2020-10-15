import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for lin26/jupyterlab_blackpink
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@lin26/jupyterlab_blackpink:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@lin26/jupyterlab_blackpink/index.css';

    manager.register({
      name: 'JupyterLab Blackpink',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
