# VKGS

This is an API of VK for Google Apps Script

## Usage

### As a library

Enter the project key `1K3zWwRp-8Pbne2ytgV8PUByfYHk-W4Yzz3PfPIltwpHVfE9eADwxLpUo` in the "Find a Library"

Init an instance

```js
const vk = vkgs.getInstance();
```

### As a module

There is no a finally compiled module yet. Try `index.js`.

## Samples

```js
/**
 * Prints to console messages from a specific wall
 */
function getWallPosts() {
  const vk = new VK();
  vk.serviceKey = 'ABC123';
  console.log(
    vk
      .call('wall.get', {
        owner_id: -41978868,
      })
      .getContentText()
  );
}
```
