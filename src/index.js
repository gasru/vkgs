/* exported VK */

/**
 *
 */
class VK {
  constructor() {
    this.serviceKey = '';
    this.v = '5.126';
  }
  call(method, params) {
    const getPayload = (body) => {
      return Object.keys(body)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
        )
        .join('&');
    };

    const payload = getPayload(
      Object.assign(
        {},
        {
          access_token: this.serviceKey,
          v: this.v,
        },
        params
      )
    );

    return UrlFetchApp.fetch(`https://api.vk.com/method/${method}`, {
      method: 'post',
      payload: payload,
      muteHttpExceptions: true,
    });
  }
}
