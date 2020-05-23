import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function (_responseObject) {
  const responseObject = { ..._responseObject };
  responseObject.status = `last updated ${dayjs(responseObject.updated_at).fromNow()}`;

  delete responseObject.id;
  delete responseObject.updated_at;

  return responseObject;
}
