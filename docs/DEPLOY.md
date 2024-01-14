# Deploy to GitHub Pages

## Install Dependencies
```bash
npm install -g angular-cli-ghpages
```

## Deploy

```bash
ng build --base-href https://luckysetiawan.github.io/interest-calculator/
```

```bash
ngh --dir=dist/interest-calculator/browser
```