import React from "react"

export default class BodyText extends React.Component {
  componentDidMount() {
    typeText(textObj)
  }
  render() {
    return (
      <div className="body-text-container">
        <div id="body"></div>
      </div>
    )
  }
}

function textAnimation(node, txt) {
  return new Promise(res => {
    let i = 0;
    let speed = 20;
    if (txt.tagName === 'A' || txt.tagName === 'SPAN') {
      node.appendChild(txt)
      res()
    } else {
      (function typeWriter() {
        console.log(node)
        if (i < txt.length) {
          node.innerHTML += txt.charAt(i);
          i++
          setTimeout(typeWriter, speed);
        } else {
          res()
        }
      })()
    }
  })
}

let animArr = []

let textObj = {
  heading0: {
    text0: 'Hello, my name is Igor.',
  },
  paragraph0: {
    text0: 'I am a software developer living in ',
    link0: {
      text0: 'Belgrade, Serbia',
      href0: 'www.google.com'
    },
    text1: '.'
  },
  paragraph1: {
    text0: 'I build web applications using popular technologies like ',
    link0: {
      text0: 'Node.js ',
      href0: 'www.facebook.com',
    },
    text1: 'and ',
    link1: {
      text0: 'Ruby on Rails',
      href0: 'www.facebook.com',
    },
    text2: '.'
  },
  paragraph2: {
    text0: 'Can even create a SPA application using ',
    link0: {
      text0: 'React',
      href0: 'www.facebook.com',
    },
    text1: '/',
    link1: {
      text0: 'Angular',
      href0: 'www.facebook.com',
    },
    text2: '/',
    link2: {
      text0: 'Vue',
      href0: 'www.facebook.com',
    },
    text3: '. If you have any ideas or problems I am willing to hear.',
  },
  span0: {
    text0: ''
  }
}

function typeText(textObj) {
  function iterateObj(obj, parent) {
    for (let [key, value] of Object.entries(obj)) {
      let node = null; 
      let initialKey = key;
      key = key.slice(0, -1);
      if (key === 'heading') {
        node = document.createElement("h1");
        document.getElementById("body").appendChild(node);
        document.getElementById("body").appendChild(document.createElement("br"));
      } else if (key === 'paragraph') {
        node = document.createElement("p");
        node.classList.add(initialKey)
        document.getElementById("body").appendChild(node);
        document.getElementById("body").appendChild(document.createElement("br"));
      } else if (key === 'link') {
        node = document.createElement("a");
        node.setAttribute('href', value.href0)
        animArr.push(textAnimation.bind(null, parent, node))
      } else if (key === 'text' && parent) {
        animArr.push(textAnimation.bind(null, parent, value))
      } else if (key === 'span') {
        node = document.createElement("span");
        node.classList.add('link')
        animArr.push(textAnimation.bind(null, document.getElementsByClassName('paragraph2')[0], node)) 
      }
  
      if (typeof value === 'object') {
        iterateObj(value, node)
      }
    }
  }
  iterateObj(textObj)
  iteratePromises()
}

function iteratePromises() {
  let i = 0;
  async function iterating() {
    if (i < animArr.length) {
      await animArr[i]()
      i++;
      iterating()
    }
  }
  iterating()
}
