let navItems = document.querySelectorAll('.nav-link');
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
      // Menghapus kelas active dari semua item navbar
      for (let j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove('active');
      }
      // Menambahkan kelas active pada item navbar yang diklik
      this.classList.add('active');
    });
  }