import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
  const [isDark, setIsDark] = useLocalStorage('cookora_theme', false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return [isDark, setIsDark];
}

export default useDarkMode;