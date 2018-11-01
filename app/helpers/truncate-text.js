import { helper } from '@ember/component/helper';

export function truncateText(params) {
  let message = params[0].substring(0, params[1]);
  console.log(message);
  message += '...';
  return message;

}

export default helper(truncateText);
