export const formatFullDate = date =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date)
