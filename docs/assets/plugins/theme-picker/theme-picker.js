(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push((hook, vm) => {
    hook.mounted(function () {
      function getTheme() {
        return localStorage.getItem('theme') || 'auto';
      }

      function isDark() {
        if (theme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else {
          return theme === 'dark';
        }
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        theme = newTheme;
        localStorage.setItem('theme', theme);

        // Update the UI
        [...menu.querySelectorAll('klik-menu-item')].map(item => (item.checked = item.getAttribute('value') === theme));
        menuIcon.name = isDark() ? 'moon' : 'sun';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('klik-theme-dark', isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement('klik-dropdown');
      dropdown.classList.add('theme-picker');
      dropdown.innerHTML = `
        <klik-button size="small" pill slot="trigger" caret>
          <klik-icon name="sun" label="Select Theme"></klik-icon>
        </klik-button>
        <klik-menu>
          <klik-menu-label>Toggle <kbd>\\</kbd></klik-menu-label>
          <klik-menu-item value="light">Light</klik-menu-item>
          <klik-menu-item value="dark">Dark</klik-menu-item>
          <klik-divider></klik-divider>
          <klik-menu-item value="auto">Auto</klik-menu-item>
        </klik-menu>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', dropdown);

      // Listen for selections
      const menu = dropdown.querySelector('klik-menu');
      const menuIcon = dropdown.querySelector('klik-icon');
      menu.addEventListener('klik-select', event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addListener(event => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
          show();
        }
      });

      // Set the intial theme and sync the UI
      setTheme(theme);
    });
  });
})();
