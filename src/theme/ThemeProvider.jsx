import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ThemeProvider = ({
  children
}) => {
  const {
    pathname
  } = useRouter();

  return <>{children}</>;
};

export default ThemeProvider;