// ローディングフェードアウト
document.addEventListener('DOMContentLoaded', function () {
  fadeOut(".loading", 1000);
});

function fadeOut(sel, ms) {
  const elm = document.querySelector(sel);
  elm.style.opacity = "1";
  elm.style.transition = "opacity " + ms.toString() + "ms";
  setTimeout(function () { elm.style.opacity = "0"; }, 1); // 0.001秒後に transition開始
  setTimeout(function () { elm.style.display = "none"; }, ms + 10); // X.01秒後に完全に消す。
}

// ハンバーガーメニュー用モーダル
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menuModal = document.getElementById("menuModal");

  toggle?.addEventListener("click", () => {
    menuModal.classList.toggle("active");
  });

  menuModal?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuModal.classList.remove("active");
    });
  });

  menuModal?.addEventListener("click", (e) => {
    const isClickInsideMenu = e.target.closest("ul");
    if (!isClickInsideMenu) {
      menuModal.classList.remove("active");
    }
  });
});

// 共通モーダル用
document.addEventListener("DOMContentLoaded", () => {
  const triggerLinks = document.querySelectorAll('a[href^="#hobby"], a[href^="#skills"], a[href^="#personality"]');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('modalOverlay');

  const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');

    // ✨追加：前回の表示要素をリセット
    document.querySelectorAll('.modal-content > div').forEach(div => {
      div.classList.remove('show');
    });
  };

  triggerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').replace('#', '');

      // 一旦すべて非表示
      document.querySelectorAll('.modal-content > div').forEach(div => {
        div.classList.remove('show');
      });

      // 該当のコンテンツを表示してモーダルを出す
      const targetDiv = document.querySelector(`.${target}`);
      if (targetDiv) {
        targetDiv.classList.add('show');
        modal.classList.add('active');
        overlay.classList.add('active');
      }
    });
  });

  // 閉じる操作すべてに closeModal を使う
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});





//CAREER
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline li");
  const timeline = document.querySelector(".timeline");

  const inView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight - 100
    );
  };

  const animateTimeline = () => {
    items.forEach((item) => {
      if (inView(item)) {
        item.classList.add("is-visible");
      }
    });

    if (inView(timeline)) {
      timeline.classList.add("line-animated");
    }
  };

  window.addEventListener("scroll", animateTimeline);
  animateTimeline(); // 初期状態でも実行
});
