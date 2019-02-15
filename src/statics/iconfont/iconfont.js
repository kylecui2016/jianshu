import { createGlobalStyle } from 'styled-components';
 
export const IconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1550132875418'); /* IE9 */
    src: url('./iconfont.eot?t=1550132875418#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPAAAsAAAAAB9gAAANxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ4ATYCJAMQCwoABCAFhG0HSBvqBhEVnHfIfhzYzVYDeMqIQzg0mkoxNtj3IKC8qrrTs5dLln4JPFkvQrMn+CVPAgSYbU3HcH8YEWE6Zc+3nuV/5GdnGtZ5nEYphERI/jjca9OyQOYDymntzV3UBRhvDWjsBRJwgXxB/yrhden8nIDNEIBBoCiiqKSqIToKtZcARM9uXdqhRxSognSBjsAuY6JCzMCCLifKS8B05/fiIwnpILFoqAPrdi7uSN4bjzevtLG2sbS0EDC70wHiNNCAKKBAdM00tEfzAlE0jE9zRQrQ0ZHQVU3Km1c2G7GWItC1f3mgIREg7FBT7QFIoqAGbzwMRiBMgQwJ4SuwDiBVAaAjaRiwHRXn71kShfS013UP08l7RGPrXXHnTuNbtxrevt1o8t3cRnMnb17c/+7dJmFaykPu3HEyGts3NHqYzZrPCzSWeDdtd9icDIYwqo1JV8S4Jk3GOQtkNdqzgbEbzcknhWjSpEtsk3Fo0HjeHBq6d2y0IMg6fM0FX88Wi/y6eDVZvHn/3uBGB29Hpa7IsFotQZ0y5MRduyaaXAmlnBgMzugUVNdqXeCTGHBshuwxY0YPkskZXgZ9FtWdS6+HFV3v5GhThXe659RpJAvad8u5q/7kDBh4Oi1WWPJj+oQ37ubQyqzMy3jVusnAiz4ef3yDPwUH8s9+WV9pnZzUXEgxoTbO4cVuPm+fTtxd/nBxv33+I7y8Tc/dvu/KE5uv/BFvPuNrlXjULqYvALa/2hjNwdu06tA4rZk26vn9Dc9aJw9u45T1TTcVAPcml06GzTZOUU3IQ2BWZj4tZsUc9WWrSqXeHIPxMyriQr2QgIEBPKMIuHrShckDgU6gS0yApAYBoKEThFTYKLBgkgR26OSCQaTS6SZu+qMhVE0oEOHNQHD2AcmRFTTOvkiF/YGFpz/YcW4Phsa5LWgKKYhCQsloQL0g6Gm0upqFm35Ed+slhdkO4Yq0BjdUeRkPdzgidTFkvbua2YKlaYCWbYd9P8FMU0TNuWeem6KwWW/K9TRshEIESQwZQHkBgTYZWaswE4nvHyHnpidRQdYP9RUiq1A/qOTKCshOMFbKOpVrVndOjTELWGQyAC3ToV4LTMCc3S5CGsv5Br5Zo6B8tqogH140nOEiwKAuopJCE0pYMJajMzIGy77Ll4dDaJFpjzqFcbMBAAAA') format('woff2'),
    url('./iconfont.woff?t=1550132875418') format('woff'),
    url('./iconfont.ttf?t=1550132875418') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1550132875418#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    .icon-fangdajing:before {
    content: "\e6e4";
    }

    .icon-Aa:before {
    content: "\e636";
    }

    .icon-icon-checkin:before {
    content: "\e615";
    }
`