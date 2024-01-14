# Deploy to GitHub Pages

## Install Dependencies
```bash
npm install -g angular-cli-ghpages
```

## Deploy

```bash
git checkout -b gh-pages
```

```bash
ng build --base-href https://luckysetiawan.github.io/interest-calculator/
```

```bash
ngh --dir=dist/interest-calculator/browser
```