# Tagging JS

Put tags on image react component

## Example of usage:

[javascript](main.js)

## Docs:

```
<Tagging
  image={'./image.jpg'}
  width={'512px'}
  height={'512px'}
  tags={this.state.tags}
  onReplace={this.onReplace}
  onDelete={this.onDelete}
  maxLength={this.maxLength}
/>
```

image - image pasted in background-image: url()

tags is an array (2-way-binded) of objects in the following format:
```
[{
  id: 'id',
  title: 'title',
  x: 200,
  y: 200,
  index: 0
}]
```

maxLength - max length for characters in one tag

onReplace - function fired on finish moving tag

onDelete - function fired on delete tag

onReplace and onDelete are firing with following params: element, index, array

p.s. you probably want to update `tags` after onReplace and onDelete


## Development

#### dynamic

    yarn start

#### static

    yarn run build
