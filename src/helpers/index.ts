export const capitalizeText = (text: string, language: string): string => {
  if (language.toLowerCase() === 'es') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else if (language.toLowerCase() === 'en') {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    return 'Idioma no soportado';
  }
};
