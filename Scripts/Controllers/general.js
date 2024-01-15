

export function generalCon() {

  const acc = document.querySelector('.account-container');
  const helps = document.querySelector('.help-container');
  
  acc.addEventListener('click', () => {
    const accountArrow = document.querySelector('.account-arrow');
    const helpArrow = document.querySelector('.help-arrow');
  
    document.querySelector('.sign-in-container').classList.toggle('hide');
    document.querySelector('.helps').classList.add('hide');
    acc.classList.toggle('background');
    helps.classList.remove('background');
    helpArrow.classList.replace('fa-angle-up', 'fa-angle-down');
  
    if (accountArrow.classList.contains('fa-angle-down')) {
      accountArrow.classList.replace('fa-angle-down', 'fa-angle-up')
    } else {
      accountArrow.classList.replace('fa-angle-up', 'fa-angle-down')
    };
  });
  
  helps.addEventListener('click', () => {
    const helpArrow = document.querySelector('.help-arrow');
    const accountArrow = document.querySelector('.account-arrow');
  
    helps.classList.toggle('background');
    acc.classList.remove('background');
    document.querySelector('.sign-in-container').classList.add('hide');
    document.querySelector('.helps').classList.toggle('hide');
    accountArrow.classList.replace('fa-angle-up', 'fa-angle-down')
    
    if (helpArrow.classList.contains('fa-angle-down')) {
      helpArrow.classList.replace('fa-angle-down', 'fa-angle-up')
    } else {
      helpArrow.classList.replace('fa-angle-up', 'fa-angle-down')
    };
  });
  
  document.querySelectorAll('.hide-pop').forEach(element => {
    element.addEventListener('click', () => {
      acc.classList.remove('background');
      helps.classList.remove('background');
  
      document.querySelector('.sign-in-container').classList.add('hide');
      document.querySelector('.helps').classList.add('hide');
      
      document.querySelector('.account-arrow').classList.replace('fa-angle-up', 'fa-angle-down');
      document.querySelector('.help-arrow').classList.replace('fa-angle-up', 'fa-angle-down');
    });
  });
};
