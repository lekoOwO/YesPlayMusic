import axios from 'axios';

export async function taiwanese(lrc) {
  const resp = await axios.post(
    process.env?.VUE_APP_ZHCONVERT_API_URL ??
      'https://api.zhconvert.org/convert',
    {
      text: lrc,
      converter: 'Taiwan',
    }
  );
  return resp.data.data.text;
}
