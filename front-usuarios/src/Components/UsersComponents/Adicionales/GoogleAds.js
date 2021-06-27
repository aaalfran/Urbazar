import React from 'react'
import AdSense from 'react-adsense'

export default class AdsenseWidget extends React.Component {
  componentDidMount () {
    const installGoogleAds = () => {
      const elem = document.createElement('script')
      elem.src =
            '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      elem.async = true
      elem.defer = true
      document.body.insertBefore(elem, document.body.firstChild)
    }
    installGoogleAds()
  }

  render () {
    return (
                <AdSense.Google className='adsbygoogle'
                    style={{ display: 'block' }}
                    client= 'ca-pub-9394378522027005'
                    slot='4186053521'
                    format= 'auto'
                    responsive="true"
                    adtest='on'

                />

    )
  }
}
/*
import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-9394378522027005'
          data-ad-slot='4186053521'
          data-ad-format='auto' />
    );
  }
}
*/
