const BUTTON_QUERY = '.btn';
const CODE_QUERY = '.text';

const disableButton = () => {
  const button = document.querySelector(BUTTON_QUERY);
  button.disabled = true;
};

const showToast = (message, type = 'message') => {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    className: `toast toast-${type}`
  }).showToast();
};

const parseCodeFromUrl = () => {
  const codeParagraph = document.querySelector(CODE_QUERY);
  const url = new URL(window.location.href);
  const parsedCode = url.searchParams.get('code');

  codeParagraph.textContent = parsedCode ?? 'parsing error';
  
  if (!parsedCode) {
    disableButton();
    codeParagraph.classList.add('error');
    showToast('Code cannot be parsed', 'error');
  }
};

const copyToClipboard = () => {
  const code = document.querySelector(CODE_QUERY).textContent;
  navigator.clipboard.writeText(code);
  showToast('Copied to clipboard');
};

const button = document.querySelector(BUTTON_QUERY);
parseCodeFromUrl();
button.addEventListener('click', copyToClipboard);
