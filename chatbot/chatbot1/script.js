// async function handleUserInput() {
//     const userInput = document.getElementById('userInput').value.trim();
//     const chatbox = document.querySelector('.chatbox');
  
//     if (userInput !== "") {
//       const userChat = document.createElement('li');
//       userChat.classList.add('chat', 'outgoing');
//       userChat.innerHTML = `<p>You: ${userInput}</p>`;
//       chatbox.appendChild(userChat);
  
//       document.getElementById('userInput').value = '';
  
//       try {
//         const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
//           method: 'POST',
//           headers: {
//             'Authorization': 'Bearer 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',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             inputs: {
//               text: userInput
//             }
//           })
//         });
  
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
  
//         const data = await response.json();
//         const botMessage = data.generated_text || "I'm sorry, I do not have an answer for that question.";
        
//         const botResponse = document.createElement('li');
//         botResponse.classList.add('chat', 'incoming');
//         botResponse.innerHTML = `
//           <span class="material-symbols-outlined">smart_toy</span>
//           <p>${botMessage}</p>
//         `;
//         chatbox.appendChild(botResponse);
//       } catch (error) {
//         console.error('Error:', error);
//         const errorResponse = document.createElement('li');
//         errorResponse.classList.add('chat', 'incoming');
//         errorResponse.innerHTML = `
//           <span class="material-symbols-outlined">smart_toy</span>
//           <p>Sorry, there was an error processing your request.</p>
//         `;
//         chatbox.appendChild(errorResponse);
//       }
  
//       chatbox.scrollTop = chatbox.scrollHeight;
//     }
//   }
async function handleUserInput() {
    const userInput = document.getElementById('userInput').value.trim();
    const chatbox = document.querySelector('.chatbox');
  
    if (userInput !== "") {
      const userChat = document.createElement('li');
      userChat.classList.add('chat', 'outgoing');
      userChat.innerHTML = `<p>You: ${userInput}</p>`;
      chatbox.appendChild(userChat);
  
      document.getElementById('userInput').value = '';
  
      try {
        const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            inputs: userInput
          })
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('API Response:', data); // Debugging: Log the full API response
  
        // Access the generated text from the response
        const botMessage = data[0]?.generated_text || "I'm sorry, I do not have an answer for that question.";
  
        const botResponse = document.createElement('li');
        botResponse.classList.add('chat', 'incoming');
        botResponse.innerHTML = `
          <span class="material-symbols-outlined">smart_toy</span>
          <p>${botMessage}</p>
        `;
        chatbox.appendChild(botResponse);
      } catch (error) {
        console.error('Error:', error); // Debugging: Log errors
        const errorResponse = document.createElement('li');
        errorResponse.classList.add('chat', 'incoming');
        errorResponse.innerHTML = `
          <span class="material-symbols-outlined">smart_toy</span>
          <p>Sorry, there was an error processing your request.</p>
        `;
        chatbox.appendChild(errorResponse);
      }
  
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }
  
  