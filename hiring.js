export function createHiringBubble() {
  if (document.querySelector("#hiring-bubble") != null) {
    return;
  }

  const hiringBubbleStyle = document.createElement("style");
  hiringBubbleStyle.id = "hiring-bubble-style";
  hiringBubbleStyle.innerHTML = `
        /*
            #fedb4b; yellow
            #f1b71c; yellow:hover
            #584774; purple
            #362d59; purple:hover
        */
  
        #hiring-bubble {
            transform: translatey(0px);
            animation: hiring-bubble-float 3s ease-in-out infinite;
            position: fixed;
            bottom: 30px;
            left: 10px;
            z-index: 1020;
        }
  
        #hiring-bubble * {
            margin: 0;
            background-color: #f6f6f8;
            text-align: center;
            text-transform: uppercase;
            font: 12px "Rubik", "Avenir Next", "Helvetica Neue", sans-serif;
            font-weight: bold;
            color: #584774;
            text-decoration: none;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 5px 5px #584774;
            white-space: nowrap;
            cursor: pointer;
            display: none;
        }
  
        #hiring-bubble *:after {
            transform: translatey(0px);
            content: "";
            width: 25px;
            height: 12px;
            border-radius: 12px;
            background-color: #f6f6f8;
            position: absolute;
            display: block;
            bottom: -20px;
            left: 0;
            box-shadow: 5px 5px #584774;
        }
  
        #hiring-bubble *:hover {
            color: #f6f6f8;
            background-color: #584774;
            box-shadow: 5px 5px #362d59;
        }

        #hiring-bubble *:hover:after {
            background-color: #584774;
            box-shadow: 5px 5px #362d59;
        }
  
        #hiring-bubble *:first-child {
            display: inline-block;
        }
  
        @keyframes hiring-bubble-float {
            0% {
                transform: translatey(0px);
            }
            50% {
                transform: translatey(-10px);
            }
            100% {
                transform: translatey(0px);
            }
        }
    `;

  const hiringBubble = document.createElement("div");
  hiringBubble.id = "hiring-bubble";
  hiringBubble.innerHTML = `
        <p>psst! click me.</p>
        <p>want to know something?</p>
        <p>you are awesome!</p>
        <p>and you know what?</p>
        <p>we are hiring!</p>
        <p>just click here.</p>
        <p>you are one click away.</p>
        <a href="https://sentry.io/careers/" target="_blank"
            >ok, last time, promise!</a
        >
    `;

  hiringBubble.addEventListener("click", (e) => {
    e.target.remove();
    if (hiringBubble.childElementCount === 0) {
      hiringBubble.remove();
      hiringBubbleStyle.remove();
    }
  });

  document.body.appendChild(hiringBubble);
  document.body.appendChild(hiringBubbleStyle);
}
