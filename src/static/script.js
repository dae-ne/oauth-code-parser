const BUTTON_QUERY = 'button';
const CODE_QUERY = 'p';

const disableButton = () => {
  const button = document.querySelector(BUTTON_QUERY);
  button.disabled = true;
};

const parseCodeFromUrl = () => {
  const codeParagraph = document.querySelector(CODE_QUERY);
  const url = new URL(window.location.href);
  const parsedCode = url.searchParams.get('code');

  codeParagraph.textContent = !!parsedCode ? parsedCode : 'parsing error';
  
  if (!parsedCode) {
    disableButton();
    codeParagraph.classList.add('error');
  }
};

const copyToClipboard = () => {
  const code = document.querySelector(CODE_QUERY).textContent;
  navigator.clipboard.writeText(code);
};

const button = document.querySelector(BUTTON_QUERY);
parseCodeFromUrl();
button.addEventListener('click', copyToClipboard);
