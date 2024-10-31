function toast({title='', message='', state='info', duration=3000}) {
    var mainToast =  document.getElementById('toast');
      const icons = {
          success:'fa-solid fa-circle-check',
          info: "fa-solid fa-circle-info",
          warning: "fa-solid fa-triangle-exclamation",
          error: "fa-solid fa-circle-xmark"
      };
      const icon = icons[state];
    if (mainToast) {
          const toast = document.createElement('div');
          const delay = (duration / 1000).toFixed(2);
          const timeoutDisable = duration + 1000;
           // Auto remove toast
         const autoRemoveID = setTimeout(() => {
              mainToast.removeChild(toast);
          }, timeoutDisable);
           // Remove toast when clicked on icon close 
           toast.onclick = (e)=>{
              if (e.target.closest('.toast__close')) {
                  mainToast.removeChild(toast);
                  clearTimeout(autoRemoveID);
              }
           }
          toast.classList.add('toast', `toast--${state}`);
          toast.style.animation = `slideInleft ease .3s,fadeOut linear 1s ${delay}s forwards`;
          toast.innerHTML =
          `<div class="toast__icon"><i class="${icon}"></i></div>
          <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast-msg">${message}</p>
          </div>
          <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>`;
          mainToast.appendChild(toast);
      }  
  }
  function showToast(){
      toast({
          title: 'Đang tải CV...',
          message:'Vui lòng kiểm tra hộp thoại tải xuống.',
          state:'success',
          duration: 3000000,
      });
  }
  