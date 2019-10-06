import './index.css'



window.onload = function(){
  const btn = document.querySelector('.talk')
  const rockoMsg = document.querySelector('.line')
  let count = 0
  let colors = ['linear-gradient(to right, #ff4b1f, #ff9068)','linear-gradient(to right, #141e30, #243b55)','linear-gradient(to right, #414d0b, #727a17)','linear-gradient(to right, #4776e6, #8e54e9)','linear-gradient(to right, #aa076b, #61045f)']
  
  
  let hi = ['hello sir','hello sir how are you']
  let how = ['Sir i am ok','I am fine and you?','Why should i tell you','I am fine and you?']
  let love = ['you are stupid','i love you too','fuck','no chance']
  let whatName = ['my name is rocko and my creator name is Jim tanveer','Hey this is rocko']
  let whoYou = ['I am just a robot and i am your very good friend . I love to help people . I live in dhaka bangladesh']
  let doask = ['Yes sir']
  let why = ['i dont know']
  let can = ['sorry sir my creator zim tanvir researching on this issue']
  let bye = ['See you soon Sir','Have a nice day sir bye','ta ta bye bye']
  let boss = ['My boss is jim tanveer , he created me and he is a nice person','jim tanveer is my boss. he created me']
  let eat = ['Thanks sir i am on diet','sorry sir robots cant eat']
  let rocco = ['please tell me sir','what can i do for you','please tell me','yes sir i can do anything for you ']
  let etc = ['thank you sir for talking with me', 'perfect','great']
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  
  
  recognition.onstart = function(){
      
      
  }
  
  recognition.onresult = function(){
      let msg = event.results[0][0].transcript
      readLoud(msg)
     console.log(msg)
      
  }
  
  
  btn.addEventListener("click",event=>{
      recognition.start()
      
  })


  function readLoud(msg){
    let speech = new SpeechSynthesisUtterance();

      if(msg.includes('how are you')){
          let final = how[Math.floor(Math.random() * how.length)]
          speech.text = final
          rockoMsg.textContent=final 

      }
      else if(msg.includes('love you')){
        let final = love[Math.floor(Math.random() * love.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }
      else if(msg.includes('your name')){
        let final = whatName[Math.floor(Math.random() * whatName.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('who are you') || msg.includes('yourself')){
        let final = whoYou[Math.floor(Math.random() * whoYou.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('hi') || msg.includes('hello') || msg.includes('WhatsApp')){
        let final = hi[Math.floor(Math.random() * hi.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('why')){
        let final = why[Math.floor(Math.random() * why.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('do') || msg.includes('ok') || msg.includes('understand')){
        let final = doask[Math.floor(Math.random() * doask.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('can')){
        let final = can[Math.floor(Math.random() * can.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }



      else if(msg.includes('ok bye')){
        let final = bye[Math.floor(Math.random() * bye.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('your boss') || msg.includes('your owner')){
        let final = boss[Math.floor(Math.random() * boss.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('date today') || msg.includes('date is today') || msg.includes('todays date')){
         
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const d = new Date();
        let final = d.getDate() + " " +monthNames[d.getMonth()] + " " + d.getFullYear()
        speech.text = final
        rockoMsg.textContent=final
      }


      else if(msg.includes('you hungry') || msg.includes('want to eat')){
        let final = eat[Math.floor(Math.random() * eat.length)]
        speech.text = final
        rockoMsg.textContent=final 
      }

      else if(msg.includes('your hobby') || msg.includes('hobbies')){
        speech.text = 'i love to learn new things'
        rockoMsg.textContent='i love to learn new things'
      }

      else if(msg.includes('thank you') || msg.includes('thanks') || msg.includes('thankyou') ){
        speech.text = 'you are welcome sir'
        rockoMsg.textContent='You are welcome sir'
      }

      else if(msg.includes('rocco') || msg.includes('your help')){
        let final = rocco[Math.floor(Math.random() * rocco.length)]
        speech.text = final
        rockoMsg.textContent= final
      }

      

      else if(msg.includes('about') || msg.includes('about bangladesh')){
        speech.text = 'Bangladesh is very beautiful country'
        rockoMsg.textContent='Bangladesh is very beautiful country'
      }

      else if(msg.includes('good morning')){
      
        speech.text = "good morning sir"
        rockoMsg.textContent="good morning sir"
      }

      else if(msg.includes('good night')){
      
        speech.text = "good night sir"
        rockoMsg.textContent= "good night sir"
      }

      else if(msg.includes('good evening')){
      
        speech.text = "good evening sir"
        rockoMsg.textContent= "good evening sir"
      }


      else if(msg.includes('good afternoon')){
      
        speech.text = "good afternoon sir"
        rockoMsg.textContent= "good afternoon sir"
      }

     else if(msg.includes('change background color')|| msg.includes('change background colour') || msg.includes('colour') || msg.includes('color')){
        let box = document.getElementsByClassName('box')[0]
        let box2 = document.getElementsByClassName('box')[1]
        
        if(count >= colors.length){
            count = 0
        }
            box.style.background = colors[count]
            box2.style.background = colors[count]
            count++;
            

        
    }

    // colors[Math.floor(Math.random() * colors.length)]
   else{
    let final = etc[Math.floor(Math.random() * etc.length)]
    speech.text = final
    rockoMsg.textContent= final
   }

    speech.volume = 1
    speech.rate = 0.4
    speech.pitch = 1
    window.speechSynthesis.speak(speech);
}





}









