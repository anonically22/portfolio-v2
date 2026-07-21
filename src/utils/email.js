export const getEmailLink = (email) => {
  if (typeof window === 'undefined') return `mailto:${email}`;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    return `mailto:${email}`;
  }
  
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
};
