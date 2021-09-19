const disableButton = () => {
  const button = document.querySelector('.copy-code-bt');
  button.disabled = true;
}

const parseCodeFromUrl = () => {
  const codeParagraph = document.querySelector('.code');
  const url = new URL(window.location.href);
  const parsedCode = url.searchParams.get('code');

  codeParagraph.textContent = !!parsedCode ? parsedCode : 'parsing error';
  codeParagraph.classList.add('error');

  if (!parsedCode) {
    disableButton();
  }

  console.log(url.toString());
};

const copyToClipboard = () => {
  const code = document.querySelector('.code').textContent;
  console.log(code);
};

const main = () => {
  const button = document.querySelector('.copy-code-bt');
  parseCodeFromUrl();
  button.addEventListener('click', copyToClipboard);
};

main();
