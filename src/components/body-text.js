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
      href0: 'https://www.google.com/maps/place/Belgrade/@44.8180058,20.3672225,11.3z/data=!4m5!3m4!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!8m2!3d44.786568!4d20.4489216'
    },
    text1: '.'
  },
  paragraph1: {
    text0: 'I build web applications using popular technologies like ',
    link0: {
      text0: 'Node.js ',
      href0: 'https://nodejs.org/en/about/',
    },
    text1: 'and ',
    link1: {
      text0: 'Ruby on Rails',
      href0: 'https://rubyonrails.org/',
    },
    text2: '.'
  },
  paragraph2: {
    text0: 'Can even create a SPA application using ',
    link0: {
      text0: 'React',
      href0: 'https://reactjs.org/',
    },
    text1: '/',
    link1: {
      text0: 'Angular',
      href0: 'https://angular.io/',
    },
    text2: '/',
    link2: {
      text0: 'Ember',
      href0: 'https://emberjs.com/',
    },
    text3: '/',
    link3: {
      text0: 'Vue',
      href0: 'https://vuejs.org/',
    },
    text4: '.',
  },
  paragraph3: {
    text0: 'If you have any ideas or problems I am willing to hear.'
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
        node = document.createElement("h2");
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
        node.setAttribute('target', '_blank')
        animArr.push(textAnimation.bind(null, parent, node))
      } else if (key === 'text' && parent) {
        animArr.push(textAnimation.bind(null, parent, value))
      } else if (key === 'span') {
        node = document.createElement("span");
        node.classList.add('link')
        animArr.push(textAnimation.bind(null, document.getElementsByClassName('paragraph3')[0], node)) 
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
