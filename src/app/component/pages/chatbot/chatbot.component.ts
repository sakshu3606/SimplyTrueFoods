import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ChatbotComponent {
  isOpen = false;
  userMessage = '';
  currentIndex = 0;

  // Prewritten conversation between "User" and "Bot"
  conversation = [
    { from: 'bot', text: 'Hey there! 👋' },
    { from: 'user', text: 'Hey! How are you?' },
    { from: 'bot', text: 'I’m great! Just enjoying the sunshine ☀️' },
    { from: 'user', text: 'Lucky you! It’s raining here 🌧️' },
    { from: 'bot', text: 'Oh no! Perfect weather for coffee though ☕' },
    { from: 'user', text: 'True! Just made a cup.' },
    { from: 'bot', text: 'Yum! Do you take sugar or black?' },
    { from: 'user', text: 'Black, always.' },
    { from: 'bot', text: 'Nice. You sound like a coffee pro 😎' },
    { from: 'user', text: 'Haha, I try!' },
    { from: 'bot', text: 'So, any plans for the weekend?' },
    { from: 'user', text: 'Thinking about going hiking 🥾' },
    { from: 'bot', text: 'That’s awesome! Nature is the best healer 🌿' },
    { from: 'user', text: 'Absolutely. I need a break from the city.' },
    { from: 'bot', text: 'I hear you! The city can be exhausting.' },
    { from: 'user', text: 'Exactly! Anyway, what’s new with you?' },
    { from: 'bot', text: 'Not much, just chatting with awesome people like you 😄' }
  ];

  // Messages shown in the chat window
  messages: { from: string; text: string }[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;

    // Start conversation only once when opened
    if (this.isOpen && this.messages.length === 0) {
      this.playConversation();
    }
  }

  playConversation() {
    if (this.currentIndex < this.conversation.length) {
      this.messages.push(this.conversation[this.currentIndex]);
      this.currentIndex++;

      // Delay before next message to simulate real conversation
      setTimeout(() => this.playConversation(), 1000);
    }
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ from: 'user', text: this.userMessage });

      // Simulated bot reply
      setTimeout(() => {
        this.messages.push({ from: 'bot', text: 'Haha, that’s interesting! 😄' });
      }, 800);

      this.userMessage = '';
    }
  }
}
