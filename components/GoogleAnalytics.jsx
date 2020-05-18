const GoogleAnalytics = () => {
    const script = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-166954166-1');
  `
  
    return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-166954166-1"></script>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </>
    )
  }
  
  export default GoogleAnalytics;