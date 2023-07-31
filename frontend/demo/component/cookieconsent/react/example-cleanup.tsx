import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    const dismissButtonSearch = setInterval(() => {
      const button = document.querySelector('.cc-dismiss');

      if (button) {
        button.addEventListener('click', () => {
          setTimeout(() => {
            document.cookie = `cookieconsent_status=; Path=/; expires=${new Date(1970, 1, 1)}`;
          }, 500);
        });

        clearInterval(dismissButtonSearch);
      }
    }, 500);
  }, []);

  return null;
}

export default reactExample(Example);
