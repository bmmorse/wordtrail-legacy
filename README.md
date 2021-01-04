# wordtrail.info documentation

## App.js

App.js is the top level structure of the application. App.js accomplishes several things:

1. sets configuration settings for the App (enabling test mode for our API)
2. imports global CSS styles and functions
3. acts as a wrapper for <Routes>, where we start breaking down the App

```javascript
<>
  <Globals />
  <div className='App'>
    <Routes config={this.config} />
  </div>
</>
```

## <Globals />

Globals provides the top level CSS styling and React's Scroll To Top function

```javascript
<>
  <ScrollToTop />
  <GlobalCSS />
</>
```

## <Routes />

Routes is the second top level wrapper for the application
