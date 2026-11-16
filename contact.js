"use strict";

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("full-name");
const messageInput = document.getElementById("message");
const characterCount = document.getElementById("character-count");
const statusMessage = document.getElementById("form-status");
const submitButton = document.getElementById("submit-button");

// Keep the demo disabled until its local-only handler is ready.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  statusMessage.textContent = `Thanks, ${nameInput.value.trim()}! Your demo submission is complete. No message was sent or saved.`;
});

form.addEventListener("input", () => {
  statusMessage.textContent = "";
  characterCount.textContent = `${messageInput.value.length} / ${messageInput.maxLength}`;
  messageInput.setCustomValidity(
    messageInput.value && !messageInput.value.trim()
      ? "Please enter a message with more than just spaces."
      : ""
  );
});

submitButton.disabled = false;
