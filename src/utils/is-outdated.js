import duration from 'dayjs/plugin/duration';
import dayjs from 'dayjs';

dayjs.extend(duration);

export default function (timestamp, threshold = process.env.COVID_DATA_EXPIRES_IN_MINUTES) {
  return dayjs.duration(dayjs().diff(timestamp)).asMinutes() > threshold;
}
