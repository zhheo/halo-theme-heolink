var heolink = {
  initNavLink: function() {
    // 获取所有的导航链接
    const navLinks = document.querySelectorAll(".left_nav_link_group_title");

    // 为每个链接添加点击事件监听器
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止默认的链接跳转行为

        // 获取目标元素的ID
        const targetId = this.getAttribute("data-target");
        const targetElement = document.querySelector(`#${targetId}`);

        if (targetElement) {
          // 如果目标元素存在，使用 scrollIntoView 方法进行平滑滚动
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else {
          // 如果目标元素不存在，存储目标ID到本地存储
          localStorage.setItem('targetId', targetId);
          // 跳转到首页
          window.location.href = "/";
        }
      });
    });

    // 页面加载时检查本地存储中的任务
    this.checkAndExecuteStoredTask();
  },

  checkAndExecuteStoredTask: function() {
    // 检查是否有存储的目标ID
    const targetId = localStorage.getItem('targetId');

    if (targetId) {
      // 获取目标元素
      const targetElement = document.querySelector(`#${targetId}`);
      
      if (targetElement) {
        // 如果目标元素存在，使用 scrollIntoView 方法进行平滑滚动
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
      // 清除存储的任务
      localStorage.removeItem('targetId');
    }
  },

  listenNavScroll: function() {
    const scrollableElement = document.getElementById('left_nav_group');

    scrollableElement.addEventListener('scroll', function () {
      // 在滚动时添加显示滚动条的类
      scrollableElement.classList.add('show-scrollbar');
      
      // 设定一个定时器，在停止滚动后隐藏滚动条
      clearTimeout(scrollableElement.hideScrollbarTimeout);
      scrollableElement.hideScrollbarTimeout = setTimeout(() => {
        scrollableElement.classList.remove('show-scrollbar');
      }, 500); // 停止滚动后500ms隐藏滚动条
    });
  }
};
