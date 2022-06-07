document.getElementById("clickMsg").addEventListener("click", showBox);
function showBox(){
        document.getElementById('side-bar').style.display="block"};

        window.addEventListener('mouseup',function(event){
            var pol = document.getElementById('side-bar');
                pol.style.display = 'none';
            }
      );  

const searchInput=document.querySelector("#search-input");
searchInput.addEventListener("keydown",function(event){
if(event.code === "Enter"){
    search();
}
});
function search(){
    const input= searchInput.value;
    window.location.href = "https://www.google.com/search?q="+input+"&oq="+input+ "&aqs=chrome.0.0i355i512j46i395i512j0i395i512l5j46i395i419i424i512j0i395i512l2.1487j1j15&sourceid=chrome&ie=UTF-8";

}


