<script>
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav');

    menuIcon.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
</script>