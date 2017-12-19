<script>
window.onscroll=function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementbyId("btn-top").style.display="block";
    } else {
        document.getElementbyId("btn-top").style.display = "none";
    }

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>