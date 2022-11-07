## romoco

https://starhoshi.github.io/romoco

- romoco makes App Store Connect promo codes available for cameras.
- Inspired by https://github.com/nkmrh/icccig, also use icccig images. Thank you!

![romoco](https://user-images.githubusercontent.com/3666836/200202102-9401e10c-6a51-494c-bde8-898cb5a7eacd.gif)

## Promo codes should not be leaked

Since romoco is hosted on GitHub Pages, we cannot get your promo codes.  
The analysis functionality of GitHub Pages is simple and does not allow us to know query parameters. But, the developers are not responsible for any damages.

If you are unsure, please self-host your code in the [gh-pages branch](https://github.com/starhoshi/romoco/tree/gh-pages).

## Development

romoco uses the Static Site Generation feature of Nextjs.

```bash
$ npm install
$ npm run dev
```

### export

Static files are generated in the `out` directory.

```bash
$ npm run build
```
