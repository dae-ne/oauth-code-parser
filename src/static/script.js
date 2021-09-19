const disableButton = () => {
  const button = document.querySelector('.copy-code-bt');
  button.disabled = true;
}

const parseCodeFromUrl = () => {
  const codeParagraph = document.querySelector('.code');
  const url = new URL(window.location.href);
  const parsedCode = url.searchParams.get('code');

  codeParagraph.textContent = !!parsedCode ? parsedCode : 'parsing error';
  
  if (!parsedCode) {
    disableButton();
    codeParagraph.classList.add('error');
  }
};

const copyToClipboard = () => {
  const code = document.querySelector('.code').textContent;
  navigator.clipboard.writeText(code);
};

const main = () => {
  const button = document.querySelector('.copy-code-bt');
  parseCodeFromUrl();
  button.addEventListener('click', copyToClipboard);
};

main();
