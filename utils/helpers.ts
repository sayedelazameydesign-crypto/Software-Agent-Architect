export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ar-EG', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const clsx = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};