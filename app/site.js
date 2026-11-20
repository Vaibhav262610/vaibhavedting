export const email = 'vaibhavrajpoot2626@gmail.com';

const inquirySubject = 'Video editing project inquiry';
const inquiryBody = [
  'Hi Vaibhav,',
  '',
  'Channel or brand: ',
  'Video type: ',
  'Timeline: ',
  'Reference links: ',
  'Project details: ',
].join('\n');

export const inquiryHref = `mailto:${email}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(inquiryBody)}`;
